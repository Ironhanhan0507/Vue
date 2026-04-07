<template>
	<div class="category">
		<h3>{{ titile }}</h3>
		<!-- 作用域插槽，数据存在子组件中在插槽标签中使用:games="games"传给使用插槽的组件，由使用插槽的组件决定数据的样式 -->
		<slot :games="games"></slot>
	</div>
</template>

<script>
export default {
	name: "Categor-y",
	props: ["listData", "titile"],
	data() {
		return {
			games: ["红色警戒", "穿越火线", "劲舞团"],
		};
	},
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
