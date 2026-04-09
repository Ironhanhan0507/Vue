<template>
	<div>
		<h2>Home组件内容</h2>
		<div>
			<ul class="nav nav-tabs">
				<li>
					<router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
				</li>
				<li>
					<router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
				</li>
			</ul>
			<!-- 保持被切换的组件不被销毁 -->
			<keep-alive include="MyNews">
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
export default {
	name: "MyHome",
	mounted() {
		console.log("Home组件挂载完成");
	},
	beforeDestroy() {
		console.log("Home组件被切换走，Home组件即将被销毁");
	},
};
</script>

<style></style>
