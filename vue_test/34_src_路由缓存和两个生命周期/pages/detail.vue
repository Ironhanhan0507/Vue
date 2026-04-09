<template>
	<ul>
		<!-- <li>消息编号：{{ $route.query.id }}</li> -->
		<!-- <li>消息内容：{{ $route.query.title }}</li> -->
		<li>消息编号：{{ $route.params.id }}</li>
		<li>消息内容：{{ $route.params.title }}</li>
		<li>消息编号：{{ id }}</li>
		<li>消息内容：{{ title }}</li>
	</ul>
</template>

<script>
export default {
	name: "MyDetail",
	// props: ["a", "b"],
	props: ["id", "title"],
};
</script>

<style></style>
