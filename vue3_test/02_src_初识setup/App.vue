<template>
	<h1>信息</h1>
	<p>姓名：{{ name }}</p>
	<p>年龄：{{ age }}</p>
	<button @click="sayHello">打招呼</button>
</template>

<script>
// import { h } from "vue";
export default {
	name: "App",
	setup() {
		// 数据
		let name = "张三";
		let age = 18;

		// 方法
		function sayHello() {
			alert(`你好，我是${name}，今年${age}岁了！`);
		}
		// 1.返回一个对象，里面的所有东西都可以在模板中使用
		return {
			name,
			age,
			sayHello,
		};
		// 2.返回一个渲染函数，函数的返回值会被当做模板的数据(了解)
		// return () => { return h('h1','Hello World') };
	},
};
</script>

<style></style>
