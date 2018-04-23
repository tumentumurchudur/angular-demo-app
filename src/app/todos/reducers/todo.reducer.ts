import { ActionTypes, Actions } from '../actions';
import { ITodo } from '../interfaces';

export interface State {
	todos: ITodo[]
}

const defaultState = {
	todos: [
		{ task: 'Do homework', status: false },
    { task: 'Clean the house', status: true },
    { task: 'Mow the lawn', status: false }
	]
};

export function todoReducer(state: State = defaultState, action: Actions): State {
	switch(action.type) {
		case ActionTypes.AddTodo:
			return Object.assign({}, state, { todos: state.todos.concat(action.payload) });
		case ActionTypes.CompleteTodo:
			const todos = state.todos.filter(todo => todo.task !== action.payload.task);
			const todo = { task: action.payload.task, status: !action.payload.status };

			return Object.assign({}, state, { todos: todos.concat(todo) });
		default:
			return state;
	}
}

export const getTodoItems = (state: State) => state.todos.sort((a, b) => {
	if (a.task > b.task) return 1;
	if (a.task < b.task) return -1;
	return 0;
});
