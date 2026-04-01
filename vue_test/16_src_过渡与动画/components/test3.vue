<template>
	<div>
		<button @click="isShow = !isShow">显示/隐藏</button>
		<!-- <transition> can only be used on a single element. Use <transition-group> for lists. -->
		<transition-group name="animate__animated animate__bounce" enter-active-class="animate__swing" leave-active-class="animate__backOutUp" appear>
			<h1 v-if="!isShow" key="1">Hello Vue</h1>
			<h1 v-if="isShow" key="2">Hello Vue</h1>
		</transition-group>
	</div>
</template>

<script>
import "animate.css";
export default {
	name: "test-3",
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
}
</style>
