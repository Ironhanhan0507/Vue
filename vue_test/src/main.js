//引入Vue
import Vue from "vue";
//引入App
import App from "./App.vue";

// 引入elementui组件库
import ElementUI from "element-ui";
// 引入全部样式
import "element-ui/lib/theme-chalk/index.css";

//关闭Vue的生产提示
Vue.config.productionTip = false;

Vue.use(ElementUI);
//创建vm
new Vue({
	el: "#app",
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this; // 安装全局事件总线
	},
});
