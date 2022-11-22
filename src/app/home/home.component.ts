import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
// Components
import { RecorderComponent } from './recorder/recorder.component';
import { FileInputComponent } from './file-input/file-input.component';
// Services
import { ConverterService, State } from 'src/app/SERVICES/converter.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isUploadCollapsed:boolean = false;
  isRecordCollapsed:boolean = true;
  isDirectCollapsed:boolean = false;
  isAdvancedCollapsed:boolean = true;
  isConversionRunning:boolean = false;
  isConversionSuccess:boolean = false;
  isConversionError:boolean = false;
  currentState:State = 'init';

  // Subscription to task
  stateSubscription:Subscription;
  // Creating project attributes

  @ViewChild(RecorderComponent) childRecorder:RecorderComponent;
  @ViewChild(FileInputComponent) childFileInput:FileInputComponent;

  constructor(public converterService:ConverterService) { }

  ngOnInit() {
    this.converterService.state.subscribe(state => this.stateUpdated(state));
    this.childRecorder.file.subscribe(file => this.updateFile(file));
    this.childFileInput.file.subscribe(file => this.updateFile(file));
  }

  stateUpdated(state:State) {
    this.currentState = state;
  }
  
  updateFile(file) {
    this.converterService.loadAudioFile(file);
  }

  clickOnRecord() {
    this.childRecorder.AskUserMedia();
    this.isRecordCollapsed = false;
    this.isUploadCollapsed = true;
  }
  clickOnUpload() {
    this.isUploadCollapsed = false;
    this.isRecordCollapsed = true;
  }

  clickOnDirect() {
    this.isDirectCollapsed = false;
    this.isAdvancedCollapsed = true;
  }
  clickOnAdvanced() {
    this.isAdvancedCollapsed = false;
    this.isDirectCollapsed = true;
  }

}
