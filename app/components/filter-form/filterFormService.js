app.factory('Data', function () {
	return {
		getHostingTypes: function() {
			var hostingTypes = [
				'Shared',
				'VPS',
				'Dedicated',
				'Wordpress',
				'I don\'t know'
			];
			return hostingTypes;
		}
	};
});