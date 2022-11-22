/* <project-root>/src/worker/app-workers/mocked-cpu-intensive.worker.ts */
import { ConvertFreqToTone } from './shared/common-detector';
import { WorkerMessage } from './shared/worker-message.model';
import { Observable } from 'rxjs';


export class PitchDetectorWorker {
  public static doWork(value: WorkerMessage): Observable<WorkerMessage> {
    return new Observable((observer) => {
      const pitchDetector = new PitchDetector();
      pitchDetector.init_parameters(value.data.parameters);
      pitchDetector.run(value.data.buffer, value.data.sampleRate, value.data.timeStart, value.data.timeStop, value.data.debug).subscribe(
        data => {
          observer.next(new WorkerMessage(value.topic, data));
          if(data.progression == null){
            observer.complete();
          }
        }
      );
    });
  }
}




export interface PitchResult {
  pitch_st:number[];
  energy_db:number[];
  te_s: number;
  f0_hz: number;
  timestart_s: number;
  timestop_s: number;
}
export interface PitchParameter {
  windowtimesize_s: number;
  sonogramperiod_s: number;
  f0_hz: number;
  freqmin_hz: number;
  freqmax_hz: number;
  cutoff: number;
  smallcutoff: number;
}
export const DefaultPitchParameter:PitchParameter = {
  windowtimesize_s: 20e-3,
  sonogramperiod_s: 1e-3,
  f0_hz: 32.7032,
  freqmin_hz: 80,
  freqmax_hz: 5000,
  cutoff: 0.97,
  smallcutoff: 0.5
}


export class PitchDetector {
  private cutoff: number;
  private smallCutoff: number;
  private lowerPitchCutoff: number;
  private higherPitchCutoff: number;
  private WindowTimeSize_s:number;
  private SonogramPeriod_s:number;
  private f0_hz:number;
  // Mc Leof Pitch Detection
  private sampleRate: number;
  private nsdf: Float32Array;
  private turningPointX: number;
  private turningPointY: number;
  private maxPositions: Array<number> = [];
  private periodEstimates: Array<number> = [];
  private ampEstimates: Array<number> = [];
  private Te: number;
  private NbSamples: number;
  private progression: number;

  constructor() {}

  init_parameters(pitchParameter: PitchParameter) {
      // Mc Leod Pitch detection parameters
    this.cutoff = pitchParameter.cutoff;
    this.smallCutoff = pitchParameter.smallcutoff;
    this.lowerPitchCutoff = pitchParameter.freqmin_hz;
    this.higherPitchCutoff = pitchParameter.freqmax_hz;
    // Pitch array parameters
    this.WindowTimeSize_s = pitchParameter.windowtimesize_s;
    this.SonogramPeriod_s = pitchParameter.sonogramperiod_s;
    this.f0_hz = pitchParameter.f0_hz;
  }

  // MC LEOD PITCH DETECTOR
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  private _ClosestTimeIndice(bufferMono:Float32Array, time_s: number) {
    let ind:number = Math.round(time_s * this.sampleRate);
    if(ind < 0){
      ind = 0;
    }
    if(ind > bufferMono.length - 1){
      ind = bufferMono.length - 1;
    }
    return ind;
  }

  private _GetIndiceStartAndStop(bufferMono:Float32Array, TimeStart_s?:number, TimeStop_s?:number) {
    let IndStart:number = 0;
    let IndStop:number = 0;

    if(TimeStop_s == null) {
        IndStop = bufferMono.length;
    } else {
        IndStop = this._ClosestTimeIndice(bufferMono, TimeStop_s);
    }

    if(TimeStart_s == null) {
        IndStart = 0;
    } else {
        IndStart = this._ClosestTimeIndice(bufferMono, TimeStart_s);
    }

    if((IndStop > bufferMono.length) || (IndStart > IndStop) || (IndStop < 1) || (IndStart < 0)){
      console.log("Error choosing time start and time stop");
    }
    return [IndStart, IndStop];
  }

  run(bufferMono:Float32Array, sampleRate:number, TimeStart_s?:number, TimeStop_s?:number, debug:boolean=false): Observable<any> {
    return new Observable((observer) => {
      this.sampleRate = sampleRate;
      let WS:number = Math.round(this.WindowTimeSize_s * this.sampleRate);
      this.nsdf = new Float32Array(WS);
      let PitchList:number[] = []
      let EnergyList:number[] = []
      let tempPitch:number = 0;
      let tempEnergy:number = 0;

      let IndStart:number = 0;
      let IndStop:number = 0;
      [IndStart, IndStop] = this._GetIndiceStartAndStop(bufferMono, TimeStart_s, TimeStop_s);

      let num_sample:number = 0;
      let IndA:number = IndStart;
      let IndB:number = IndStart + WS;
      let sound_chunk:number[] = new Array(WS);

      this.progression = 0;
      let pastprogress:number = 0;
      while(IndB < IndStop){
        this.progression = Math.round((IndB - IndStart) * 100.0 / (IndStop - IndStart));
        if(this.progression != pastprogress) {
          pastprogress = this.progression;
          observer.next({progression: {value: this.progression, total: 100, step: "Mc Leod Pitch Detection"}});
        }
        for(let k=0; k < WS; k++){
          sound_chunk[k] = bufferMono[IndA + k];
        }
        tempPitch = this.getPitch(sound_chunk)
        tempPitch = ConvertFreqToTone(tempPitch, this.f0_hz);
        tempEnergy = this.getEnergy(sound_chunk) / WS;
        tempEnergy = 10.0 * Math.log10(tempEnergy);

        if(Number.isNaN(tempPitch) || !Number.isFinite(tempPitch)){
          tempPitch = -1;
        }
        if(Number.isNaN(tempEnergy) || !Number.isFinite(tempEnergy)){
          tempEnergy = -1000;
        }  

        PitchList.push(tempPitch);
        EnergyList.push(tempEnergy);
        // Next indice of chunk
        num_sample = num_sample +1;
        IndA = Math.round((num_sample * this.SonogramPeriod_s) * this.sampleRate)  + IndStart;
        IndB = IndA + WS;
      }
      let output:PitchResult = {
        'pitch_st': PitchList,
        'energy_db': EnergyList,
        'te_s': this.SonogramPeriod_s,
        'f0_hz': this.f0_hz,
        'timestart_s': TimeStart_s,
        'timestop_s': TimeStop_s
      };

      observer.next({result: output});
      observer.complete();
    });
  }

  private getEnergy(audioBuffer: number[]){
    let energy:number= 0;
    for(let k=0; k < audioBuffer.length; k++){
      energy = energy + Math.pow(audioBuffer[k], 2);
    }
    return energy;
  }

  // MC LEOD PITCH DETECTOR
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  private normalizedSquareDifference(audioBuffer: number[]) {
    //
    let audioBufferMean:number = 0;
    for (let tau = 0; tau < audioBuffer.length; tau++) {
      audioBufferMean += audioBuffer[tau]
    }
    audioBufferMean = audioBufferMean/audioBuffer.length;
    for (let tau = 0; tau < audioBuffer.length; tau++) {
      audioBuffer[tau] -= audioBufferMean;
    }

    let maxval:number;
    //
    for (let tau = 0; tau < audioBuffer.length; tau++) {
      let acf: number = 0;
      for (let i = 0; i < audioBuffer.length - tau; i++) {
        acf += audioBuffer[i] * audioBuffer[i + tau];
      }
      if(tau === 0) {
        maxval = acf;
      }
      this.nsdf[tau] = acf/maxval;
    }
  }

  public getPitch(audioBuffer: number[]) {
    // 0. Clear previous results (Is this faster than initializing a list
    // again and again?)
    this.maxPositions = [];
    this.periodEstimates = [];
    this.ampEstimates = [];

    // 1. Calculate the normalized square difference for each Tau value.
    this.normalizedSquareDifference(audioBuffer);
    // 2. Peak picking time: time to pick some peaks.
    this.peakPicking();

    let highestAmplitude: number = -Infinity;
    for (let i = 0; i < this.maxPositions.length; i++) {
      const tau = this.maxPositions[i];
      // make sure every annotation has a probability attached
      highestAmplitude = Math.max(highestAmplitude, this.nsdf[tau]);

      if (this.nsdf[tau] > this.smallCutoff) {
        // calculates turningPointX and Y
        this.parabolicInterpolation(tau);
        // store the turning points
        this.ampEstimates.push(this.turningPointY);
        this.periodEstimates.push(this.turningPointX);
        // remember the highest amplitude
        highestAmplitude = Math.max(
          highestAmplitude,
          this.turningPointY
        );
      }
    }

    let pitch: number | null = null;
    if (this.periodEstimates.length > 0) {
      // use the overall maximum to calculate a cutoff.
      // The cutoff value is based on the highest value and a relative
      // threshold.
      const actualCutoff: number = this.cutoff * highestAmplitude;

      // find first period above or equal to cutoff
      let periodIndex: number = 0;
      for (let i = 0; i < this.ampEstimates.length; i++) {
        if (this.ampEstimates[i] >= actualCutoff) {
          periodIndex = i;
          break;
        }
      }

      const period: number = this.periodEstimates[periodIndex];
      const pitchEstimate: number = Number(this.sampleRate / period);
      if (pitchEstimate > this.lowerPitchCutoff) {
        pitch = pitchEstimate;
      } else {
        pitch = -1;
      }
    }
    return pitch;
  }

  private parabolicInterpolation(tau: number) {
    let nsdfa: number = this.nsdf[tau - 1];
    let nsdfb: number = this.nsdf[tau];
    let nsdfc: number = this.nsdf[tau + 1];
    let bValue: number = tau;
    let bottom: number = nsdfc + nsdfa - 2 * nsdfb;
    if (bottom == 0.0) {
      this.turningPointX = bValue;
      this.turningPointY = nsdfb;
    } else {
      const delta: number = nsdfa - nsdfc;
      this.turningPointX = bValue + delta / (2 * bottom);
      this.turningPointY = nsdfb - delta * delta / (8 * bottom);
    }
  }

  private peakPicking() {
    let pos: number = 0;
    let curMaxPos: number = 0;

    // find the first negative zero crossing
    while (pos < (this.nsdf.length - 1) / 3 && this.nsdf[pos] > 0) {
      pos++;
    }

    // loop over all the values below zero
    while (pos < this.nsdf.length - 1 && this.nsdf[pos] <= 0.0) {
      pos++;
    }

    // can happen if output[0] is NAN
    if (pos == 0) {
      pos = 1;
    }

    while (pos < this.nsdf.length - 1) {
      if (
        this.nsdf[pos] > this.nsdf[pos - 1] &&
        this.nsdf[pos] >= this.nsdf[pos + 1]
      ) {
        if (curMaxPos == 0) {
          // the first max (between zero crossings)
          curMaxPos = pos;
        } else if (this.nsdf[pos] > this.nsdf[curMaxPos]) {
          // a higher max (between the zero crossings)
          curMaxPos = pos;
        }
      }
      pos++;
      // a negative zero crossing
      if (pos < this.nsdf.length - 1 && this.nsdf[pos] <= 0) {
        // if there was a maximum add it to the list of maxima
        if (curMaxPos > 0) {
          this.maxPositions.push(curMaxPos);
          curMaxPos = 0; // clear the maximum position, so we start
          // looking for a new ones
        }
        while (pos < this.nsdf.length - 1 && this.nsdf[pos] <= 0.0) {
          pos++; // loop over all the values below zero
        }
      }
    }
    if (curMaxPos > 0) {
      // if there was a maximum in the last part
      this.maxPositions.push(curMaxPos); // add it to the vector of maxima
    }
  }
}
