<template>
	<div>
		<count></count>
		<hr />
		<person></person>
	</div>
</template>

<script>
import count from "./components/count.vue";
import person from "./components/person.vue";
export default {
	components: { count, person },
	name: "App",
};
</script>

<style></style>
