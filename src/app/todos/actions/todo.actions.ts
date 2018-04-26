import { Action } from '@ngrx/store';

export enum ActionTypes {
	AddTodo = '[Todo] Add todo',
	CompleteTodo = '[Todo] Complete todo'
}

export class AddTodo implements Action {
	public readonly type = ActionTypes.AddTodo;

	constructor(public payload) { }
}

export class CompleteTodo implements Action {
	public readonly type = ActionTypes.CompleteTodo;

	constructor(public payload) { }
}

export type Actions = AddTodo | CompleteTodo;
