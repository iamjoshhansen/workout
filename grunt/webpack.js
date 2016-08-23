var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	workout: {
		entry: './<%= app.source_dir %>/<%= app.name %>.js',
		output: {
			path: '<%= app.build_dir %>',
            filename: '<%= app.name %>.js'
		},
		module: {
			loaders: [
				{ test: /\.html$/, loaders: ['html'] },
				{ test: /\.json$/, loaders: ['json'] },
				{ test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') }
			]
		},
		plugins: [
			new ExtractTextPlugin('<%= app.name %>.css')
		]
	}
};
