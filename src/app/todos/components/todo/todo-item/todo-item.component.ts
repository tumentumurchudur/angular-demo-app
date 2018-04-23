import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../../../interfaces';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() item: ITodo;

  @Output() onClick = new EventEmitter<ITodo>();

  public itemClicked() {
    this.onClick.emit(this.item);
  }
}
