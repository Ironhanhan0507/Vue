<template>
	<div class="todo-footer" v-show="todoList.length">
		<label>
			<input type="checkbox" :checked="isAll" @change="CheckAll" />
		</label>
		<span>
			<span>已完成{{ done }}</span> / 全部{{ todoList.length }}
		</span>
		<button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
	</div>
</template>

<script>
export default {
	props: ["todoList"],
	computed: {
		done() {
			return this.todoList.filter(todo => todo.done).length;
		},
		isAll() {
			// 当已完成的数量等于全部的数量，并且全部的数量大于0时，才说明全选了
			return this.done === this.todoList.length && this.todoList.length > 0;
		},
	},
	methods: {
		CheckAll(e) {
			// this.aaa(e.target.checked);
			this.$emit("checkAllTodo", e.target.checked);
		},
		clearAll() {
			// this.bbb();
			this.$emit("clearAllTodo");
		},
	},
};
</script>

<style scoped>
/*footer*/
.todo-footer {
	height: 40px;
	line-height: 40px;
	padding-left: 6px;
	margin-top: 5px;
}

.todo-footer label {
	display: inline-block;
	margin-right: 20px;
	cursor: pointer;
}

.todo-footer label input {
	position: relative;
	top: -1px;
	vertical-align: middle;
	margin-right: 5px;
}

.todo-footer button {
	float: right;
	margin-top: 5px;
}
</style>
