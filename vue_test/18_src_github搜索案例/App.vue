<template>
	<div class="container">
		<search></search>
		<list></list>
	</div>
</template>

<script>
import List from "./components/list.vue";
import search from "./components/search.vue";
export default {
	components: { search, List },
	name: "App",
};
</script>

<style></style>
