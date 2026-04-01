<template>
	<div class="row">
		<!-- 展示列表 -->
		<div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
			<a :href="user.html_url" target="_blank">
				<img :src="user.avatar_url" style="width: 100px" />
			</a>
			<p class="card-text">{{ user.login }}</p>
		</div>
		<!-- 展示欢迎词 -->
		<h1 v-show="info.isFirst">请输入关键字，随后点击搜索按钮进行搜索~</h1>
		<!-- 展示加载中 -->
		<h1 v-show="info.isLoading">加载中...</h1>
		<!-- 展示错误信息 -->
		<h1 v-show="info.err">错误信息: {{ info.err }}</h1>
	</div>
</template>

<script>
export default {
	name: "lis-t",
	data() {
		return {
			info: {
				users: [],
				isFirst: true, // 是否为第一次打开页面
				isLoading: false, // 是否处于加载中
				err: "", // 存储请求相关的错误信息
			},
		};
	},
	mounted() {
		this.$bus.$on("getUsers", dataObj => {
			// console.log("list组件接收到了search组件发布的search-users消息了，data是：", data);
			this.info = dataObj;
		});
	},
};
</script>

<style>
.album {
	min-height: 50rem; /* Can be removed; just added for demo purposes */
	padding-top: 3rem;
	padding-bottom: 3rem;
	background-color: #f7f7f7;
}

.card {
	float: left;
	width: 33.333%;
	padding: 0.75rem;
	margin-bottom: 2rem;
	border: 1px solid #efefef;
	text-align: center;
}

.card > img {
	margin-bottom: 0.75rem;
	border-radius: 100px;
}

.card-text {
	font-size: 85%;
}
</style>
