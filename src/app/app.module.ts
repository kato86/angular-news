import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {SignalsComponent} from "./signals/signals.component";
import {RxjsToSignalComponent} from "./signals/rxjs-to-signal/rxjs-to-signal.component";
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';
import { ChildTemplateComponent } from './ng-template-outlet/child-template/child-template.component';
import {App17Module} from "./angular17/app17.module";

@NgModule({
  declarations: [
    AppComponent,
    RxjsToSignalComponent,
    SignalsComponent,
    NgTemplateOutletComponent,
    ChildTemplateComponent
  ],
  imports: [
    App17Module,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'signals', component: SignalsComponent},
      {path: 'signals-rxjs', component: RxjsToSignalComponent},
      {path: 'ng-template-outlet', component: NgTemplateOutletComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
