import Vue from "vue"; //引入Vue
import App from "./App.vue"; // 引入App组件 所有组件的父组件

Vue.config.productionTip = false;

// 引入插件
import plugin from "./plugin";
// 使用插件
Vue.use(plugin);

// 创建vm
new Vue({
	el: "#app",
	render: h => h(App), //将App组件放入容器中
});
