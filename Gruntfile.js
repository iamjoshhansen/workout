module.exports = function (grunt) {

	var config = {
			pkg: grunt.file.readJSON('package.json')
		};


	/*	Templates
	------------------------------------------*/
		/*
		grunt.registerTask('templates', function () {

			var templates = {},
				files = grunt.file.expand('src/templates/*'),
				len = files.length,
				filepath, key;

			for (var i=0; i<len; i++) {
				filepath = files[i];
				key = filepath.substring(filepath.lastIndexOf('/') + 1, filepath.length - 5);
				templates[key] = grunt.file.read(filepath);
			}

			var js = 'var templates = ' + JSON.stringify(templates, null, 4) + ';\n',
				dest = 'build/js/templates.js';

			grunt.file.write(dest, js);

			console.log('Generated `' + dest + '`');

		});
		*/

	var ExtractTextPlugin = require("extract-text-webpack-plugin");

	config.webpack = {
		workout: {
			entry: './src/workout.js',
			output: {
				path: './build/',
				filename: 'workout.js'
			},
			module: {
				loaders: [
					{ test: /\.html$/, loaders: ['html'] },
					{ test: /\.json$/, loaders: ['json'] },
					{ test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') }
				]
			},
			plugins: [
				new ExtractTextPlugin('workout.css')
			]
		}
	};

	grunt.loadNpmTasks('grunt-webpack');

	grunt.registerTask('default', "Generate workout.js", [
		'webpack:workout'
	]);

	grunt.initConfig(config);

};
