app.controller ('filterFormController', function($scope, Data, _){
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

	$scope.hosting.bandwidth = {
		min: 10,
		options: {
			floor: 1,
			ceil: 1000
		}
	};

	$scope.hosting.diskSpace = {
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
			stepsArray: [256, 512, 1, 2, 4, 8, 16],
		}
	};
	watchRam();

	$scope.hosting.cpu = {
		min: 2,
		options: {
			floor: 1,
			ceil: 8
		}
	};

	function watchRam() {
		$scope.$watch('hosting.ram.min', function() {
			switch ($scope.hosting.ram.min) {
				case 0:
					$scope.hosting.ram.final = 256;
					break;

				case 1:
					$scope.hosting.ram.final = 512;
					break;

				case 2:
					$scope.hosting.ram.final = 1;
					break;

				case 3:
					$scope.hosting.ram.final = 2;
					break;

				case 4:
					$scope.hosting.ram.final = 4;
					break;

				case 5:
					$scope.hosting.ram.final = 8;
					break;

				case 6:
					$scope.hosting.ram.final = 16;
					break;
			}
		});
	}

	$scope.getData = function () {
		Data.getHostingResults($scope.hosting.type.call)
		.then(function(data) {
				console.log("All the data" + data);
				if ($scope.hosting.type.call === 'shared') {
					$scope.results = _.filter(data, function(data){
						return (
						data.price <= $scope.hosting.budget.max
						&& data.bandwidth >= $scope.hosting.bandwidth.min
 						);
					});
				}

				else if ($scope.hosting.type.call === 'vps') {

				}

				else if ($scope.hosting.type.call === 'wordpress') {

				}

				console.log("Filtered data" + $scope.results);

			}, function(error) {
				console.log('One big error' + error)
			});
		}
});