<template>
	<section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div><input type="text" placeholder="enter the name you search" v-model="keyword" />&nbsp; <button @click="getUsers">Search</button></div>
	</section>
</template>

<script>
import axios from "axios";
export default {
	name: "searc-h",
	data() {
		return {
			keyword: "",
		};
	},
	methods: {
		getUsers() {
			// 发送请求前更新list
			// 注：可以使用vue-source '插件' 发送请求this.$http.get()，也可以使用axios发送请求axios.get()，两者的使用方法基本一样
			this.$bus.$emit("getUsers", { isFirst: false, isLoading: true, err: "", users: [] });
			axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
				response => {
					console.log("getUsers", response.data.items);
					this.$bus.$emit("getUsers", { isFirst: false, isLoading: false, err: "", users: response.data.items });
				},
				error => {
					console.log("请求失败了", error.message);
					this.$bus.$emit("getUsers", { isFirst: false, isLoading: false, err: error.message, users: [] });
				},
			);
		},
	},
};
</script>

<style></style>
