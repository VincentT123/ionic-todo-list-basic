import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myTodo = '';
  todos = [];
  dones = [];

  constructor() {}

  addTodo() {
    this.todos.push(this.myTodo);
    this.myTodo = '';
  }
  delTodo(i) {
    this.todos.splice(i, 1);
  }
  okTodo(i) {
    this.dones.push(this.todos[i]);
    this.todos.splice(i, 1);
  }
  delDone(i) {
    this.dones.splice(i, 1);
  }

}
