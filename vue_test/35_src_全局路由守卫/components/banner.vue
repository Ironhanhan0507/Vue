<template>
	<div class="row">
		<div class="col-xs-offset-2 col-xs-8">
			<div class="page-header">
				<h2>Vue Router Demo</h2>
				<button @click="Back">后退</button>
				<button @click="Forward">前进</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MyBanner",
	methods: {
		Back() {
			// this.$router.go(-1);
			this.$router.back();
		},
		Forward() {
			// this.$router.go(1);
			this.$router.forward();
		},
	},
};
</script>

<style></style>
