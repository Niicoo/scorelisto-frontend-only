import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DefaultPitchParameter, PitchParameter } from 'src/worker/app-workers/pitch-detector.worker';


@Component({
  selector: 'app-pitch-parameters',
  templateUrl: './pitch-parameters.component.html',
  styleUrls: ['./pitch-parameters.component.css']
})
export class PitchParametersComponent implements OnInit {
  ParametersForm = this.fb.group({
    windowtimesize_ms: ['',[
      Validators.required,
      Validators.min(0.1),
      Validators.max(1000)]
    ],
    sonogramperiod_ms: ['',[
      Validators.required,
      Validators.min(1e-3),
      Validators.max(1000)]
    ],
    f0_hz: ['',[
      Validators.required,
      Validators.min(1e-6),
      Validators.max(1e6)]
    ],
    freqmin_hz: ['',[
      Validators.required,
      Validators.min(1e-3),
      Validators.max(1e6)]
    ],
    freqmax_hz: ['',[
      Validators.required,
      Validators.min(1e-3),
      Validators.max(1e6)]
    ],
    cutoff: ['',[
      Validators.required,
      Validators.min(0),
      Validators.max(1)]
    ],
    smallcutoff: ['',[
      Validators.required,
      Validators.min(0),
      Validators.max(1)]
    ]
  });

  constructor(private fb:FormBuilder) {
  }

  ngOnInit() {
    this.setValues(DefaultPitchParameter);
  }

  setValues(param:any) {
    this.ParametersForm.patchValue(param);
    this.ParametersForm.patchValue({windowtimesize_ms: 1000*param.windowtimesize_s});
    this.ParametersForm.patchValue({sonogramperiod_ms: 1000*param.sonogramperiod_s});
  }
  getValues():PitchParameter {
    let temp = {
      windowtimesize_s: this.ParametersForm.value.windowtimesize_ms / 1e3,
      sonogramperiod_s: this.ParametersForm.value.sonogramperiod_ms / 1e3,
      f0_hz: this.ParametersForm.value.f0_hz,
      freqmin_hz: this.ParametersForm.value.freqmin_hz,
      freqmax_hz: this.ParametersForm.value.freqmax_hz,
      cutoff: this.ParametersForm.value.cutoff,
      smallcutoff: this.ParametersForm.value.smallcutoff
    }
    return(temp)
  }

}
