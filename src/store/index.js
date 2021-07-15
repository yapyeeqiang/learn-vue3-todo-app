import { createStore } from 'vuex';

export default createStore({
	state: {
		todos: [],
	},
	mutations: {
		ADD_TODO(state, todo) {
			state.todos.push(todo);
		},
	},
	actions: {},
	modules: {},
});
