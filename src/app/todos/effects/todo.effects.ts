import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";

import { ActionTypes, CompleteTodo } from '../actions';

@Injectable()
export class TodoEffects {

	@Effect()
	public todoAdded$: Observable<Action> = this._actions$
		.pipe(
			ofType(ActionTypes.AddTodo),
			map((action: any) => action.payload),
			map(todo => new CompleteTodo(todo))
		);

	constructor(private readonly _actions$: Actions) {}
}
