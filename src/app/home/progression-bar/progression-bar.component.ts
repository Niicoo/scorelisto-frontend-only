import { Component, OnInit } from '@angular/core';
import { Progression, DefaultProgression, State } from 'src/app/SERVICES/converter.service'
import { ConverterService } from 'src/app/SERVICES/converter.service';

@Component({
  selector: 'app-progression-bar',
  templateUrl: './progression-bar.component.html',
  styleUrls: ['./progression-bar.component.css']
})
export class ProgressionBarComponent implements OnInit {
  progression_total:string = "0 %";
  pitch_bar:HTMLElement;
  step_bar:HTMLElement;
  rhythm_bar:HTMLElement;
  state:State = 'init';

  constructor(private converterService: ConverterService) { }

  ngOnInit() {
    this.pitch_bar = document.getElementById('progressbar_pitch');
    this.step_bar = document.getElementById('progressbar_step');
    this.rhythm_bar = document.getElementById('progressbar_rhythm');
    this.converterService.state.subscribe(state => {this.stateUpdated(state);});
    this.converterService.progression.subscribe(progression => {this.updateProgression(progression);});
  }

  stateUpdated(state:State) {
    this.state = state;
    if((this.state === 'audio') || (this.state === 'init')) {
      this.progression_total = (0.0).toFixed(1) + " %";
      this.pitch_bar.style.setProperty("width", "0%");
      this.step_bar.style.setProperty("width", "0%");
      this.rhythm_bar.style.setProperty("width", "0%");
    } else if(this.state === 'pitch') {
      this.progression_total = (100.0/3).toFixed(1) + " %";
      this.step_bar.style.setProperty("width", "0%");
      this.rhythm_bar.style.setProperty("width", "0%");
    } else if(this.state === 'step') {
      this.progression_total = (100.0*2/3).toFixed(1) + " %";
      this.rhythm_bar.style.setProperty("width", "0%");
    }
  }

  updateProgression(progression:Progression) {
    let per = progression.value*100/progression.total;
    if(this.state === 'audio') {
      this.progression_total = (per/3).toFixed(1) + " %";
      this.pitch_bar.style.setProperty("width", per.toString() + "%");
    } else if(this.state === 'pitch') {
      this.progression_total = (100.0/3 + per/3).toFixed(1) + " %";
      this.step_bar.style.setProperty("width", per.toString() + "%");
    } else if(this.state === 'step') {
      this.progression_total = (200.0/3 + per/3).toFixed(1) + " %";
      this.rhythm_bar.style.setProperty("width", per.toString() + "%");
    }
  }
}
