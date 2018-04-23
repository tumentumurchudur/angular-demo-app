import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../../interfaces';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() items: ITodo[] = [];

  @Output() onItemClick = new EventEmitter<ITodo>();

  public itemClicked(item: ITodo): void {
    this.onItemClick.emit(item);
  }
}
