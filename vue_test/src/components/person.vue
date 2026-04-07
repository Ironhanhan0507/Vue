<template>
	<div>
		<h1>人员列表</h1>
		<h3>上方组件的求和是：{{ sum }}</h3>
		<h3>列表中第一个人的名字是：{{ firstPersonName }}</h3>
		<input type="text" placeholder="请输入名字" v-model="name" />
		<button @click="add">添加</button>
		<button @click="addWang">添加王姓人员</button>
		<button @click="addServer">添加随机人员</button>
		<ul>
			<li v-for="p in personList" :key="p.id">{{ p.id }} - {{ p.name }}</li>
		</ul>
	</div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
	name: "Perso-n",
	data() {
		return {
			name: "",
		};
	},
	methods: {
		add() {
			const personObj = { id: nanoid(), name: this.name };
			this.$store.commit("personAbout/ADD_PERSON", personObj);
			this.name = "";
		},
		addWang() {
			const personObj = { id: nanoid(), name: this.name };
			this.$store.dispatch("personAbout/addPersonWang", personObj);
			this.name = "";
		},
		addServer() {
			this.$store.dispatch("personAbout/addPersonServer");
		},
	},
	computed: {
		personList() {
			return this.$store.state.personAbout.personList;
		},
		sum() {
			return this.$store.state.countAbout.sum;
		},
		firstPersonName() {
			// return this.$store.state.personAbout.personList[0].name;
			return this.$store.getters["personAbout/firstPersonName"];
		},
	},
};
</script>

<style></style>
