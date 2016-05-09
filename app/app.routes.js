// configure our routes
app.config(function($routeProvider) {
	$routeProvider

		.when('/', {
			templateUrl : 'app/components/filter-form/filterFormView.html',
			controller  : 'filterFormController'
		})

		.when('/results', {
			templateUrl : 'app/components/results/resultsView.html',
			controller  : 'resultsController'
		})

		.otherwise('/');
});
