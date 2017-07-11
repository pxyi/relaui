app.controller('alert', function($scope, $rootScope, $ajax, $timeout){
	$scope.prompt = function () {
		var text = $scope.promptInput || '这是默认提示内容';
		$scope.$emit('prompt', {text: text})
	}

	$scope.confirm = function () {
		var text = $scope.confirmInput || '这是默认提示内容';
		$scope.$emit('confirm', {text: text})
	}

	$scope.loading = function () {
		$scope.$emit('loading', true);
		$timeout(function () {
			$scope.$emit('loading', false);
		},2000)
	}

	$scope.textarea = function () {
		
	}
});