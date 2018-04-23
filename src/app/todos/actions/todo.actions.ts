import { Action } from '@ngrx/store';
import { ITodo } from '../interfaces'

export enum ActionTypes {
	AddTodo = '[Todo] Add todo',
	CompleteTodo = '[Todo] Complete todo'
}

export class AddTodo implements Action {
	public type = ActionTypes.AddTodo;
	public payload: ITodo;

	constructor(private _payload) {
		this.payload = _payload;
	}
}

export class CompleteTodo implements Action {
	public type = ActionTypes.CompleteTodo;
	public payload: ITodo;

	constructor(private _payload) {
		this.payload = _payload;
	}
}

export type Actions = AddTodo | CompleteTodo;
