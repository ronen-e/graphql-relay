const path = require('path');

module.exports = {
	mode: "development",
	entry: ['whatwg-fetch', path.resolve(__dirname, 'src', 'index.js')],
	module: {
		rules: [
			{
				test: /\.m?jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						"presets": ["@babel/preset-env", "@babel/preset-react"],
						"plugins": ["relay", "@babel/plugin-transform-runtime"]
					}
				}
			}
		]
	},
	output: {
		filename: 'App.js',
		path: path.resolve(__dirname, 'public'),
		publicPath: '/src/'
	},
	devtool: "source-map",
	devServer: {
		hot: true,
		contentBase: path.join(__dirname, 'public'),
		watchContentBase: true,
		proxy: { '/graphql': `http://localhost:3000` },
		publicPath: '/src/',
		stats: { colors: true },
	}
}
