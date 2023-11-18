import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-conditional-statements',
  templateUrl: 'conditional-statements.component.html'
})

export class ConditionalStatementsComponent implements OnInit {

  loggedIn = true;
  users: any;

  constructor() {
  }

  ngOnInit() {
    this.users = [
      {id: 1, name: 'Bob'},
      {id: 2, name: 'Bob 2'},
      {id: 3, name: 'Bob 3'},
      {id: 4, name: 'Bob 4'},
    ]
  }
}
