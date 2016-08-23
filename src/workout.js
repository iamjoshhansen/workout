// Lorem ipsum

var workout = {};

window.workout = workout;
// module.exports = workout;

/*	Make lodash templates use mustache style
------------------------------------------*/
	_.templateSettings = {
		evaluate:    /\{\[([\s\S]+?)\]\}/g,
		interpolate: /{{([\s\S]+?)}}/g,
		escape:      /{{{([\s\S]+?)}}}/g
	};

workout.VERSION = _.template('{{major}}.{{minor}}.{{patch}}')(require('./version.json'));

require('./workout.scss');

require('./js/start.js');
