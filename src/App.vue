<template>
	<Quote />
	<h1>Todo App</h1>
	<TodoInput />
</template>

<script>
import TodoInput from '@/components/TodoInput.vue';
import Quote from '@/components/Quote.vue';

export default {
	name: 'App',
	components: {
		TodoInput,
		Quote,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
