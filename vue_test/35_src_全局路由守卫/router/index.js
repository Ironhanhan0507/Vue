// 创建路由器
import VueRouter from "vue-router";
// 引入组件
import MyAbout from "../pages/about.vue";
import MyHome from "../pages/home.vue";
import MyNews from "../pages/news.vue";
import MyMessage from "../pages/message.vue";
import MyDetail from "../pages/detail.vue";

const router = new VueRouter({
	routes: [
		{
			name: "guanyu", // 给路由命名
			path: "/about",
			component: MyAbout,
		},
		{
			name: "zhuye", // 给路由命名
			path: "/home",
			component: MyHome,
			children: [
				{
					name: "xinwen", // 给路由命名
					path: "news",
					component: MyNews,
					meta: { isAuth: true }, // 通过meta属性给路由添加额外的信息
				},
				{
					path: "message",
					component: MyMessage,
					children: [
						{
							name: "xiaoxi", // 给路由命名
							path: "detail/:id/:title", // 携带params参数
							component: MyDetail,
							meta: { isAuth: true }, // 通过meta属性给路由添加额外的信息

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

// 全局前置路由守卫 (在路由跳转开始前和初始化时被调用)
router.beforeEach((to, from, next) => {
	if (to.meta.isAuth) {
		// 判断是否需要鉴权
		if (localStorage.getItem("school") === "北京大学") {
			next();
		} else {
			alert("没有权限查看");
		}
	} else {
		next();
	}
});

// 全局后置路由守卫 (在路由跳转结束后和初始化时被调用)
// router.afterEach((to, from) => {});

export default router;
