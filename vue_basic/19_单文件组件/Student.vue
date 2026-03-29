<template>
	<div class="demo">
		<h2>学生姓名：{{ studentName }}</h2>
		<h2>年龄：{{ age }}</h2>
		<button @click="show">点我显示学校名称</button>
	</div>
</template>

<script>
export default {
	name: "xuesheng",
	data() {
		return {
			schoolName: "张三",
			address: "25",
		};
	},
};
</script>
