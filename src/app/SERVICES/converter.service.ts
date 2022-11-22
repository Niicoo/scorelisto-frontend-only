import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { PitchResult, PitchParameter, DefaultPitchParameter } from 'src/worker/app-workers/pitch-detector.worker';
import { StepResult, StepParameter, DefaultStepParameter } from 'src/worker/app-workers/step-detector.worker';
import { RhythmResult, RhythmParameter, DefaultRhythmParameter } from 'src/worker/app-workers/rhythm-detector.worker';

import { WorkerService } from './worker.service';
import { WorkerMessage } from 'src/worker/app-workers/shared/worker-message.model';
import { WORKER_TOPIC } from 'src/worker/app-workers/shared/worker-topic.constants';

import * as FileSaver from "file-saver";

export const audioConverterContext = new OfflineAudioContext({ 
  numberOfChannels: 1,
  length: 1,
  sampleRate: 44100
});


// State of a running task
export type State = 'init'|'audio'|'pitch'|'step'|'rhythm';

export interface Progression {
  value: number;
  total: number;
  step: string;
}
export const DefaultProgression:Progression = {value: 0, total: 0, step: ""}

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  // Boolean to know if direct conversion is running 
  isRunningDirectConversion:boolean = false;
  // Task state
  public state = new BehaviorSubject<State>('init');
  public isRunning = new BehaviorSubject<boolean>(false);
  public progression = new BehaviorSubject<Progression>(DefaultProgression);

  private debugMode:boolean = false;
  // File Loaded
  file:File | Blob;
  reader:FileReader;

  // Result of each step
  //////////////////////
    // Audio Loaded
  bufferMono:AudioBuffer;
    // Pitch detected
  pitchResult:PitchResult = null;
    // Step detected
  stepResult:StepResult = null;
    // Rhtyhm detected
  rhythmResult:RhythmResult = null;
  //////////////////////

  workerServiceSubscription: Subscription;

  constructor(private workerService: WorkerService) {
    this.reader = new FileReader();
    let _this = this;
    this.reader.onload = function(e) {
      let audiodata = <ArrayBuffer>_this.reader.result;
      audioConverterContext.decodeAudioData(audiodata)
        .then( function(buffer) {
          if(buffer.numberOfChannels === 1) {
            _this.bufferMono = buffer;
          }
          else {
            _this.bufferMono = audioConverterContext.createBuffer(1, buffer.length, buffer.sampleRate)
            let tempBuffer = new Float32Array(buffer.length);
            let tempSample:number;
            for(let k=0; k<buffer.length; k++ ){
              tempSample = 0;
              for(let n=0; n<buffer.numberOfChannels; n++ ){
                tempSample = tempSample + buffer.getChannelData(n)[k];
              }
              tempBuffer[k] = tempSample/buffer.numberOfChannels;
            }
            _this.bufferMono.copyToChannel(tempBuffer, 0, 0)
          }
          console.log("Sound Correctly loaded");
          _this.state.next('audio');
          _this.isRunning.next(false);
        })
        .catch( 
          function(e){
            console.log("Error with decoding audio data" + e); 
          }
        );
    }
    this.listenForWorkerResponse();
  }

  private listenForWorkerResponse() {
    this.workerServiceSubscription = this.workerService.workerUpdate$
      .subscribe(data => this.workerResponseParser(data));
  }

  private workerResponseParser(message: WorkerMessage) {
    if (message.topic === WORKER_TOPIC.pitchDetector) {
      if(message.data.progression != null){
        this.progression.next(message.data.progression)
      } else {
        this.pitch_detection_success(message.data.result);
      }
    }
    if (message.topic === WORKER_TOPIC.stepDetector) {
      if(message.data.progression != null){
        this.progression.next(message.data.progression)
      } else {
        this.step_detection_success(message.data.result);
      }
    }
    if (message.topic === WORKER_TOPIC.rhythmDetector) {
      if(message.data.progression != null){
        this.progression.next(message.data.progression)
      } else {
        this.rhythm_detection_success(message.data.result);
      }
    }
  }

  loadAudioFile(audiofile:Blob | File) {
    this.file = audiofile;
    this.state.next('init');
    this.isRunning.next(true);
    this.bufferMono = null;
    this.pitchResult = null;
    this.stepResult = null;
    this.rhythmResult = null;
    this.reader.readAsArrayBuffer(this.file);
  }


  private pitch_detection(pitchParameter:PitchParameter, tStart?:number, tEnd?:number) {
    if(this.reader.readyState != this.reader.DONE){
      console.log("Cannot run pitch conversion: buffer not ready");
      return;
    }
    console.log("Running pitch conversion with parameters below:");
    console.log(pitchParameter);
    if(this.state.getValue() != 'audio'){
      this.state.next('audio');
    }
    if(!this.isRunning.getValue()){
      this.isRunning.next(true);
    }
    this.pitchResult = null;
    this.stepResult = null;
    this.rhythmResult = null;

    let Fe:number = this.bufferMono.sampleRate;
    let audiobuf = this.bufferMono.getChannelData(0);
    const workerMessage = new WorkerMessage(WORKER_TOPIC.pitchDetector, { buffer:audiobuf, sampleRate:Fe, parameters: pitchParameter, timeStart:tStart, timeStop:tEnd, debug:this.debugMode });
    this.workerService.doWork(workerMessage);
  }
  private pitch_detection_success(pitchResult:PitchResult) {
    console.log("Result of pitch detection:");
    console.log(pitchResult);
    this.pitchResult = pitchResult;
    this.state.next('pitch');
    if(this.isRunningDirectConversion){
      this.step_detection(DefaultStepParameter);
    } else {
      this.isRunning.next(false);
    }
  }
  private pitch_detection_error() {
    console.log("Error during the pitch detection")
    this.isRunning.next(false);
  }







  private step_detection(stepParameter:StepParameter) {
    if(this.pitchResult == null){
      console.log("Cannot run step conversion: pitch not ready");
      return;
    }
    console.log("Running step conversion with parameters below:");
    console.log(stepParameter);
    if(this.state.getValue() != 'pitch'){
      this.state.next('pitch');
    }
    if(!this.isRunning.getValue()){
      this.isRunning.next(true);
    }
    this.stepResult = null;
    this.rhythmResult = null;
    const workerMessage = new WorkerMessage(WORKER_TOPIC.stepDetector, { parameters: stepParameter, pitchResult:this.pitchResult, debug:this.debugMode });
    this.workerService.doWork(workerMessage);
  }
  private step_detection_success(stepResult:StepResult) {
    console.log("Result of step detection:");
    console.log(stepResult);
    this.stepResult = stepResult;
    this.state.next('step');
    if(this.isRunningDirectConversion){
      this.rhythm_detection(DefaultRhythmParameter);
    } else {
      this.isRunning.next(false);
    }
  }
  private step_detection_error() {
    console.log("Error during the step detection")
    this.isRunning.next(false);
  }






  private rhythm_detection(rhythmParameter:RhythmParameter) {
    if(this.stepResult == null){
      console.log("Cannot run rhythm conversion: step not ready");
      return;
    }
    console.log("Running rhythm conversion with parameters below:");
    console.log(rhythmParameter);
    if(this.state.getValue() != 'step'){
      this.state.next('step');
    }
    if(!this.isRunning.getValue()){
      this.isRunning.next(true);
    }
    this.rhythmResult = null;
    const workerMessage = new WorkerMessage(WORKER_TOPIC.rhythmDetector, { parameters: rhythmParameter, stepResult:this.stepResult, debug:this.debugMode });
    this.workerService.doWork(workerMessage);
  }
  private rhythm_detection_success(rhythmResult:RhythmResult) {
    console.log("Result of rhythm detection:");
    console.log(rhythmResult);
    this.rhythmResult = rhythmResult;
    this.state.next('rhythm');
    this.isRunning.next(false);
  }
  private rhythm_detection_error() {
    console.log("Error during the rhythm detection")
    this.isRunning.next(false);
  }



  run_pitch_detection(pitchParameter:PitchParameter, tStart?:number, tEnd?:number) {
    if(this.isRunning.getValue()){
      console.log("Cannot run pitch conversion: A process is already running");
      return;
    }
    this.isRunningDirectConversion = false;
    this.pitch_detection(pitchParameter, tStart, tEnd);
  }
  run_step_detection(stepParameter:StepParameter) {
    if(this.isRunning.getValue()){
      console.log("Cannot run step conversion: A process is already running");
      return;
    }
    this.isRunningDirectConversion = false;
    this.step_detection(stepParameter);
  }
  run_rhythm_detection(rhythmParameter:RhythmParameter) {
    if(this.isRunning.getValue()){
      console.log("Cannot run rhythm conversion: A process is already running");
      return;
    }
    this.isRunningDirectConversion = false;
    this.rhythm_detection(rhythmParameter);
  }
  run_direct_conversion() {
    if(this.isRunning.getValue()){
      console.log("Cannot run direct conversion: A process is already running");
      return;
    }
    console.log("Running full conversion with default parameters");
    let pitchParameter = DefaultPitchParameter;
    let stepParameter = DefaultStepParameter;
    let rhythmParameter = DefaultRhythmParameter;
    console.log(pitchParameter);
    console.log(stepParameter);
    console.log(rhythmParameter);
    this.isRunningDirectConversion = true;
    this.pitch_detection(DefaultPitchParameter);
  }


  download_audio(){
    if(this.file != null) {
      FileSaver.saveAs(this.file, "audio.wav")
    }
  }

  download_pitch(){
    if(this.pitchResult != null) {
      FileSaver.saveAs(JSON.stringify(this.pitchResult), "pitch.json")
    }
  }

  download_musicxml(){
    if(this.rhythmResult != null) {
      FileSaver.saveAs(new Blob([this.rhythmResult.score_musicxml], {type: "text/xml;charset=utf-8"}), "score.xml")
    }
  }

  download_midi(){
    if(this.rhythmResult != null) {
      FileSaver.saveAs(new Blob([this.rhythmResult.score_midi], {type: "audio/mid"}), "score.mid") 
    }
  }

  download_midinorythm(){
    if(this.rhythmResult != null) {
      FileSaver.saveAs(new Blob([this.rhythmResult.score_midinorhythm], {type: "audio/mid"}), "score.mid")
    }
  }

}
