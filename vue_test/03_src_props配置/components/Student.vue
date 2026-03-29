<template>
	<div>
		<h2>学生姓名：{{ studentName }}</h2>
		<h2>姓别：{{ sex }}</h2>
		<h2>年龄：{{ age + 1 }}</h2>
		<h2>{{ msg }}</h2>
	</div>
</template>

<script>
export default {
	name: "Studen-t",
	data() {
		return {
			// 数据写死了
			// studentName: "张三",
			// age: "25",
			// sex: "男",
			msg: "我是一名学生",
			a: 1,
		};
	},

	// props让组件接收外部数据 优先级比data中高 props是只读的如要修改可在data中使用this.age复制一份
	// props: ["name", "sex", "age"], // 简单接受

	// 接受同时限制类型
	// props: {
	// 	name: String,
	// 	age: Number,
	// 	sex: String,
	// },

	//最完全写法
	props: {
		name: {
			type: String,
			required: true, // 是否是必要的
		},
		age: {
			type: Number,
			default: 99, //默认值
		},
		sex: {
			type: String,
			required: true,
		},
	},
};
</script>
