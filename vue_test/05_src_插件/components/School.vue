<template>
	<div>
		<h2>学校名称(使用插件中的全局过滤器)：{{ name | filter }}</h2>
		<h2>学校名称：{{ name }}</h2>
		<h2>地址：{{ address }}</h2>
	</div>
</template>

<script>
export default {
	name: "Schoo-l",
	data() {
		return {
			name: "tsuinghua清华大学",
			address: "北京",
		};
	},
};
</script>
