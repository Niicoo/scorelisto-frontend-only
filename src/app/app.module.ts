import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { HomeComponent } from './home/home.component';
import { AdvancedConverterComponent } from './home/advanced-converter/advanced-converter.component';
import { PitchParametersComponent } from './home/advanced-converter/parameters/pitch-parameters/pitch-parameters.component';
import { StepParametersComponent } from './home/advanced-converter/parameters/step-parameters/step-parameters.component';
import { RhythmParametersComponent } from './home/advanced-converter/parameters/rhythm-parameters/rhythm-parameters.component';
import { FileInputComponent } from './home/file-input/file-input.component';
import { ScorePrinterComponent } from './home/score-printer/score-printer.component';
import { RecorderComponent } from './home/recorder/recorder.component';
import { ProgressionBarComponent } from './home/progression-bar/progression-bar.component';
import { GraphsComponent } from './home/graphs/graphs.component';
import { SoundPlayerComponent } from './home/sound-player/sound-player.component';
// Ngx Bootstrap
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
// Services
import { WorkerService } from './SERVICES/worker.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    PageNotFoundComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    AdvancedConverterComponent,
    FileInputComponent,
    PitchParametersComponent,
    StepParametersComponent,
    RhythmParametersComponent,
    ScorePrinterComponent,
    RecorderComponent,
    ProgressionBarComponent,
    SoundPlayerComponent,
    GraphsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [WorkerService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
