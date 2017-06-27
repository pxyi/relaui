app.controller('appController', function($scope, $rootScope, $state, $ajax){
	/**
	 *	页面加载完毕 loading 隐藏
	 */
	$scope.$on('$viewContentLoaded', function (event) {
		$rootScope.loading = false;
		/**
		 *	页面渲染完毕，判断是否需要将查询条件隐藏
		 */
		if(document.querySelectorAll('.ui-query-box')){
			relaui.queryMore();
		}
	})

	/** 
	 *	控制 loading 事件
	 *	$scope.$emit('loading', blen) 
	 *  	blen: true   ---- 显示 loading
	 *  	blen: false  ---- 隐藏 loading
	 */
	$scope.$on('loading', function (e, data) {
		$scope.loading = data;
	});

	/** 
	 *	控制 prompt 事件
	 *	$scope.$emit('loading', obj)
	 *	
	 *	obj 参数  
	 *		1、text   -- 提示内容
	 *		2、href   -- 提示结束后 需要跳转的地址
	 *		3、params -- 跳转地址附带的参数
	 *
	 *	例： $scope.$emit('prompt', {text:'操作成功', href: 'list', params: {id: 1234, type: 'add'}})
	 *
	 */
	$scope.$on('prompt', function (e, data) {
		$scope.promptBlen = true;
		$scope.href = data.href;
		$scope.params = data.params;
	});
	/**
	 *	点击按钮是否跳转
	 */
	$scope.iKnow = function () {
		if($scope.href){
			$state.go($scope.href, $scope.params);
		}
		$scope.promptBlen = false;
	}

	/**
	 *	控制 confirm 事件
	 *	$scope.$emit('confirm');
	 *
	 *	点击确定按钮，向下抛出 confirm 事件
	 */
	$scope.$on('confirm', function (e, data) {
	 	$scope.confirm = true;
	});
	$scope.determine = function () {
		$scope.$broadcast('confirm');
		$scope.confirm = false;
	}
});