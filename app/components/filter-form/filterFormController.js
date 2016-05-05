app.controller ('filterFormController', function($scope, Data){
	$scope.hosting = {};

	$scope.hosting.budget = {
		min: 5,
		max: 20,
		options: {
			floor: 0,
			ceil: 100
		}
	};

	$scope.hosting.bandwidth = 'unlimited';

	$scope.hostingTypes = Data.getHostingTypes();
});