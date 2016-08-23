module.exports = function (grunt) {

	var path = require('path'),
		config = require('load-grunt-config')(grunt, {
			config: {
				app: grunt.file.readJSON('config.json'),
				// banner: Helpers.banner(),
				// displayJasmine: Helpers.displayJasmine(grunt.option('short')),
				pkg: grunt.file.readJSON('package.json'),
			},
			configPath: path.join(process.cwd(), 'grunt'),
			init: false
		});

	// Time event
	require("time-grunt")(grunt, require('./logGruntTime'));

	grunt.registerTask('default', "Generate workout.js", [
		'clean:build',
		'webpack:workout',
		'copy:static',
		'notify:build_complete'
	]);

	grunt.initConfig(config);

};
