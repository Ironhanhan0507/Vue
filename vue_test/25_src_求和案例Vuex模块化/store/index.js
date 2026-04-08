// 该文件用于创建Vuex中最为核心的store
import Vuex from "vuex";
import Vue from "vue";

import countOptions from "./count";
import personOptions from "./person";
// 使用Vuex插件
Vue.use(Vuex);

// 4.创建并暴露store
export default new Vuex.Store({
	modules: {
		countAbout: countOptions,
		personAbout: personOptions,
	},
});
