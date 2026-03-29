import Vue from "vue"; //引入Vue
import App from "./App.vue"; // 引入App组件 所有组件的父组件

import { mixin, mixin2 } from "./mixin";
Vue.mixin(mixin);
Vue.mixin(mixin2);

Vue.config.productionTip = false;

// 创建vm
new Vue({
	el: "#app",
	render: h => h(App), //将App组件放入容器中
});
