<template>
	<form @submit.prevent="addTodo">
		<label for="todo">Enter: </label>
		<input type="text" placeholder="Enter a todo" v-model="newTodo" />

		<button>Add Todo</button>
	</form>

	<div
		:class="{ complete: todo.isComplete }"
		@click="toggleTodo(todo)"
		v-for="todo in todos"
		:key="todo.id"
	>
		<p>{{ todo.item }}</p>
	</div>

	<div>
		<h1>Vuex Store Todos</h1>
		<p>{{ $store.state.todos }}</p>
	</div>
</template>

<script>
import { v4 as randomID } from 'uuid';

export default {
	name: 'TodoInput',
	data() {
		return {
			newTodo: null,
			todos: [],
		};
	},
	methods: {
		addTodo() {
			const todo = {
				id: randomID(),
				item: '',
				isComplete: false,
			};
			todo.item = this.newTodo;
			this.todos.push(todo);
			this.$store.commit('ADD_TODO', todo);
			this.newTodo = '';
		},
		toggleTodo(clickedTodo) {
			this.todos.map((todo) => {
				if (todo.id === clickedTodo.id) {
					todo.isComplete = !todo.isComplete;
				}
			});
		},
	},
};
</script>

<style scoped>
.complete {
	text-decoration: line-through;
}
</style>
