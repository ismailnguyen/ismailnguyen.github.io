var path = require('path');

module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  },
  filenameHashing: false,
  pages: {
    bundle: {
      entry: 'src/main.js'
    } 
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: true,
    port: 9000,
    index: '/index.html'
  }
}