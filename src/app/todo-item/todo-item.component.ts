import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Priority, State } from '../model/Enum';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @Output() newState = new EventEmitter<State>();
  @Output() delete = new EventEmitter<number>();
  state = State;
  priority = Priority;

  constructor() { }

  ngOnInit(): void {
  }

  onNewState(state: State) {
    this.newState.emit(state);
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }
}
