<template>
	<form @submit.prevent="addTodo">
		<label for="todo">Enter: </label>
		<input type="text" placeholder="Enter a todo" v-model="newTodo" />

		<button>Add Todo</button>
	</form>

	<div
		:class="{ complete: todo.isComplete }"
		class="todo__list"
		v-for="todo in todos"
		:key="todo.id"
	>
		<div>
			<p>{{ todo.item }}</p>
		</div>
		<div>
			<button v-if="todo.isComplete === false" @click="toggleTodo(todo)">
				Complete
			</button>
			<button v-else @click="toggleTodo(todo)">Undo</button>
			<button @click="editTodo(todo)">Edit</button>
			<button @click="removeTodo(todo)">Remove</button>
		</div>
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
			this.newTodo = '';
		},
		toggleTodo(clickedTodo) {
			this.todos.map((todo) => {
				if (todo.id === clickedTodo.id) {
					todo.isComplete = !todo.isComplete;
				}
			});
		},
		removeTodo(clickedTodo) {
			this.todos.map((todo) => {
				if (todo.id === clickedTodo.id) {
					this.todos.splice(this.todos.indexOf(clickedTodo), 1);
				}
			});
		},
		editTodo(clickedTodo) {
			this.todos.map((todo) => {
				if (todo.id === clickedTodo.id) {
					this.newTodo = clickedTodo.item;
					this.todos.splice(this.todos.indexOf(clickedTodo), 1);
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

.todo__list {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
