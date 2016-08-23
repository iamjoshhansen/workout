$(function () {
	
	var $body = $('body');

	// content
	$body.html(require('./content.html'));
	var $content = $('#content');

	// loading indicator
	var $loading = $(require('./loading.html'));
	$loading.appendTo($content);

	var dbs = ['pushups', 'situps', 'plank'],
		db_dfrs = [],
		today = (function () {

			var now = new Date(),
				year = now.getFullYear(),
				month = _.padLeft(now.getMonth()+1, 2, '0'),
				date = _.padLeft(now.getDate(), 2, '0');

			return year + '-' + month + '-' + date;

		})();


	_.forEach(dbs, function (db) {
		$content.append('<section id="db-' + db + '"></section>');

		var dfr = $.ajax({
				url: 'http://iamjoshhansen.com/services/simple-db/get.php?db=' + db,
				dataType: 'jsonp'
			})
			.done(function (response) {
				$div = $('#db-' + db);

				var total = 0,
					rows = [];
				_.forEach(response, function (row) {
					if (row.date == today) {
						total += row.data;
						rows.push(row);
					}
				});

				rows = _.map(rows, function (row) {
						var date = new Date(today.replace(/-/g,'/') + ' ' + row.time + ' GMT-0400');
						return _.template('{{hours}}:{{minutes}} {{am_pm}} - {{amount}}')({
							hours: _.padLeft((((date.getHours()-1)%12) + 1), 2, '0'),
							minutes: _.padLeft(date.getMinutes(), 2, '0'),
							am_pm: (date.getHours() < 12) ? 'AM' : 'PM',
							amount: _.padLeft(row.data, 3, '_')
						}).replace(/_/g,'&nbsp;');
					});

				$div
					.append('<h2>' + _.capitalize(db) + ': ' + total + '</h2>')
					.append('<a href="javascript:;" data-action="add-row" data-db="' + db + '">Add more ' + db + '</a>')
					.append('<ul class="inline"><li>' + rows.join('</li><li>') + '</li></ul>');
			})
			.fail(function (er) {
				$('#db-' + db).append('failed to load pushups');
			});

		db_dfrs.push(dfr);
	});


	$.when.apply($, db_dfrs)
		.done(function () {
			$loading.remove();
		});





	var actions = {
			"add-row": function (ev) {
				var $this = $(this),
					db = $this.data('db');

				if (db) {
					
					var amount = prompt('Amount', '20');
					if (amount) {
						$.ajax({
								url: 'http://iamjoshhansen.com/services/simple-db/?db=' + db + '&data=' + amount,
								dataType: 'jsonp'
							})
							.done(function () {
								window.location = window.location;
							})
							.fail(function (er) {
								console.warn('Failed to add `' + amount + '` to `' + db + '`');
							});
					}

				} else {
					console.warn('add-row clicked, but no `db` found.');
				}
			}
		};


	$body
		.on('click', function (ev) {
			var action = $(ev.target).data('action');
			if (action) {
				if (action in actions) {
					actions[action].call(ev.target, ev);
				} else {
					console.warn('Action `' + action +'` is not known.');
				}
			}
		});


});
