import { WorkerMessage } from './shared/worker-message.model';
import { PitchResult } from './pitch-detector.worker';
import { autocovariance, MaxOfArray, MinOfArray, gaussian, histogram, convolve, mode } from './shared/common-detector';
import { Observable } from 'rxjs';

export class StepDetectorWorker {
  public static doWork(value: WorkerMessage): Observable<WorkerMessage> {
    return new Observable((observer) => {
      const stepDetector = new StepDetector();
      stepDetector.init_parameters(value.data.parameters);
      stepDetector.run(value.data.pitchResult, value.data.debug).subscribe(
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




export interface OneNoteStepResult {
  type_b:boolean;
  length_s:number;
  f0_hz:number;
  pitch_st:number;
  energy_db:number;
  linked_b:boolean;
}
export interface StepResult {
  notes:OneNoteStepResult[];
  offset_s:number;
}

export interface StepParameter {
  medianfiltersize_s: number;
  thresholdenergyon_db: number;
  thresholdenergyoff_db: number;
  maxpitchvariation_st: number;
  minimumtimesize_s: number;
  minnotesize_s: number;
  minnotediff_st: number;
  lmhgaussian_st: number;
}
export const DefaultStepParameter:StepParameter = {
  medianfiltersize_s: 51e-3,
  thresholdenergyon_db: 25,
  thresholdenergyoff_db: 30,
  maxpitchvariation_st: 1,
  minimumtimesize_s: 50e-3,
  minnotesize_s: 100e-3,
  minnotediff_st: 0.5,
  lmhgaussian_st: 0.5
}











export class gaussian_kde {
  private dataset:number[];
  private n:number;
  private factor:number;
  private _data_covariance:number;
  private _data_inv_cov:number;
  private covariance:number;
  private inv_cov:number;
  private _norm_factor:number;

  constructor(dataset:number[]) {
    this.dataset = dataset;
    this.n = dataset.length;
    this.factor = Math.pow(this.n, -1./(1+4));
    this._data_covariance = autocovariance(this.dataset);
    this._data_inv_cov = 1.0/this._data_covariance;
    this.covariance = this._data_covariance * Math.pow(this.factor, 2);
    this.inv_cov = this._data_inv_cov / Math.pow(this.factor, 2);
    this._norm_factor = Math.sqrt(2*Math.PI*this.covariance) * this.n;
  }
    
  evaluate(points:number[]){
    let m:number = points.length;
    let result:number[] = new Array(m).fill(0);
    let diff:number;
    let tdiff:number;
    let energy:number;
    for(let k=0; k<this.n; k++) {
      for(let p=0; p<m; p++) {
        diff = this.dataset[k] - points[p];
        tdiff = this.inv_cov * diff;
        energy = diff*tdiff / 2.0;
        result[p] = result[p] + Math.exp(-energy);
      }
    }
    for(let p=0; p<m; p++) {
      result[p] = result[p] / this._norm_factor ;
    }
    return result;
  }
}
export function GaussianKdeHistogram(data:number[], bins:number){
  let xmin:number = 9999;
  let xmax:number = -9999;
  for(let k=0; k<data.length; k++) {
    if(data[k] > xmax){
      xmax = data[k];
    }
    if(data[k] < xmin){
      xmin = data[k];
    }
  }

  let x:number[] = new Array(bins);
  let stepbins:number = (xmax-xmin)/(bins-1);
  for(let k=0; k<bins; k++) {
    x[k] = xmin + stepbins*k;
  }

  let density = new gaussian_kde(data);
  let histogram:number[] = density.evaluate(x);

  return [x, histogram];
}



export class HysteresisThreshold {
  private Activation:number;
  private Deactivation:number;
  private Signal:number[];

  constructor(InputSignal:number[], ActivationThreshold:number, DeactivationThreshold:number) {
    if(ActivationThreshold<DeactivationThreshold){
      console.log("The activation threshold cannot be lower than the deactivation threshold");
    }
    this.Activation = ActivationThreshold;
    this.Deactivation = DeactivationThreshold;
    this.Signal = InputSignal.slice();
  }

  StateNumber(k:number){
    if(this.Signal[k]>this.Activation){
      // Above the activation threshold
      return 2;
    } else if(this.Signal[k]>this.Deactivation){
      // Between the both thresholds
      return 1;
    } else {
      // Below the deactivation threshold
      return 0;
    }
  }

  PerformThresholding() {
    let N:number = this.Signal.length;
    let ResultVector:boolean[] = new Array(N).fill(false);
    
    // Initial condition
    let PastState:number = this.StateNumber(0);
    let kStartZone1:number = 0;
    if(PastState==0){
      ResultVector[0] = false;
    } else if(PastState==2){
      ResultVector[0] = true;
    } else {
      // Beginning of a between zone
      kStartZone1 = 0
    }
    
    let CurrentState:number;

    for(let k=1; k<N; k++) {
      CurrentState = this.StateNumber(k)
      
      if(CurrentState==0){
        if(PastState==1){
          for(let p=kStartZone1; p<k+1; p++) {
            ResultVector[p] = false;
          }
          PastState = 0;
        } else {
          ResultVector[k] = false;
          PastState = 0;
        }
      } else if(CurrentState==1){
        if(PastState==0){
          kStartZone1 = k;
          PastState = 1;
        } else if(PastState==2){
          ResultVector[k] = true;
          PastState = 2;
        }
      } else if(CurrentState==2){
        if(PastState==1){
          for(let p=kStartZone1; p<k+1; p++) {
            ResultVector[p] = true;
          }
          PastState = 2;
        } else {
          ResultVector[k] = true;
          PastState = 2;
        }
      }
    }
    return(ResultVector)
  }
}


export function ExtractPeakIndices(Signal:number[]){
  let PeakIndices:number[] = [];
  let StatutNoteAP:number;
  let StatutNoteAV:number = -1;
  let kStart:number = -99;

  if(Signal.length == 1){
    PeakIndices.push(0);
    return PeakIndices;
  }
  for(let k=1; k < Signal.length; k++) {
    if(Signal[k]>Signal[k-1]) {
      StatutNoteAP = 1;
    } else if(Signal[k]==Signal[k-1]) {
      StatutNoteAP = 0;
    } else {
      StatutNoteAP = -1;
    }
    
    // Not a peak
    if((StatutNoteAV==1) && (StatutNoteAP==0)) {
      kStart = k-1;
    }
    if((StatutNoteAV==0) && (StatutNoteAP==1)) {
      kStart = -99;
    }

    // Peak detected
    if((StatutNoteAV==1) && (StatutNoteAP==-1)) {
      PeakIndices.push(k-1);
    }
    if((StatutNoteAV==0) && (StatutNoteAP==-1) && (kStart != -99)) {
      PeakIndices.push(Math.round(((kStart+k-1)/2.0)));
    }
    
    StatutNoteAV = StatutNoteAP;
  }
  if(PeakIndices.length == 0) {
    PeakIndices.push(MaxOfArray(Signal).argmax);
  }
  return PeakIndices;
}



export interface NoteProperty {
  notelength: number;
  noteheight: number;
}

export class HistogramMethod {
  private Te:number;
  private LMH:number;
  private StepST:number;
  private StdGaussian:number;
  private GaussianSmooth:number[];

  constructor(Te:number, LMH:number, StepST:number) {
    this.Te = Te;
    this.LMH = LMH;
    this.StepST = StepST;
    this.StdGaussian = (LMH/StepST)/2.355;
    let NbPointsGaussian:number = Math.ceil(this.StdGaussian*3*2);
    if(NbPointsGaussian%2 == 0) {
      NbPointsGaussian += 1;
    }
    this.GaussianSmooth = gaussian(NbPointsGaussian, this.StdGaussian);
  }
  
  GetHistogram(Sonogram:number[]) {
    let NbStepMin:number = MinOfArray(Sonogram).value;
    let NbStepMax:number = MaxOfArray(Sonogram).value;
    NbStepMin = Math.floor(NbStepMin/this.StepST);
    NbStepMax = Math.ceil(NbStepMax/this.StepST);
    let MinST:number = NbStepMin*this.StepST;
    let MaxST:number = NbStepMax*this.StepST;
    let Histo:number[];
    let XRange:number[];
    [Histo, XRange] = histogram(Sonogram, NbStepMax-NbStepMin, MinST, MaxST)
    return [Histo, XRange];
  }
  
  SmoothHistogram(Histogram:number[]) {
    let HistogramSmooth:number[] = convolve(Histogram, this.GaussianSmooth);
    return HistogramSmooth;
  }

  DeletePeaksTooLow(NotesList:NoteProperty[], NbSamplesMin:number) {
    let NewList:NoteProperty[] = NotesList.slice();
    // Sort from highest to lowest
    NewList = NewList.sort((n1, n2) => n2.notelength - n1.notelength);
    while((NewList.length>1) && (NewList[NewList.length-1].notelength < NbSamplesMin) ) {
      NewList.pop();
    }
    return NewList;
  }
  
  ExtractPeaks(Sonogram:number[]) {
    let Histo:number[];
    let XRange:number[];
    [Histo, XRange] = this.GetHistogram(Sonogram);
    let HistogramSmooth:number[] = this.SmoothHistogram(Histo);
    // Detect Peak in the histogram
    let PeakIndices:number[] = ExtractPeakIndices(HistogramSmooth);
    let NotesList:NoteProperty[] = [];
    let tempheight:number;
    let templength:number;
    for(let k=0; k<PeakIndices.length; k++) {
      templength = HistogramSmooth[PeakIndices[k]];
      tempheight = XRange[PeakIndices[k]] + this.StepST/2.0;
      NotesList.push({notelength:templength, noteheight:tempheight});
    }
    return NotesList;
  }
  
  DeletePeaksTooClosed(NotesList:NoteProperty[], MinSemiToneGap:number) {
    let NewList:NoteProperty[] = NotesList.slice();
    let IndNote:number = 0;
    let NoteListLen:number = NewList.length;
    while(IndNote<(NoteListLen-1)) {
      NoteListLen = NewList.length;
      for(let IndNoteTest=NoteListLen-1; IndNoteTest > IndNote; IndNoteTest--) {
        if(Math.abs(NewList[IndNoteTest].noteheight - NewList[IndNote].noteheight) < MinSemiToneGap) {
          NewList.slice(IndNoteTest,1);
        }
      }
      IndNote += 1;
      NoteListLen = NewList.length;
    }
    return NewList;
  }
  
  ExtractNotes(Sonogram:number[], MinNoteSize:number, MinNoteDiff:number) {
    let NotesList:NoteProperty[] = this.ExtractPeaks(Sonogram);
    // Delete peaks under MinNoteSize
    let NbSampMin:number = Math.round(MinNoteSize/(this.Te));
    NotesList = this.DeletePeaksTooLow(NotesList, NbSampMin);
    // Delete peaks too closed (keeping only the higher peak)
    NotesList = this.DeletePeaksTooClosed(NotesList, MinNoteDiff);
    return NotesList;
  }
}




export interface IndiceGroup {
  IndStart: number;
  IndStop: number;
}


export class StepDetector {
  private medianfiltersize_s: number;
  private thresholdenergyon_db: number;
  private thresholdenergyoff_db: number;
  private maxpitchvariation_st: number;
  private minimumtimesize_s:number;
  private minnotesize_s:number;
  private minnotediff_st:number;
  private lmhgaussian_st:number;

  // Temporary variable for conversion
  private Te:number;
  private f0:number;
  private NbSamples:number;
  private MaskArray:boolean[];
  private PitchArray:number[];
  private EnergyArray:number[];

  private Groups:IndiceGroup[] = [];
  private FittedSignals:Array<number[]> = [[]];

  constructor() {}

  init_parameters(stepParameter: StepParameter) {
    this.medianfiltersize_s = stepParameter.medianfiltersize_s;
    this.thresholdenergyon_db = stepParameter.thresholdenergyon_db;
    this.thresholdenergyoff_db = stepParameter.thresholdenergyoff_db;
    this.maxpitchvariation_st = stepParameter.maxpitchvariation_st;
    this.minimumtimesize_s = stepParameter.minimumtimesize_s;
    this.minnotesize_s = stepParameter.minnotesize_s;
    this.minnotediff_st = stepParameter.minnotediff_st;
    this.lmhgaussian_st = stepParameter.lmhgaussian_st;
  }

  Masked_Invalid() {
    for(let k=0; k<this.NbSamples; k++) {
      if(!Number.isFinite(this.PitchArray[k]) ||
         !Number.isFinite(this.EnergyArray[k]) ||
         (this.PitchArray[k] < 0)) {
        this.MaskArray[k] = true;
      }
    }
  }

  set_init_var(pitchResult:PitchResult) {
    this.Te = pitchResult.te_s;
    this.f0 = pitchResult.f0_hz;
    this.NbSamples = pitchResult.pitch_st.length;
    this.MaskArray = new Array(this.NbSamples).fill(false);
    this.PitchArray = pitchResult.pitch_st;
    this.EnergyArray = pitchResult.energy_db;
    this.Masked_Invalid();
  }

  // Time First Group
  TimeOffsetFirstGroup() {
    for(let k=0; k<this.NbSamples; k++) {
      if(this.MaskArray[k] == false){
        return(k * this.Te);
      }
    }
    return(0.0);
  }

  // Tone height range
  Masked_ToneHeight(ToneMin?:number, ToneMax?:number) {
    if(ToneMin != null) {
      for(let k=0; k<this.NbSamples; k++) {
        if(this.PitchArray[k] < ToneMin){
          this.MaskArray[k] = true;
        }
      }
    }
    if(ToneMax != null) {
      for(let k=0; k<this.NbSamples; k++) {
        if(this.PitchArray[k] > ToneMax){
          this.MaskArray[k] = true;
        }
      }
    }
  }

  _Masked_MinimumEnergy(ThresholdOn:number, ThresholdOff:number) {
    let HystThreshold = new HysteresisThreshold(this.EnergyArray, ThresholdOn, ThresholdOff);
    let MaskEnergy = HystThreshold.PerformThresholding();
    for(let k=0; k<this.NbSamples; k++) {
      this.MaskArray[k] = this.MaskArray[k] || !MaskEnergy[k];
    }
  }

  _ClearFittedSignals(MinNoteSize:number) {
    let WindowsSizeDiv2:number = Math.round(MinNoteSize / (this.Te));

    let N:number;
    let IndDeb:number;
    let IndFin:number;
    let Modification:boolean;
    let MostCommonValue:number;
    let NewFittedSignal:number[];
    let OriginalfittedSignal:number[];
    
    for(let indSignal=0; indSignal<this.FittedSignals.length; indSignal++) {
      N = this.FittedSignals[indSignal].length;
      NewFittedSignal = new Array(N).fill(0);

      if(N <= (2 * WindowsSizeDiv2 + 1)) {
        MostCommonValue = mode(this.FittedSignals[indSignal]);
        NewFittedSignal = new Array(N).fill(MostCommonValue);
      } else {
        Modification = true;
        NewFittedSignal = this.FittedSignals[indSignal].slice();

        while(Modification) {
          Modification = false;
          OriginalfittedSignal = NewFittedSignal.slice();
          // Debut du signal
          IndDeb = 0;
          IndFin = 2 * WindowsSizeDiv2 + 1;
          MostCommonValue = mode(OriginalfittedSignal.slice(IndDeb, IndFin));
          for(let k=0; k<WindowsSizeDiv2; k++) {
            if(NewFittedSignal[k] != MostCommonValue) {
              NewFittedSignal[k] = MostCommonValue
              Modification = true
            }
          }
          // Milieu du signal
          for(let k=WindowsSizeDiv2; k< (N-WindowsSizeDiv2-1); k++) {
            IndDeb = k - WindowsSizeDiv2;
            IndFin = k + WindowsSizeDiv2 + 1;
            MostCommonValue = mode(OriginalfittedSignal.slice(IndDeb, IndFin));
            if(NewFittedSignal[k] != MostCommonValue) {
              NewFittedSignal[k] = MostCommonValue
              Modification = true
            }
          }
          // Fin du signal
          IndFin = N;
          IndDeb = N - 2 * WindowsSizeDiv2 - 1;
          MostCommonValue = mode(OriginalfittedSignal.slice(IndDeb, IndFin));
          for(let k=(N-WindowsSizeDiv2-1); k<N; k++) {
            if(NewFittedSignal[k] != MostCommonValue) {
              NewFittedSignal[k] = MostCommonValue;
              Modification = true;
            }
          }
        }
      }
      this.FittedSignals[indSignal] = NewFittedSignal;
    }
  }

  // Median filter
  A_ApplyMedianFilter(WindowSize:number){
    if(WindowSize < 0){
      console.log("WindowSize input cannot be a negatif number");
    }
    let kernel_size = Math.round(WindowSize / this.Te)
    if((kernel_size % 2) == 0){
      kernel_size += 1
    }
    if(kernel_size < 3){
      console.log("WindowSize is too low, the median filter will have no effect");
    }

    let kMiddle:number = (kernel_size-1)/2;
    let TempArray:number[];
    let SortedTempArray:number[];
    let FilteredArray:number[] = new Array(this.NbSamples);

    for(let k=0; k<this.NbSamples; k++) {
      if(!Number.isFinite(this.PitchArray[k]) ||
         (this.PitchArray[k] < 0)) {
        this.PitchArray[k] = -1;
      }
    }

    for(let k=0; k<this.NbSamples; k++) {
      if(k<kMiddle){
        TempArray = this.PitchArray.slice(0, kernel_size);
      } else if(k > (this.NbSamples-kMiddle)) {
        TempArray = this.PitchArray.slice(this.NbSamples-kernel_size, this.NbSamples);
      } else {
        TempArray = this.PitchArray.slice(k-kMiddle, k+kMiddle+1);
      }
      SortedTempArray = TempArray.sort((n1, n2) => n1 - n2);
      FilteredArray[k] = SortedTempArray[kMiddle];
    }
    this.PitchArray = FilteredArray;
    this.Masked_Invalid();
  }

  // Energy filter
  B_Masked_AutoEnergy(ThresholdEnergy_ON:number, ThresholdEnergy_OFF:number) {
    let Energy_dB:number[] = [];
    for(let k=0; k<this.NbSamples; k++) {
      if(!this.MaskArray[k]){
        Energy_dB.push(this.EnergyArray[k]);
      }
    }
    let X_histo:number[];
    let histogram_Energy:number[];
    let bins:number = 1000;
    [X_histo, histogram_Energy] = GaussianKdeHistogram(Energy_dB, bins);

    let indMax:number = 0;
    let tempMax:number = -9999;
    for(let k=0; k<bins; k++) {
      if(histogram_Energy[k] > tempMax){
        tempMax = histogram_Energy[k];
        indMax = k;
      }
    }
    let MeansignalEnergy:number = X_histo[indMax];

    let ThresholdNat_ON:number = MeansignalEnergy - ThresholdEnergy_ON;
    let ThresholdNat_OFF:number = MeansignalEnergy - ThresholdEnergy_OFF;

    this._Masked_MinimumEnergy(ThresholdNat_ON, ThresholdNat_OFF);
  }

  // Maximum variation
  C_Masked_MaximumVariation(MaxVariation=1.0){
    for(let k=0; k<this.NbSamples-1; k++) {
      if(Math.abs(this.PitchArray[k] - this.PitchArray[k + 1]) > MaxVariation){
        this.MaskArray[k] = true;
        this.MaskArray[k+1] = true;
      }
    }
  }

  // Minimum size of consecutive correct pitch
  D_Masked_MinimumTimeSize(MinimumSize) {
    if(MinimumSize < 0){
      console.log("MinimumSize input cannot be a negatif number");
    }
    let NbSamplesMin:number = Math.round(MinimumSize / this.Te);
    let ValMaskInit:boolean = this.MaskArray[0];
    let kInit:number = 0;
    let NbSamplesSameValue:number = 1;
    for(let k=1; k<this.NbSamples; k++) {
      if(this.MaskArray[k] == ValMaskInit){
        NbSamplesSameValue = NbSamplesSameValue + 1;
      } else {
        if((ValMaskInit == false) && (NbSamplesSameValue < NbSamplesMin)) {
          for(let p=kInit; p<k; p++) {
            this.MaskArray[p] = true;
          }
        }
        NbSamplesSameValue = 1;
        ValMaskInit = this.MaskArray[k];
        kInit = k;
      }
    }
    if((ValMaskInit == false) && (NbSamplesSameValue < NbSamplesMin)) {
      for(let p=kInit; p<this.NbSamples; p++) {
        this.MaskArray[p] = true;
      }
    }
  }

  E_DetectGroupsOfNotes() {
    // Detection de chaque portes
    this.Groups = [];
    let PorteDetected:boolean = false;
    let kStart:number = 0;
    if(this.MaskArray[0] == false) {
      PorteDetected = true;
      kStart = 0;
    }
    for(let k=1; k<this.NbSamples; k++) {
      if((this.MaskArray[k] == false) && !PorteDetected) {
        PorteDetected = true;
        kStart = k;
      }
      if((this.MaskArray[k] == true) && PorteDetected) {
        this.Groups.push({IndStart: kStart, IndStop: k})
        PorteDetected = false;
      }
    }
  }

  F_Detectnotes(MinNoteSize:number, MinNoteDiff:number, LMHGaussian:number) {
    let SemiToneStep:number = 0.01;
    let MethodHisto = new HistogramMethod(this.Te, LMHGaussian, SemiToneStep);
    this.FittedSignals = [];
    this.Groups.length

    let TempSono:number[];
    let FitSignal:number[];
    let NotesList:NoteProperty[];
    let IndMin:number;
    let TempMin:number;
    for(let kgroup=0; kgroup<this.Groups.length; kgroup++) {
      TempSono = this.PitchArray.slice(this.Groups[kgroup].IndStart, this.Groups[kgroup].IndStop);
      NotesList = MethodHisto.ExtractNotes(TempSono, MinNoteSize, MinNoteDiff);
      // Numerized signal
      FitSignal = new Array(TempSono.length);
      for(let ksono=0; ksono<TempSono.length; ksono++) {
        TempMin = Number.MAX_VALUE;
        IndMin = 0;
        for(let knl=0; knl<NotesList.length; knl++) {
          if(Math.abs(TempSono[ksono] - NotesList[knl].noteheight) < TempMin) {
            TempMin = Math.abs(TempSono[ksono] - NotesList[knl].noteheight);
            IndMin = knl;
          }
        }
        FitSignal[ksono] = NotesList[IndMin].noteheight;
      }
      this.FittedSignals.push(FitSignal);
    }
    this._ClearFittedSignals(MinNoteSize);
  }

  G_GenerateAnalogPartition() {
    let DicoNotes:OneNoteStepResult[] = [];
    let IndGroupStart:number;
    let IndGroupBeforeStop:number;
    let LengthSilence:number;
    let N:number;
    let IndNoteStart:number;
    let NbNotes:number;
    let HeightNoteBefore:number;
    let HeightNoteCurrent:number;
    let LinkedNote:boolean;
    let NbSamplesNote:number;
    let EnergyNote:number;
    for(let IndGroup=0; IndGroup<this.Groups.length; IndGroup++) {
      IndGroupStart = this.Groups[IndGroup].IndStart;
      // Adding the blank between each group
      if(IndGroup > 0){
        IndGroupBeforeStop = this.Groups[IndGroup - 1].IndStop;
        LengthSilence = (IndGroupStart - IndGroupBeforeStop) * this.Te;
        // Add A rest
        DicoNotes.push({type_b: false, length_s: LengthSilence, f0_hz: null, pitch_st: null, energy_db: null, linked_b: null})
      }
      N = this.FittedSignals[IndGroup].length;
      IndNoteStart = 0;
      NbNotes = 0;
      for(let ind=1; ind<N; ind++) {
        HeightNoteBefore = this.FittedSignals[IndGroup][ind - 1];
        HeightNoteCurrent = this.FittedSignals[IndGroup][ind];
        if((HeightNoteCurrent != HeightNoteBefore) || (ind == N - 1)) {
          LinkedNote = NbNotes > 0;
          NbSamplesNote = ind - IndNoteStart;
          if(ind == N - 1){
            NbSamplesNote += 1;
          }
          EnergyNote = MaxOfArray(this.EnergyArray.slice(IndGroupStart + IndNoteStart, IndGroupStart + ind)).value;
          // Add A note
          DicoNotes.push({type_b: true, length_s: NbSamplesNote * this.Te, f0_hz: this.f0, pitch_st: HeightNoteBefore, energy_db: EnergyNote, linked_b: LinkedNote});
          
          IndNoteStart = ind;
          NbNotes += 1;
        }
      }
    }
    let offset:number = this.TimeOffsetFirstGroup();
    return({notes: DicoNotes, offset_s:offset});
  }

  run(pitchResult:PitchResult, debug:boolean=false): Observable<any> {
    return new Observable((observer) => {
      this.set_init_var(pitchResult);

      if(debug) {
        console.log("/////////////////////////////////////");
        console.log("Step detector: Applying median filter");
        console.log("/////////////////////////////////////");
        console.log("    Median filter size: " + this.medianfiltersize_s.toString() + " seconds");
        console.log("    Pitch array and Mask array before applying filter:");
        console.log(this.PitchArray);
        console.log(this.MaskArray);
      }
      observer.next({progression: {value: 1, total: 8, step: "Applying median filter"}});
      this.A_ApplyMedianFilter(this.medianfiltersize_s);
      if(debug) {
        console.log("    Pitch array and Mask array after applying filter:");
        console.log(this.PitchArray);
        console.log(this.MaskArray);
        console.log("/////////////////////////////////////");
      }


      if(debug) {
        console.log("/////////////////////////////////");
        console.log("Step detector: Masking low energy");
        console.log("/////////////////////////////////");
        console.log("    Threshold energy on: " + this.thresholdenergyon_db.toString() + " dB");
        console.log("    Threshold energy off: " + this.thresholdenergyoff_db.toString() + " dB");
        console.log("    Energy array and Mask array before applying mask:");
        console.log(this.EnergyArray);
        console.log(this.MaskArray);
      }
      observer.next({progression: {value: 2, total: 8, step: "Masking low energy signals"}});
      this.B_Masked_AutoEnergy(this.thresholdenergyon_db, this.thresholdenergyoff_db);
      if(debug) {
        console.log("    Energy array and Mask array after applying mask:");
        console.log(this.EnergyArray);
        console.log(this.MaskArray);
        console.log("/////////////////////////////////////");
      }


      if(debug) {
        console.log("/////////////////////////////////////");
        console.log("Step detector: Masking big variations");
        console.log("/////////////////////////////////////");
        console.log("    Variation max: " + this.maxpitchvariation_st.toString() + " halftone");
        console.log("    Pitch array and Mask array before applying mask:");
        console.log(this.PitchArray);
        console.log(this.MaskArray);
      }
      observer.next({progression: {value: 3, total: 8, step: "Removing big pitch variations"}});
      this.C_Masked_MaximumVariation(this.maxpitchvariation_st);
      if(debug) {
        console.log("    Pitch array and Mask array after applying mask:");
        console.log(this.PitchArray);
        console.log(this.MaskArray);
        console.log("/////////////////////////////////////");
      }


      if(debug) {
        console.log("//////////////////////////////////////////");
        console.log("Step detector: Masking too short detection");
        console.log("//////////////////////////////////////////");
        console.log("    Length min: " + this.minimumtimesize_s.toString() + " seconds");
        console.log("    Pitch array and Mask array before applying mask:");
        console.log(this.PitchArray);
        console.log(this.MaskArray);
      }
      observer.next({progression: {value: 4, total: 8, step: "Masking too short detections"}});
      this.D_Masked_MinimumTimeSize(this.minimumtimesize_s);
      if(debug) {
        console.log("    Energy array and Mask array after applying mask:");
        console.log(this.PitchArray);
        console.log(this.MaskArray);
        console.log("/////////////////////////////////////");
      }


      if(debug) {
        console.log("////////////////////////////////////////");
        console.log("Step detector: Detecting groups of notes");
        console.log("////////////////////////////////////////");
        console.log("    Pitch array and Mask array before detecting groups:");
        console.log(this.PitchArray);
        console.log(this.MaskArray);
      }
      observer.next({progression: {value: 5, total: 8, step: "Detecting group of notes"}});
      this.E_DetectGroupsOfNotes();
      if(debug) {
        console.log("    Groups detected:");
        console.log(this.Groups);
        console.log("/////////////////////////////////////");
      }


      if(debug) {
        console.log("/////////////////////////////////////////////////////////");
        console.log("Step detector: Detecting notes inside each group of notes");
        console.log("/////////////////////////////////////////////////////////");
        console.log("    Groups:");
        console.log(this.Groups);
      }
      observer.next({progression: {value: 6, total: 8, step: "Detecting steps (edges)"}});
      this.F_Detectnotes(this.minnotesize_s, this.minnotediff_st, this.lmhgaussian_st);
      if(debug) {
        console.log("    Signal fitted in each group:");
        console.log(this.FittedSignals);
        console.log("/////////////////////////////////////");
      }


      if(debug) {
        console.log("////////////////////////////////////////");
        console.log("Step detector: Generate Analog partition");
        console.log("////////////////////////////////////////");
        console.log("    Signal fitted in each group:");
        console.log(this.FittedSignals);
      }
      observer.next({progression: {value: 7, total: 8, step: "Building output"}});
      let output:StepResult = this.G_GenerateAnalogPartition();
      if(debug) {
        console.log("    OUTPUT:");
        console.log(output);
        console.log("/////////////////////////////////////");
      }
      observer.next({progression: {value: 8, total: 8, step: "Finished"}});
      observer.next({result: output});
      observer.complete();
    });
  }
}

