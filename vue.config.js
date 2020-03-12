var path = require('path');
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
	plugins: [
		new RemovePlugin({
			after: {
				include: [
					'./dist/bundle.html'
				]
			}
		})
	]
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