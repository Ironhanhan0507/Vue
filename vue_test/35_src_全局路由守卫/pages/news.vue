<template>
	<ul>
		<li :style="{ opacity }">Hello,Vue</li>
		<li>news001<input type="text" /></li>
		<li>news002<input type="text" /></li>
		<li>news003<input type="text" /></li>
	</ul>
</template>

<script>
export default {
	name: "MyNews",
	data() {
		return {
			opacity: 1,
		};
	},
	// beforeDestroy() {
	// 	console.log("beforeDestroy---组件销毁前");
	// 	clearInterval(this.timer);
	// },
	// mounted() {
	// 	this.timer = setInterval(() => {
	// 		this.opacity -= 0.01;
	// 		if (this.opacity <= 0) {
	// 			this.opacity = 1;
	// 		}
	// 	}, 16);
	// },

	// 两个新的生命周期钩子函数(路由组件独有)
	activated() {
		console.log("activated---组件被激活");
		this.timer = setInterval(() => {
			this.opacity -= 0.01;
			if (this.opacity <= 0) {
				this.opacity = 1;
			}
		}, 16);
	},
	deactivated() {
		console.log("deactivated---组件被切换走，组件被停用");
		clearInterval(this.timer);
	},
};
</script>

<style></style>
