import { Component, OnInit } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';
import { ConverterService, State } from 'src/app/SERVICES/converter.service';
import * as FileSaver from "file-saver";


@Component({
  selector: 'app-sound-player',
  templateUrl: './sound-player.component.html',
  styleUrls: ['./sound-player.component.css']
})
export class SoundPlayerComponent implements OnInit {
  wavesurfer:any;
  isSoundReady:boolean = false;
  state:State = 'init';

  constructor(private converterService:ConverterService) {
  }

  ngOnInit() {
    this.wavesurfer = WaveSurfer.create({
      container: '#waveform',
      progressColor: '#fe215d',
      cursorColor: '#ffffff',
      cursorWidth: 2
    });
    this.converterService.state.subscribe(state => this.stateUpdated(state));
  }

  stateUpdated(state:State) {
    this.state = state;
    if(state === 'audio'){
      this.wavesurfer.loadBlob(this.converterService.file);
      this.isSoundReady = true;
    }
  }

  
  onResizeWaveform(event:any){
    this.wavesurfer.drawer.containerWidth = this.wavesurfer.drawer.container.clientWidth;
    this.wavesurfer.drawBuffer();
  }

  clickDownloadButton() {
    let wavconverter = new BufferToWavConverter(this.converterService.bufferMono);
    wavconverter.exportWAV(this.onDownload,this);
  }
  onDownload(blob:Blob,_this:any) {
    FileSaver.saveAs(blob, "audio.wav")
  }
}







export class BufferToWavConverter {
  config = {
      bufferLen: 4096,
      numChannels: 1,
      mimeType: 'audio/wav'
  };
  callbacks = {
      getBuffer: [],
      exportWAV: []
  };
  callbacks_this = {
      getBuffer: [],
      exportWAV: []
  };
  worker:Worker;

  constructor(bufferMono:AudioBuffer) {
    let _this = this;
    this.worker = new Worker("assets/js/recorder-worker.js");
    this.worker.postMessage({
        command: 'init',
        config: {
            sampleRate: bufferMono.sampleRate,
            numChannels: 1
        }
    });

    this.worker.postMessage({
        command: 'record',
        buffer: [bufferMono.getChannelData(0).slice(), ]
    });
    this.worker.onmessage = function (e) {
        let cb = _this.callbacks[e.data.command].pop();
        let cb_this = _this.callbacks_this[e.data.command].pop();
        if (typeof cb == 'function') {
            cb(e.data.data, cb_this);
        }
    };
  }


  clear(){
    this.worker.postMessage({ command: 'clear' });
  }
  getBuffer(cb, cb_this){
    this.callbacks.getBuffer.push(cb);
    this.callbacks_this.getBuffer.push(cb_this);
    this.worker.postMessage({ command: 'getBuffer' });
  }
  exportWAV(cb, cb_this){
    let mimeType = this.config.mimeType;
    this.callbacks.exportWAV.push(cb);
    this.callbacks_this.exportWAV.push(cb_this);
    this.worker.postMessage({
        command: 'exportWAV',
        type: mimeType
    });
  }
}






