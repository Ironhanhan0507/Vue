<template>
	<div class="todo-header">
		<input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" />
	</div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
	methods: {
		add(event) {
			// 获取输入框的值
			const input = event.target;
			// 包装成一个对象 (该怎么传给list组件？将数据放在父组件App中，App组件将一个方法传给header组件，header组件调用该方法并传入数据，App组件接收数据并存储在data中，再将数据通过props传给list组件)
			const todo = {
				id: nanoid(),
				title: input.value,
				done: false,
			};
			// 通过父组件传过来的方法将数据传给父组件
			// this.receive(todo);

			// 通过$emit触发事件
			this.$emit("receive", todo);

			// 清空输入框
			input.value = "";
		},
	},
	// 通过自定义事件不需要用props接收
	// props: ["receive"],
};
</script>

<style scoped>
/*header*/
.todo-header input {
	width: 560px;
	height: 28px;
	font-size: 14px;
	border: 1px solid #ccc;
	border-radius: 4px;
	padding: 4px 7px;
}

.todo-header input:focus {
	outline: none;
	border-color: rgba(82, 168, 236, 0.8);
	box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
