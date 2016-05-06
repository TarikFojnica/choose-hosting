app.factory('Data', function () {
	return {
		getHostingTypes: function() {
			var hostingTypes = [
				'Shared',
				'VPS',
				'Wordpress',
				'Not Sure'
			];
			return hostingTypes;
		}
	};
});