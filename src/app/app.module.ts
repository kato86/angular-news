import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {SignalsComponent} from "./signals/signals.component";

@NgModule({
  declarations: [
    AppComponent,
    SignalsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'signals', component: SignalsComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
