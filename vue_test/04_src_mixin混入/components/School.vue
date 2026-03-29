<template>
	<div>
		<h2 @click="showName">学校名称：{{ name }}</h2>
		<h2>地址：{{ address }}</h2>
	</div>
</template>

<script>
// import { mixin, mixin2 } from "../mixin";

export default {
	name: "Schoo-l",
	data() {
		return {
			name: "清华大学",
			address: "北京",
		};
	},
	// methods: {
	// 	showName() {
	// 		alert(this.name);
	// 	},
	// },
	// mixins: [mixin, mixin2],
};
</script>
