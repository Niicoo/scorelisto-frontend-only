import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';



const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

// imports: [ RouterModule.forRoot(routes, { enableTracing: true }) ],
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
