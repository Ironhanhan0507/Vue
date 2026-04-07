<template>
	<div>
		<h1>当前求和为：{{ sum }}</h1>
		<h3>当前求和放大十倍为：{{ bigSum }}</h3>
		<h3>我在{{ shcool }}学习{{ subject }}</h3>
		<select v-model="num">
			<option value.number="1">+1</option>
			<option value.number="2">+2</option>
			<option value.number="3">+3</option>
		</select>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementOdd">当前求和为奇数再加</button>
		<button @click="incrementWait">等一等再加</button>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
	name: "Coun-t",
	data() {
		return {
			num: 1, //用户选择的数据
		};
	},
	computed: {
		// 1.手动写计算属性
		/*
		sum() {
			return this.$store.state.sum;
		},
		shcool() {
			return this.$store.state.shcool;
		},
		subject() {
			return this.$store.state.subject;
		},
		*/

		// 2.使用mapState从state中生成计算属性(对象写法)
		// ...mapState({
		// 	he: "sum",
		// 	xuexiao: "shcool",
		// 	xueke: "subject",
		// }),

		// 3.使用mapState从state中生成计算属性(数组写法)
		...mapState(["sum", "shcool", "subject"]),

		/* -------------------------------------------- */

		// 1.手动写计算属性
		// bigSum() {
		// 	return this.$store.getters.bigSum;
		// },

		// 2.使用mapGetters从getters中生成计算属性(对象写法)
		// ...mapGetters({
		// 	bigSum: "bigSum",
		// }),

		// 3.使用mapGetters从getters中生成计算属性(数组写法)
		...mapGetters(["bigSum"]),
	},
	methods: {
		increment() {
			this.$store.dispatch("jia", this.num * 1);
		},
		decrement() {
			this.$store.dispatch("jian", this.num * 1);
		},
		incrementOdd() {
			if (this.$store.state.sum % 2 !== 0) {
				this.$store.dispatch("jia", this.num * 1);
			}
		},
		incrementWait() {
			setTimeout(() => {
				this.$store.dispatch("jia", this.num * 1);
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
