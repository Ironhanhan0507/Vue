export default {
	install(Vue) {
		console.log("install");
		console.log(Vue);
		// 全局过滤器
		Vue.filter("filter", function (value) {
			return value.slice(0, 4);
		}),
			// 全局指令
			Vue.directive("focus", {
				inserted(el) {
					el.focus();
				},
			});
		// 混入
		Vue.mixin({
			data() {
				return {
					x: 100,
					y: 200,
				};
			},
		});
		//给Vue原型上添加方法
		Vue.prototype.hello = () => {
			alert("hello");
		};
	},
};
