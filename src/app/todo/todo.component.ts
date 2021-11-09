import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Priority, State } from '../model/Enum';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  priority = Priority;
  state = State;
  todoName: string = '';
  todoPriority: Priority = Priority.MEDIUM;

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {id: 1, name: 'Dito1', priority: Priority.HIGH, state: State.TODO},
      {id: 2, name: 'Dito2', priority: Priority.MEDIUM, state: State.INPROGRESS},
      {id: 3, name: 'Dito3', priority: Priority.LOW, state: State.DONE}
    ];
  }

  getTodoByState(state?: State): Todo[] {
    return this.todos.filter(todo => todo.state == state || !state);
  }

  onChangeState(id: number, state: State): void {
    this.todos = this.todos.map(item => item.id === id ? {...item, state} : item);
  }

  onDelete(id: number): void {
    this.todos = this.todos.filter(item => item.id !== id);
  }

  addTodo(): void {
    if (!this.todoName || !this.todoPriority) {
      alert('Enter name and pririty');
      return;
    }

    this.todos = [...this.todos, {
      id: this.getNextId(),
      name: this.todoName,
      priority: this.todoPriority,
      state: this.state.TODO
    }];

    this.resetForm();
  }

  private resetForm(): void {
    this.todoName = '';
    this.todoPriority = Priority.MEDIUM;
  }

  private getNextId(): number {
    return (this.todos.length == 0) ? 1 :
      this.todos[this.todos.length - 1].id + 1
  }

}
