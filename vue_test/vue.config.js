const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	// 开启代理服务器(方式1)
	// devServer: {
	// 	proxy: "http://localhost:5000",
	// },

	// 开启代理服务器(方式2)
	devServer: {
		proxy: {
			// 请求前缀：当请求地址以/api开头时,就会触发代理机制,将请求转发到目标服务器
			"/api": {
				target: "http://localhost:5000",
				pathRewrite: { "^/api": "" }, //重写请求路径:将请求前缀/api替换为一个空字符串
			},
			"/demo": {
				target: "http://localhost:5001",
				pathRewrite: { "^/demo": "" },
			},
		},
	},
});
