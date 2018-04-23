import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import * as fromTodos from './todo.reducer';

export interface TodosState {
  todos: fromTodos.State;
}

export const reducers: ActionReducerMap<TodosState> = {
  todos: fromTodos.todoReducer
};

export const getTodosState = createFeatureSelector<TodosState>('todos');

export const getTodosEntityState = createSelector(getTodosState, state => state.todos);
export const getTodoItems = createSelector(getTodosEntityState, fromTodos.getTodoItems);