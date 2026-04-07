//引入Vue
import Vue from "vue";
//引入App
import App from "./App.vue";

// 引入store
import store from "./store/index";
//关闭Vue的生产提示
Vue.config.productionTip = false;

//创建vm
new Vue({
	el: "#app",
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this; // 安装全局事件总线
	},
	store, // 将store挂载到Vue实例上
});
