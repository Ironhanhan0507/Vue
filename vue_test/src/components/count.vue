<template>
	<div>
		<h1>当前求和为：{{ sum }}</h1>
		<select v-model="num">
			<option value="1">+1</option>
			<option value="2">+2</option>
			<option value="3">+3</option>
		</select>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementOdd">当前求和为奇数再加</button>
		<button @click="incrementWait">等一等再加</button>
	</div>
</template>

<script>
export default {
	name: "Coun-t",
	data() {
		return {
			sum: 0,
			num: 1, //用户选择的数据
		};
	},
	methods: {
		increment() {
			this.sum += this.num * 1;
		},
		decrement() {
			this.sum -= this.num * 1;
		},
		incrementOdd() {
			if (this.sum % 2 !== 0) {
				this.sum += this.num * 1;
			}
		},
		incrementWait() {
			setTimeout(() => {
				this.sum += this.num * 1;
			}, 500);
		},
	},
};
</script>

<style>
button {
	margin-left: 5px;
}
</style>
