<template>
	<div class="school">
		<h2>学校名称：{{ name }}</h2>
		<h2>学校地址：{{ address }}</h2>
	</div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
	name: "Schoo-l",
	data() {
		return {
			name: "清华大学",
			address: "北京",
		};
	},
	mounted() {
		pubsub.subscribe("hello", (msg, data) => {
			console.log("有人发布了hello消息，hello消息回调执行了", msg, data);
		});
	},
};
</script>

<style scoped>
.school {
	background-color: skyblue;
	padding: 5px;
}
</style>
