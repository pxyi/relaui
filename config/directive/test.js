app.directive('test', function () {
	return {
		restrict: 'EA',
		templateUrl: 'config/directive/directiveView/test.html',
		replace: true,
		scope: {
			details: '='
		},
		controller: function ($scope) {
			$scope.details = $scope.details ? $scope.details : {}
			$scope.details.ccc = function () {
				console.log(111)
			}
		},
		link: function () {

		}
	} 
})