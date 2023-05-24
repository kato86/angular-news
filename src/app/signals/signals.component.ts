import {Component, computed, OnInit, Signal, signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: 'signals.component.html'
})

export class SignalsComponent implements OnInit {

  count: WritableSignal<number> = signal(0);
  todos: WritableSignal<any> = signal([{title: 'Angular Signals', done: false}]);
  doubleCount: Signal<number> = computed(() => this.count() * 2);


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

  setTodoTrue() {
    this.todos.mutate(value => {
      value[0].done = true;
    })
  }

  setTodoFalse() {
    this.todos.mutate(value => {
      value[0].done = false;
    })
  }

}
