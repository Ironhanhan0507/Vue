// 整个项目的入口文件

import Vue from "vue"; //引入Vue
import App from "./App.vue"; // 引入App组件 所有组件的父组件

Vue.config.productionTip = false;

// 创建vm
new Vue({
	el: "#app",
	render: h => h(App), //将App组件放入容器中
	// render(a) {
	// 	console.log(typeof a);
	// 	return null;
	// },
});
