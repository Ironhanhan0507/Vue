<template>
	<div>
		<h2>我是About的内容</h2>
	</div>
</template>

<script>
export default {
	name: "MyAbout",
	mounted() {
		console.log("About组件挂载完成");
	},
	beforeDestroy() {
		console.log("About组件被切换走，About组件即将被销毁");
	},

	// 通过路由规则进入该组件时，执行该函数
	beforeRouteEnter(to, from, next) {
		console.log("beforeRouteEnter---路由独享的导航守卫，进入路由之前");
		next();
	},
	// 通过路由规则离开该组件时，执行该函数
	beforeRouteLeave(to, from, next) {
		console.log("beforeRouteLeave---路由独享的导航守卫，离开路由之前");
		next();
	},
};
</script>

<style></style>
