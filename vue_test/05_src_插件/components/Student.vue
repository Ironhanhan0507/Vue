<template>
	<div>
		<h2>学生姓名：{{ name }}</h2>
		<h2>姓别：{{ sex }}</h2>
		<input type="text" v-focus />
	</div>
</template>

<script>
export default {
	name: "Studen-t",
	data() {
		return {
			name: "张三",
			sex: "男",
		};
	},
};
</script>
