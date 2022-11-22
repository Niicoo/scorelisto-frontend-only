import { Component, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from "highcharts";
import { ConverterService, State } from 'src/app/SERVICES/converter.service';
import { PitchParametersComponent } from './parameters/pitch-parameters/pitch-parameters.component';
import { StepParametersComponent } from './parameters/step-parameters/step-parameters.component';
import { RhythmParametersComponent } from './parameters/rhythm-parameters/rhythm-parameters.component';

@Component({
  selector: 'app-advanced-converter',
  templateUrl: './advanced-converter.component.html',
  styleUrls: ['./advanced-converter.component.css']
})
export class AdvancedConverterComponent implements OnInit {
  viewState:State = 'pitch';
  currentState:State = 'init';
  disabledNextButton:boolean = true;
  disabledBackButton:boolean = true;
  disabledRunButton:boolean = true;

  @ViewChild(PitchParametersComponent) childPitchParameters:PitchParametersComponent;
  @ViewChild(StepParametersComponent) childStepParameters:StepParametersComponent;
  @ViewChild(RhythmParametersComponent) childRhythmParameters:RhythmParametersComponent;

  constructor(private converterService:ConverterService) {
    converterService.state.subscribe(state => {this.stateUpdated(state);});
  }

  ngOnInit() {
    this.viewState = 'pitch';
  }

  updateButtonsDisableProperty() {
    this.disabledRunButton =  !((this.viewState === 'pitch' && this.currentState !== 'init') ||
                              (this.viewState === 'step' && this.currentState !== 'init' && this.currentState !== 'audio') ||
                              (this.viewState === 'rhythm' && (this.currentState === 'step' || this.currentState === 'rhythm')));

    this.disabledBackButton = this.viewState === 'pitch';

    this.disabledNextButton = (this.viewState === 'pitch' && (this.currentState === 'init' || this.currentState === 'audio')) ||
                              (this.viewState === 'step'  && this.currentState !== 'step' && this.currentState !== 'rhythm') ||
                              (this.viewState === 'rhythm');
  }

  stateUpdated(state:State) {
    this.currentState = state;
    this.updateButtonsDisableProperty();
  }

  onClickOnNextStep() {
    if(this.viewState === 'step'){
      this.viewState = 'rhythm';
    }
    if(this.viewState === 'pitch'){
      this.viewState = 'step';
    }
    this.updateButtonsDisableProperty();
  }
  onClickOnPreviousStep() {
    if(this.viewState === 'step'){
      this.viewState = 'pitch';
    }
    if(this.viewState === 'rhythm'){
      this.viewState = 'step';
    }
    this.updateButtonsDisableProperty();
  }

  onclickOnRun() {
    if(this.viewState === 'pitch'){
      this.converterService.run_pitch_detection(this.childPitchParameters.getValues());
    } else if(this.viewState === 'step') {
      this.converterService.run_step_detection(this.childStepParameters.getValues());
    } else if(this.viewState === 'rhythm') {
      this.converterService.run_rhythm_detection(this.childRhythmParameters.getValues());
    }
  }
}