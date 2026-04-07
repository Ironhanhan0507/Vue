<template>
	<div class="category">
		<h3>{{ titile }}</h3>
		<!-- 使用name属性定义一个具名插槽等着组件的使用者使用slot属性指定填充到具体的插槽位置 -->
		<slot name="content"></slot>
		<slot name="footer"></slot>
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
