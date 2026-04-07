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
		<button @click="increment(num)">+</button>
		<button @click="decrement(num)">-</button>
		<button @click="incrementOdd(num)">当前求和为奇数再加</button>
		<button @click="incrementWait(num)">等一等再加</button>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
	name: "Coun-t",
	data() {
		return {
			num: 1, //用户选择的数据
		};
	},
	computed: {
		// 2.使用mapState从state中生成计算属性(对象写法)
		// ...mapState({
		// 	he: "sum",
		// 	xuexiao: "shcool",
		// 	xueke: "subject",
		// }),

		// 3.使用mapState从state中生成计算属性(数组写法)
		...mapState(["sum", "shcool", "subject"]),

		/* -------------------------------------------- */

		// 2.使用mapGetters从getters中生成计算属性(对象写法)
		// ...mapGetters({
		// 	bigSum: "bigSum",
		// }),

		// 3.使用mapGetters从getters中生成计算属性(数组写法)
		...mapGetters(["bigSum"]),
	},
	methods: {
		// increment() {
		// 	this.$store.commit("JIA", this.num * 1);
		// },
		// decrement() {
		// 	this.$store.commit("JIAN", this.num * 1);
		// },

		// 2.使用mapMutations生成对应方法，方法中调用commit(对象写法)
		...mapMutations({
			increment: "JIA",
			decrement: "JIAN",
		}),

		// 3.使用mapMutations生成对应方法，方法中调用commit(数组写法)
		// ...mapMutations(["JIA", "JIAN"]),

		/* -------------------------------------------- */

		// incrementOdd() {
		// 	if (this.$store.state.sum % 2 !== 0) {
		// 		this.$store.dispatch("jia", this.num * 1);
		// 	}
		// },
		// incrementWait() {
		// 	setTimeout(() => {
		// 		this.$store.dispatch("jia", this.num * 1);
		// 	}, 500);
		// },

		// 2.使用mapActions生成对应方法，方法中调用dispatch(对象写法)
		...mapActions({
			incrementOdd: "jia",
			incrementWait: "jia",
		}),
	},
};
</script>

<style>
button {
	margin-left: 5px;
}
</style>
