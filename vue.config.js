const { defineConfig } = require("@vue/cli-service");
// const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

// const VueLoaderPlugin = require("vue-loader-plugin");
module.exports = defineConfig({
  lintOnSave: false,

  // 1.配置方式一: CLI提供的属性
  // outputDir: "./build",
  // publicPath: './',
  // devServer: {
  //   proxy: {
  //     "^/api": {
  //       target: "http://152.136.185.210:5000",
  //       pathRewrite: {
  //         "^/api": "",
  //       },
  //       changeOrigin: true,
  //     },
  //   },
  // },
  transpileDependencies: true,
  // devServer: {
  //   host: "128.0.0.1",
  //   port: 8080,
  //   client: {
  //     webSocketURL: "ws://192.168.0.103:8080/ws",
  //   },
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //   },
  // },
  configureWebpack: () => {
    return {
      plugins: [
        new NodePolyfillPlugin(),
        // new VueLoaderPlugin({
        //   // staticDir: path.join(__dirname, "dist"),
        // }),
      ],
      resolve: {
        fallback: {
          fs: false,
          crypto: require.resolve("crypto-browserify"),
        },
      },
      module: {
        //这个节点用于配置所有的第三方模块加载器
        rules: [
          // { test: /\.css$/, use: ["style-loader", "css-loader"] }, //配置处理.css文件的第三方处理规则
          // { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
          // { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
          // { test: /\.vue$/, use: "vue-loader" },
        ],
      },
    };
  },
});
