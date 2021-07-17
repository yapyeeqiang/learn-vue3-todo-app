import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
	state: {
		todos: [],
		quote: null,
	},
	mutations: {
		ADD_TODO(state, todo) {
			state.todos.push(todo);
		},
		ADD_QUOTE(state, quote) {
			state.quote = quote;
		},
	},
	actions: {
		fetchQuote({ commit }) {
			axios
				.get('https://type.fit/api/quotes')
				.then((res) => {
					commit(
						'ADD_QUOTE',
						res.data[Math.floor(Math.random() * res.data.length)].text
					);
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
	modules: {},
});
