app.controller ('filterFormController', function($scope, Data){
	//initialize hosting object
	$scope.hosting = {};

	$scope.hostingTypes = Data.getHostingTypes();

	$scope.hosting.budget = {
		min: 5,
		max: 20,
		options: {
			floor: 0,
			ceil: 100
		}
	};

	$scope.hosting.bandwidth = 'unlimited';

	$scope.hosting.webspace = {
		min: 10,
		options: {
			floor: 0,
			ceil: 100
		}
	}
});