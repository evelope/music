/**
 * Module dependencies.
 */
var express = require('express')
var proxy = require('http-proxy-middleware');
var path = require('path');
var port = 5555;
/**
 * Configure proxy middleware
 */


var musicProxy = proxy({
  target: 'https://api.bzqll.com',
  changeOrigin: true,
  ws: true,
  // pathRewrite: {
  //   '^/api/app': ''
  // },
  proxyTimeout: 60000, //连接超时时间
})


var app = express();
//设置静态文件目录
app.use(express.static(path.join(__dirname, './dist')));
/**
 * Add the proxy to express
 */
app.use('/music', musicProxy); //匹配api下的进行代理


app.listen(port || 5555); //开启端口

console.log('start success');
