<template>
	<div>
		<h2 @click="showName">学生姓名：{{ name }}</h2>
		<h2>姓别：{{ sex }}</h2>
	</div>
</template>

<script>
// 引入混合
// import { mixin, mixin2 } from "../mixin";

export default {
	name: "Studen-t",
	data() {
		return {
			name: "张三",
			sex: "男",
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
