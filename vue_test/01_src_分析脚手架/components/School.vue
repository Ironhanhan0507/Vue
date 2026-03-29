<template>
	<div class="demo">
		<h2>学校名称：{{ schoolName }}</h2>
		<h2>地址：{{ address }}</h2>
		<button @click="show">点我显示学校名称</button>
	</div>
</template>

<script>
	export default {
		name: "XueXiao",
		data() {
			return {
				schoolName: "清华大学",
				address: "北京市朝阳区",
			};
		},
		methods: {
			show() {
				alert(this.schoolName);
			},
		},
	};
</script>

<style>
	.demo {
		background-color: orange;
	}
</style>