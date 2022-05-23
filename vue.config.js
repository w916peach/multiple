module.exports = {
  devServer: {
    proxy: {
      //代理
      "/api": {
        //如果路径是/api开头的,就代理到下面的服务器
        target: "http://8.140.36.65:5006",
        ws: true,
        changeOrigin: true,
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("fork-ts-checker");
    config.module.rule("ts").use("babel-loader");
  },
};
