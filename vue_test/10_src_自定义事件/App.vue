<template>
	<div class="app">
		<h1>{{ msg }}，学生姓名是:{{ studentName }}</h1>
		<!-- 父组件给子组件传递函数类型的props实现：子给父传递数据 -->
		<school :getSchoolName="getSchoolName" />

		<!-- 父组件给子组件绑定名为fn的自定义事件：子给父传递数据 -->
		<student v-on:fn="getStudentName" />

		<!-- 通过ref访问子组件实例绑定事件 -->
		<!-- <student ref="student" /> -->
	</div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";

export default {
	name: "App",
	components: { School, Student },
	data() {
		return {
			msg: "你好啊！",
			studentName: "",
		};
	},
	methods: {
		getSchoolName(name) {
			console.log("App收到了学校名：", name);
		},
		getStudentName(name, ...params) {
			console.log("App收到了学生名：", name, params);
			this.studentName = name;
		},
	},
	mounted() {
		this.$refs.student.$on("fn", this.getStudentName); //绑定自定义事件 (this.$refs.student是Student组件的实例对象)
		// this.$refs.student.$once('atguigu',this.getStudentName) //绑定自定义事件（一次性）
	},
};
</script>

<style scoped>
.app {
	background-color: gray;
	padding: 5px;
}
</style>
