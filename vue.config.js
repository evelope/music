const path = require('path');
module.exports = {
  publicPath: './',
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        path.resolve(__dirname, './src/assets/css-less/shipei.less')
      ]
    }
  }
}
