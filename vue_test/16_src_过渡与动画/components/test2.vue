<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<!-- <transition> can only be used on a single element. Use <transition-group> for lists. -->
		<transition-group name="hello" appear>
			<h1 v-if="!isShow" key="1">Hello Vue</h1>
			<h1 v-if="isShow" key="2">Hello Vue</h1>
		</transition-group>
	</div>
</template>

<script>
export default {
	name: "test-2",
	data() {
		return {
			isShow: true,
		};
	},
};
</script>

<style scoped>
h1 {
	background-color: orange;
	transition: 1s linear;
}

.hello-enter {
	transform: translateX(-100%);
}
.hello-enter-to {
	transform: translateX(0);
}
.hello-leave {
	transform: translateX(0);
}
.hello-leave-to {
	transform: translateX(-100%);
}
</style>
