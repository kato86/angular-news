import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {SignalsComponent} from "./signals/signals.component";
import {RxjsToSignalComponent} from "./signals/rxjs-to-signal/rxjs-to-signal.component";

@NgModule({
  declarations: [
    AppComponent,
    RxjsToSignalComponent,
    SignalsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'signals', component: SignalsComponent},
      {path: 'signals-rxjs', component: RxjsToSignalComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
