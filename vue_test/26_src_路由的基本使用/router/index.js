// 创建路由器
import VueRouter from "vue-router";
// 引入组件
import MyAbout from "../pages/about.vue";
import MyHome from "../pages/home.vue";

export default new VueRouter({
	routes: [
		{
			path: "/about",
			component: MyAbout,
		},
		{
			path: "/home",
			component: MyHome,
		},
	],
});
