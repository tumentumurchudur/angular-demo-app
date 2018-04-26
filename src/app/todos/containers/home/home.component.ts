import { Component, ViewChild, ElementRef } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromTodos from '../../reducers';
import * as todoActions from '../../actions';
import { ITodo } from '../../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public todos$: Observable<ITodo[]>;

  @ViewChild('task') private _taskInput: ElementRef;

  constructor(private _store: Store<fromTodos.TodosState>) {
    this.todos$ = this._store.pipe(select(fromTodos.getTodoItems))
  }

  public addTask(): void {
    const newTodo = {
      task: this._taskInput.nativeElement.value,
      status: false
    };

    this._store.dispatch(new todoActions.AddTodo(newTodo));
  }

  public itemClicked(item: ITodo): void {
    this._store.dispatch(new todoActions.CompleteTodo(item));
  }

}
