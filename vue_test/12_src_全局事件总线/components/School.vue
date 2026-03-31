<template>
	<div class="school">
		<h2>学校名称：{{ name }}</h2>
		<h2>学校地址：{{ address }}</h2>
	</div>
</template>

<script>
export default {
	name: "Schoo-l",
	data() {
		return {
			name: "清华大学",
			address: "北京",
		};
	},
	mounted() {
		this.$bus.$on("hello", data => {
			console.log("接收到学生组件传来的数据了：", data);
		});
	},
	beforeDestroy() {
		this.$bus.$off("hello");
	},
};
</script>

<style scoped>
.school {
	background-color: skyblue;
	padding: 5px;
}
</style>
