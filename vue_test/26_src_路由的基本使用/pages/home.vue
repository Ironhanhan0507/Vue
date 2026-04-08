<template>
	<div>
		<h2>我是Home的内容</h2>
	</div>
</template>

<script>
export default {
	name: "MyHome",
	mounted() {
		console.log("Home组件挂载完成");
	},
	beforeDestroy() {
		console.log("Home组件被切换走，Home组件即将被销毁");
	},
};
</script>

<style></style>
