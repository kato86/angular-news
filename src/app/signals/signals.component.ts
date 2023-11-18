import {Component, computed, effect, OnInit, Signal, signal, WritableSignal} from '@angular/core';
import {toObservable} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-signals',
  templateUrl: 'signals.component.html'
})

export class SignalsComponent implements OnInit {

  count: WritableSignal<number> = signal(0);
  todos: WritableSignal<any> = signal([{title: 'Angular Signals', done: false}]);
  doubleCount: Signal<number> = computed(() => this.count() * 2);
  rxjsCount = signal(0);
  rxjsCount$ = toObservable(this.rxjsCount);

  constructor() {
    effect(() => {
      console.log('Count changed! ', this.count());
      console.log('Todos changed! ', this.todos());
    });
    this.rxjsCount$.subscribe(() => console.log('Observable changed!'));
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
    // this.todos.mutate(value => {
    //   value[0].done = true;
    // })
  }

  setTodoFalse() {
    // this.todos.mutate(value => {
    //   value[0].done = false;
    // })
  }

  setRxJSCount() {
    this.rxjsCount.update(value => value + 1);
  }

}
