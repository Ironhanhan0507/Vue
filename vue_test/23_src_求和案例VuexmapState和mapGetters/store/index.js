// 该文件用于创建Vuex中最为核心的store
import Vuex from "vuex";
import Vue from "vue";
// 使用Vuex插件
Vue.use(Vuex);
// 1.准备actions——用于响应组件中的动作
const actions = {
	// jia能收到两个参数 context和value
	// context：actions 里的迷你版 store，Vuex 自动传给你的
	jia(context, value) {
		console.log("action中的jia被调用了", context, value);
		context.commit("JIA", value);
	},
	jian(context, value) {
		// console.log("action中的jian被调用了", context, value);
		context.commit("JIAN", value);
	},
};

// 2.准备mutations——用于操作数据（state）
const mutations = {
	// JIA能收到两个参数 state和value
	// state：mutations 里的数据源对象，也是 Vuex 自动传给你的
	JIA(state, value) {
		console.log("mutations中的JIA被调用了", state, value);
		state.sum += value;
	},
	JIAN(state, value) {
		// console.log("mutations中的JIAN被调用了", state, value);
		state.sum -= value;
	},
};

// 3.准备state——用于存储数据
const state = {
	sum: 0, //当前求和的结果
	shcool: "北京大学",
	subject: "计算机",
};

// 4.准备getters——用于将state中的数据进行加工
const getters = {
	// 这里的state是当前store中的state，不是全局的state
	bigSum(state) {
		return state.sum * 10;
	},
};

// 4.创建并暴露store
export default new Vuex.Store({
	actions,
	mutations,
	getters,
	state,
});
