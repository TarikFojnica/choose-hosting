app.factory('Data', function ($http, $q) {
	return {
		getHostingTypes: function() {
			var hostingTypes = [
				{
					'name': 'Shared', 'call': 'shared'
				},

				{
					'name': 'VPS', 'call': 'vps'
				},

				{
					'name': 'Wordpress', 'call': 'wordpress'
				},

				{
					'name': 'Not Sure', 'call': 'shared'
				}
			];
			return hostingTypes;
		},

		getHostingResults: function(dataSource) {
			return $http.get('/choose-hosting/data/' + dataSource + '.json')
				.then(function(response) {
					if (typeof response.data === 'object') {
						return response.data;
					} else {
						// invalid response
						return $q.reject(response.data);
					}

				}, function(response) {
					// something went wrong
					return $q.reject(response.data);
				});
		}
	};
});