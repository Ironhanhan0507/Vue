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
							path: "detail/:id/:title", // 携带params参数
							component: MyDetail,
							// props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
							// props: { a: 1, b: "hello" },

							// props的第二种写法，值为布尔值，若布尔值为真，就会把该路由收到的所有params参数，以props的形式传给Detail组件
							// props: true,

							// props的第三种写法，值为函数，该函数返回的对象中的所有key-value都会以props的形式传给Detail组件
							props($route) {
								return { id: $route.params.id, title: $route.params.title };
							},
						},
					],
				},
			],
		},
	],
});
