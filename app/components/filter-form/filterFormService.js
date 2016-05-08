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
		},

		getHostingResults: function(type) {
			if (type === 'VPS') {
				console.log('It\'s VPS')
			}

			else if (type === 'Shared') {
				console.log('It\'s Shared')
			}

			else if (type === 'Wordpress') {
				console.log('It\'s Wordpress')
			}

			else if (type === 'Not Sure') {
				console.log('It\'s not sure')
			}

			else {
				console.log('We have an error :/');
			}
		}
	};
});