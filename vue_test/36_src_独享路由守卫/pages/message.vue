<template>
	<div>
		<ul>
			<li v-for="m in messageList" :key="m.id">
				<!-- 携带query参数to的字符串写法 -->
				<!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link> -->
				<!-- 携带query参数to的对象写法 -->
				<!-- <router-link :to="{ path: '/home/message/detail', query: { id: m.id, title: m.title } }">{{ m.title }}</router-link> -->
				<!-- 命名路由简写 -->
				<!-- <router-link :to="{ name: 'xiaoxi', query: { id: m.id, title: m.title } }">{{ m.title }}</router-link> -->

				<!-- 携带params参数to的字符串写法 (需要在detail的路由中使用占位符声明接收params参数) -->
				<!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link> -->
				<!-- 携带params参数to的对象写法 (必须使用命名路由name) -->
				<router-link :to="{ name: 'xiaoxi', params: { id: m.id, title: m.title } }">{{ m.title }}</router-link>
				<button @click="pushShow">push查看</button>
				<button @click="replaceShow">replace查看</button>
			</li>
		</ul>
		<hr />
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: "MyMessage",
	data() {
		return {
			messageList: [
				{ id: "001", title: "message001" },
				{ id: "002", title: "message002" },
				{ id: "003", title: "message003" },
			],
		};
	},
	methods: {
		pushShow(m) {
			// 编程式路由导航 push
			this.$router.push({ name: "xiaoxi", query: { id: m.id, title: m.title } });
		},
		replaceShow(m) {
			// 编程式路由导航 replace
			this.$router.replace({ name: "xiaoxi", query: { id: m.id, title: m.title } });
		},
	},
};
</script>

<style></style>
