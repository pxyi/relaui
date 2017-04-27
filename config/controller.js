app.controller('viewBase', function($scope){
	// $scope.confirm = true;
	$scope.$on('loading', function (data) {
		$scope.loading = data.toggle ? true : false;
	});
	$scope.$on('confirm', function (data) {
		$scope.confirm = data.toggle ? true : false;
	});
});

/**
 * confirm 可能出现的场景
 * 		1、提示
 *  	
 *  	2、确认删除
 *  	
 *  	3、input/textarea输入框
 *  	
 */