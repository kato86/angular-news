import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-rxjs-to-signal',
  templateUrl: 'rxjs-to-signal.component.html'
})

export class RxjsToSignalComponent implements OnInit {

  counterObservable = interval(1000);
  counter = toSignal(this.counterObservable, {initialValue: 0});
  constructor() {
  }

  ngOnInit() {
  }
}
