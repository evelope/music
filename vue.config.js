const path = require('path');
module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/music': {    //将www.exaple.com印射为/apis
        target: 'https://api.bzqll.com',  // 接口域名
        secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true,  //是否跨域
        // pathRewrite: {
        //   '^/api': ''   //需要rewrite的,
        // }
      }
    }
  },
  chainWebpack: config => {
    config.plugins.delete("prefetch");
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        path.resolve(__dirname, './src/assets/css-less/shipei.less')
      ]
    }
  }
}
