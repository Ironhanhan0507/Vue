<template>
	<div>
		<MyBanner></MyBanner>
		<div class="row">
			<div class="col-xs-2 col-xs-offset-2">
				<div class="list-group">
					<!-- <a class="list-group-item active" href="./about.html">About</a> -->
					<!-- <a class="list-group-item" href="./home.html">Home</a> -->

					<!-- 路由链接 router-link标签  -->
					<!-- replace 属性用于控制路由跳转时是否替换当前历史记录 -->
					<router-link replace class="list-group-item" active-class="active" to="/about">About</router-link>
					<router-link replace class="list-group-item" active-class="active" to="/home">Home</router-link>
				</div>
			</div>
			<div class="col-xs-6">
				<div class="panel">
					<div class="panel-body">
						<!-- <h2>我是About的内容</h2> -->
						<!-- 指定组件的呈现位置 -->
						<router-view></router-view>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import MyBanner from "./components/banner.vue";
export default {
	components: { MyBanner },
	name: "App",
};
</script>

<style></style>
