<template>
	<div>
		<Student name="李四" :age="19" sex="女"></Student>
	</div>
</template>

<script>
// 引入组件
import Student from "./components/Student";
export default {
	name: "App",
	components: {
		Student,
	},
};
</script>

<style></style>
