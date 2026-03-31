<template>
	<li>
		<label>
			<input type="checkbox" :checked="todo.done" @change="handlecheck(todo.id)" />
			<span>{{ todo.title }}</span>
		</label>
		<button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
	</li>
</template>

<script>
export default {
	props: ["todo"],
	// 获取到要改变的todo的id，数据存在父组件App中，数据在哪改变数据的方法就在哪所以调用父组件传过来的方法来改变数据
	methods: {
		handlecheck(id) {
			this.$bus.$emit("checkTodo", id);
		},
		// 获取到要删除的todo的id，数据存在父组件App中，数据在哪改变数据的方法就在哪所以调用父组件传过来的方法来改变数据
		handleDelete(id) {
			if (confirm("确定要删除吗？")) {
				this.$bus.$emit("deleteTodo", id);
			}
		},
	},
};
</script>

<style>
/*item*/
li {
	list-style: none;
	height: 36px;
	line-height: 36px;
	padding: 0 5px;
	border-bottom: 1px solid #ddd;
}

li label {
	float: left;
	cursor: pointer;
}

li label li input {
	vertical-align: middle;
	margin-right: 6px;
	position: relative;
	top: -1px;
}

li button {
	float: right;
	display: none;
	margin-top: 3px;
}

li:before {
	content: initial;
}

li:last-child {
	border-bottom: none;
}

li:hover {
	background: #ddd;
}
li:hover button {
	display: block;
}
</style>
