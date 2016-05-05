app.controller ('filterFormController', function($scope){

	$scope.slider = {};

	$scope.slider.budget = {
		min: 30,
		max: 50,
		options: {
			floor: 1,
			ceil: 100
		}
	};
});