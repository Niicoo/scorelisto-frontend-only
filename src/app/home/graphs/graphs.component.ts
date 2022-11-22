import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ConverterService, State } from 'src/app/SERVICES/converter.service';
import { PitchResult } from 'src/worker/app-workers/pitch-detector.worker';
import { StepResult } from 'src/worker/app-workers/step-detector.worker';
import { FormBuilder, Validators} from '@angular/forms';

import { chart } from "highcharts";
import * as Highcharts from "highcharts";


export const PitchChartOpts: any = {
  chart: {
    zoomType: 'xy',
    panning: true,
    backgroundColor:"#343a40",
  },
  boost: {useGPUTranslations: true},
  title: {text: 'Pitch along time', style: {color:"#ffffff"}},
  xAxis: {crosshair: true, title: {text: 'Time [s]', style: {color:"#ffffff"}}},
  yAxis: {title: {text: 'Pitch [SemiTone]', style: {color:"#ffffff"}}},
  legend: {enabled: false}
};
export const EnergyChartOpts: any = {
  chart: {
    zoomType: 'xy',
    panning: true,
    backgroundColor:"#343a40",
    style: {color:"#000000"}
  },
  boost: {useGPUTranslations: true},
  title: {text: 'Energy along time', style: {color:"#ffffff"}},
  xAxis: {crosshair: true, title: {text: 'Time [s]', style: {color:"#ffffff"}}},
  yAxis: {title: {text: 'Energy [dB]', style: {color:"#ffffff"}}},
  legend: {enabled: false}
};
/**
 * In order to synchronize tooltips and crosshairs, override the
 * built-in events with handlers defined on the parent element.
 */
export function ChartsSynchro(e){
  var chart, point, i, event;
  for (i = 0; i < Highcharts.charts.length; i = i + 1) {
      chart = Highcharts.charts[i];
      if(chart !== undefined){
        // Find coordinates within the chart
        event = chart.pointer.normalize(e);
        // Get the hovered point
        point = chart.series[0].searchPoint(event, true);

        if (point) {
            point.highlight(e);
        }
      }
  }
}
/**
 * Override the reset function, we don't need to hide the tooltips and
 * crosshairs.
 */
Highcharts.Pointer.prototype.reset = function () {
    return undefined;
};

declare module 'highcharts' {
    interface Point {
        highlight: (event: Highcharts.PointerEventObject) => void;
    }
}
/**
 * Highlight a point by showing tooltip, setting hover state and draw crosshair
 */
Highcharts.Point.prototype.highlight = function (event) {
    event = this.series.chart.pointer.normalize(event);
    this.onMouseOver(); // Show the hover marker
    this.series.chart.tooltip.refresh(this); // Show the tooltip
    this.series.chart.xAxis[0].drawCrosshair(event, this); // Show the crosshair
};
/**
 * Synchronize zooming through the setExtremes event handler.
 * IMPORTANT:
 *  In node_modules/highcharts/highcharts.d.ts , modify this line:
 *      export function each(arr: Array<any>, fn: () => void, ctx?: any): void;
 *  into 
 *      export function each(arr: Array<any>, fn: (chart?:any) => void, ctx?: any): void;
 */
function syncExtremes(e) {
    var thisChart = this.chart;

    if (e.trigger !== 'syncExtremes') { // Prevent feedback loop
        Highcharts.each(Highcharts.charts, function (chart) {
            if ((chart !== thisChart) && (chart !== undefined)) {
                if (chart.xAxis[0].setExtremes) { // It is null while updating
                    chart.xAxis[0].setExtremes(
                        e.min,
                        e.max,
                        undefined,
                        false,
                        { trigger: 'syncExtremes' }
                    );
                }
            }
        });
    }
}
export function SyncronizedChartOption(chartopt:any){
  chartopt.xAxis.events = { setExtremes: syncExtremes }
  chartopt.tooltip = {
    positioner: function () {
        return {
            // right aligned
            x: this.chart.chartWidth - this.label.width,
            y: 10 // align to title
        };
    },
    borderWidth: 0,
    backgroundColor: 'none',
    pointFormat: '{point.y}',
    headerFormat: '',
    shadow: false,
    style: {
        fontSize: '18px',
        color: "#ffffff"
    },
    valueDecimals: 2
  }
}



export function buildStepArray(step_data:StepResult, sampling_period:number):number[] {
  let dataOut:number[] = [];
  let tempValue:number = 0;
  let nbPoints:number = 0;

  nbPoints = Math.round(step_data['offset_s']/sampling_period);
  for (let j = 0; j < nbPoints; j++) {
    dataOut.push(NaN);
  }
  for(let i=0; i<step_data.notes.length; i++){
    nbPoints = Math.round(step_data.notes[i]['length_s']/sampling_period);
    if(step_data.notes[i]['type_b']) {
      tempValue = step_data.notes[i]['pitch_st'];
    }
    else {
      tempValue = NaN;
    }
    for (let j = 0; j < nbPoints; j++) {
      dataOut.push(tempValue);
    }
  }
  return dataOut;
}



@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {
  graphOptionsForm = this.formBuilder.group({
    plotEnergy: [''],
    plotStep: [''],
    plotPitch: ['']
  });

  // Chart Element in the template
  @ViewChild('chartPitch') public chartElPitch: ElementRef;
  @ViewChild('chartEnergy') public chartElEnergy: ElementRef;
  private _chartPitch:any;
  private _chartEnergy:any;

  pitchAvailable:boolean = false;
  stepAvailable:boolean = false;

  plotEnergy:boolean = false;

  currentState:State = 'init';
  constructor(private converterService: ConverterService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.graphOptionsForm.setValue({'plotEnergy':this.plotEnergy, 'plotStep':true, 'plotPitch':true});
    this.converterService.state.subscribe(state => this.StateConverterUpdated(state));
    this.graphOptionsForm.get('plotEnergy').valueChanges
    .subscribe(data => {
      this.plotEnergy = data;
    })
    this.graphOptionsForm.get('plotStep').valueChanges
    .subscribe(data => {
      this.setStepVisibility(data);
    })
    this.graphOptionsForm.get('plotPitch').valueChanges
    .subscribe(data => {
      this.setPitchVisibility(data);
    })
  }

  ngAfterViewInit() {
    ['mousemove', 'touchmove', 'touchstart'].forEach(
      function (eventType) {
        document.getElementById('chart_row').addEventListener(eventType, ChartsSynchro);
      }
    );
    this.init_pitch_graph();
    this.init_energy_graph();
  }

  StateConverterUpdated(state:State) {
    if(state === 'pitch'){
      this.pitchAvailable = true;
      this.stepAvailable = false;
      this.removestepPlot();
      if(this.currentState === 'audio') {
        this.setPitchVisibility(true);
        this.update_pitch(this.converterService.pitchResult);
      }
    } else if((state === 'step') || (state === 'rhythm')){
      this.pitchAvailable = true;
      this.stepAvailable = true;
      if(this.currentState === 'pitch') {
        this.setStepVisibility(true);
        this.graphOptionsForm.patchValue({'plotStep':true});
        this.update_step(this.converterService.stepResult);
      }
    } else {
      this.pitchAvailable = false;
      this.stepAvailable = false;
      this.resetPlots();
    }
    this.currentState = state;
  }

  update_pitch(pitchResult:PitchResult) {
    this._chartPitch.series[0].update({
      pointInterval: pitchResult['te_s'],
      data: pitchResult['pitch_st']
    });
    this._chartEnergy.series[0].update({
      pointInterval: pitchResult['te_s'],
      data: pitchResult['energy_db']
    });
  }

  update_step(stepResult:StepResult) {
    let samplingPeriod = this.converterService.pitchResult['te_s'];
    let stepArray = buildStepArray(stepResult, samplingPeriod);
    this._chartPitch.series[1].update({
      pointInterval: samplingPeriod,
      data: stepArray
    });
  }

  removestepPlot() {
    this._chartPitch.series[1].pointInterval = 1;
    this._chartPitch.series[1].data = [];
    this._chartPitch.redraw();
  }

  resetPlots() {
    this.init_pitch_graph();
    this.init_energy_graph();
  }

  setStepVisibility(value:boolean) {
    this._chartPitch.series[1].update({
      visible: value
    });
  }

  setPitchVisibility(value:boolean) {
    this._chartPitch.series[0].update({
      visible: value
    });
  }

  init_pitch_graph() {
    let chartopt = PitchChartOpts;
    chartopt.series = [];
    chartopt.series.push({
      type: 'line',
      name: 'Brut Pitch',
      pointInterval: 1,
      data: [],
      color:'blue',
      visible: true,
      tooltip: {valueSuffix: ' ' + "semitone"}
    });
    chartopt.series.push({
      type: 'line',
      name: 'Pitch formalized',
      pointInterval: 1,
      turboThreshold: 0,
      data: [],
      color:'red',
      visible: true,
      tooltip: {valueSuffix: ' ' + "semitone"}
    });
    SyncronizedChartOption(chartopt);
    if (this.chartElPitch && this.chartElPitch.nativeElement) {
      chartopt.chart.renderTo = this.chartElPitch.nativeElement
    }
    this._chartPitch = new Highcharts.Chart(chartopt);
  }

  init_energy_graph() {
    let chartopt = EnergyChartOpts;
    chartopt.series = [{
      type: 'line',
      name: 'Brut Energy',
      data: [],
      pointInterval: 1,
      color:'green',
      tooltip: {valueSuffix: ' ' + "dB"}
    }];
    SyncronizedChartOption(chartopt);
    if (this.chartElEnergy && this.chartElEnergy.nativeElement) {
      chartopt.chart.renderTo = this.chartElEnergy.nativeElement
    }
    this._chartEnergy = new Highcharts.Chart(chartopt);
  }


  ngOnDestroy() {
    if(this._chartPitch != null){
      this._chartPitch.destroy();
    }
    if(this._chartEnergy != null){
      this._chartEnergy.destroy();
    }
  }
}
