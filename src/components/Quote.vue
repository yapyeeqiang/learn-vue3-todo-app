<template>
	<h1>Quote of the Day</h1>
	<p>{{ fetchQuote }}</p>
</template>

<script>
export default {
	name: 'Quote',
	created() {
		this.$store.dispatch('fetchQuote');
	},
	computed: {
		fetchQuote() {
			return this.$store.state.quote;
		},
	},
};
</script>
