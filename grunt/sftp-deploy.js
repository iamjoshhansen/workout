module.exports = {
	iamjoshhansen: {
		auth: {
			host: 'joshandchristi.com',
			port: 22,
			authKey: "iamjoshhansen"
		},
		cache: false,
		src: '<%= app.build_dir %>',
		dest: '/iamjoshhansen/training/',
		exclusions: [
			'<%= app.build_dir %>**/.DS_Store',
			'<%= app.build_dir %>**/Thumbs.db'
		],
		serverSep: '/',
		concurrency: 4,
		progress: true
	}
};
