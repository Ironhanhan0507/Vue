<template>
	<div class="category">
		<h3>{{ titile }}</h3>
		<!-- 定义一个插槽等着组件的使用者填充 -->
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "Categor-y",
	props: ["listData", "titile"],
};
</script>

<style>
.category {
	background-color: skyblue;
	width: 200px;
	height: 300px;
}
h3 {
	background-color: orange;
	text-align: center;
}
</style>
