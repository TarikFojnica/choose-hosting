// configure our routes
app.config(function($routeProvider) {
	$routeProvider

		.when('/', {
			templateUrl : 'app/components/filter-form/filterFormView.html',
			controller  : 'filterFormController'
		})
});
