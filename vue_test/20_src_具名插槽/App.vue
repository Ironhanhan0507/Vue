<template>
	<div class="container">
		<category titile="美食" :listData="foods">
			<img src="https://s3.ax1x.com/2021/01/16/srJlqo.jpg" slot="content" />
			<a href="https://www.meituan.com" slot="footer">更多美食</a>
		</category>
		<category titile="游戏" :listData="games">
			<ul slot="content">
				<li v-for="(game, index) in games" :key="index">{{ game }}</li>
			</ul>
			<a href="https://www.4399.com" slot="footer">更多游戏</a>
		</category>
		<category titile="电影" :listData="films">
			<vedio src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls slot="content"></vedio>
		</category>
	</div>
</template>

<script>
import category from "./components/category.vue";

export default {
	components: { category },
	name: "App",
	data() {
		return {
			foods: ["火锅", "烧烤", "小龙虾"],
			games: ["红色警戒", "穿越火线", "劲舞团"],
			films: ["《教父》", "《拆弹专家》", "《你好，李焕英》"],
		};
	},
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
