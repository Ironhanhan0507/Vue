<template>
	<div class="container">
		<category titile="游戏">
			<template scope="props">
				<ol>
					<li v-for="(game, index) in props.games" :key="index">{{ game }}</li>
				</ol>
			</template>
		</category>
		<category titile="游戏">
			<template slot-scope="{ games }">
				<ol>
					<li style="color: red" v-for="(game, index) in games" :key="index">{{ game }}</li>
				</ol>
			</template>
		</category>
	</div>
</template>

<script>
import category from "./components/category.vue";

export default {
	components: { category },
	name: "App",
};
</script>

<style>
.container {
	display: flex;
	justify-content: space-around;
}
img {
	width: 100%;
}
vedio {
	width: 100%;
}
</style>
