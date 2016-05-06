app.controller ('filterFormController', function($scope, Data){
	//initialize hosting object
	$scope.hosting = {};

	$scope.hostingTypes = Data.getHostingTypes();
	$scope.hosting.type = $scope.hostingTypes[0];

	$scope.hosting.budget = {
		min: 5,
		max: 20,
		options: {
			floor: 0,
			ceil: 200,
			translate: function(value) {
				return '$' + value;
			}
		}
	};

	$scope.hosting.bandwidth = 'unlimited';

	$scope.hosting.webspace = {
		min: 10,
		options: {
			floor: 1,
			ceil: 300
		}
	};

	$scope.hosting.numberOfWebsites = {
		min: 1,
		options: {
			floor: 1,
			ceil: 10
		}
	};

	$scope.hosting.ram = {
		min: 1,
		options: {
			floor: 0,
			stepsArray: [0.256, 0.512, 1, 2, 4, 8]
		}
	}

	$scope.hosting.cpu = {
		min: 2,
		options: {
			floor: 1,
			ceil: 8
		}
	}
});