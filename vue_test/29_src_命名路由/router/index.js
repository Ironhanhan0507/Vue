// 创建路由器
import VueRouter from "vue-router";
// 引入组件
import MyAbout from "../pages/about.vue";
import MyHome from "../pages/home.vue";
import MyNews from "../pages/news.vue";
import MyMessage from "../pages/message.vue";
import MyDetail from "../pages/detail.vue";

export default new VueRouter({
	routes: [
		{
			path: "/about",
			component: MyAbout,
		},
		{
			path: "/home",
			component: MyHome,
			children: [
				{
					path: "news",
					component: MyNews,
				},
				{
					path: "message",
					component: MyMessage,
					children: [
						{
							name: "xiaoxi", // 给路由命名
							path: "detail",
							component: MyDetail,
						},
					],
				},
			],
		},
	],
});
