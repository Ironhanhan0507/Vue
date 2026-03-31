<template>
	<div id="root">
		<div class="todo-container">
			<div class="todo-wrap">
				<!-- 绑定一个名为receive的自定义事件将MyHeader组件中的数据传给App组件 -->
				<MyHeader @receive="addTodo"></MyHeader>
				<MyList :todoList="todoList" :abc="checkTodo" :def="deleteTodo"></MyList>
				<MyFooter :todoList="todoList" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></MyFooter>
			</div>
		</div>
	</div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
import MyList from "./components/MyList.vue";

export default {
	name: "App",
	components: { MyHeader, MyFooter, MyList },

	// list组件需要一个数据源，header组件需要一个方法来添加数据，所以都放在父组件中
	data() {
		return {
			// todoList: [
			// 	{
			// 		id: "1",
			// 		title: "吃饭",
			// 		done: false,
			// 	},
			// 	{
			// 		id: "2",
			// 		title: "睡觉",
			// 		done: true,
			// 	},
			// 	{
			// 		id: "3",
			// 		title: "学习",
			// 		done: false,
			// 	},
			// ],
			todoList: JSON.parse(localStorage.getItem("todos")) || [],
		};
	},
	methods: {
		// header组件调用该方法并传入数据，App组件接收数据并存储在data中，再将数据通过props传给list组件
		addTodo(todo) {
			this.todoList.unshift(todo);
		},
		// 勾选 or 取消勾选
		// 获取到要改变的todo的id，数据存在父组件App中，数据在哪改变数据的方法就在哪所以在App组件中定义一个方法来改变数据，list组件调用父组件传过来的方法来改变数据
		// 先传给MyList组件，再传给MyItem组件，MyItem组件调用父组件传过来的方法来改变数据
		checkTodo(id) {
			this.todoList.forEach(todo => {
				if (todo.id === id) {
					todo.done = !todo.done;
				}
			});
		},
		// 删除
		deleteTodo(id) {
			this.todoList = this.todoList.filter(todo => todo.id !== id);
		},
		// 全选 or 取消全选
		checkAllTodo(done) {
			this.todoList.forEach(todo => {
				todo.done = done;
			});
		},
		clearAllTodo() {
			this.todoList = this.todoList.filter(todo => !todo.done);
		},
	},
	watch: {
		todoList: {
			handler(newVal) {
				localStorage.setItem("todos", JSON.stringify(newVal));
			},
			deep: true,
		},
	},
};
</script>

<style>
/*base*/
body {
	background: #fff;
}

.btn {
	display: inline-block;
	padding: 4px 12px;
	margin-bottom: 0;
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
	border-radius: 4px;
}

.btn-danger {
	color: #fff;
	background-color: #da4f49;
	border: 1px solid #bd362f;
}

.btn-danger:hover {
	color: #fff;
	background-color: #bd362f;
}

.btn:focus {
	outline: none;
}

.todo-container {
	width: 600px;
	margin: 0 auto;
}
.todo-container .todo-wrap {
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 5px;
}
</style>
