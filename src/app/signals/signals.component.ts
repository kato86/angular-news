import {Component, OnInit, signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: 'signals.component.html'
})

export class SignalsComponent implements OnInit {

  count: WritableSignal<number> = signal(0);

  constructor() {
  }

  ngOnInit() {

  }

  onIncrementCount() {
    console.log('Increment +');
    this.count.update(value => value + 1);
  }

  onDecrementCount() {
    console.log('Decrement -');
    this.count.update(value => value - 1);
  }

  onResetCount() {
    this.count.set(0);
  }
}
