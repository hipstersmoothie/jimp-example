
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = (options) => {
  return {
    mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  
    plugins: [
      new HTMLWebpackPlugin({
        template: 'src/index.html'
      })
    ]
  }
}