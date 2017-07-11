app.controller('details', function($scope, $rootScope, $ajax){
	$scope.upfiles = function () {
		console.log(1111)
	}
	$scope.upfile = function () {
		var params = {
			a: 1,
			b: 2,
			f: document.getElementById('upfile').files[0]
		}
		$ajax.upfile('xxxx', params, $scope)
	}
});