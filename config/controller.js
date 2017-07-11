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
		$scope.promptText = data.text;
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
	 *	$scope.$emit('confirm', Options);
	 *		Options: Object  => text: string => 描述
	 *
	 *	点击确定按钮，向下抛出 confirm 事件
	 */
	$scope.$on('confirm', function (e, data) {
		$scope.confirmText = data ? data.text : '确定删除此条数据吗？';
	 	$scope.confirm = true;
	});
	$scope.determine = function () {
		$scope.$broadcast('confirmTrue');
		$scope.confirm = false;
	}
});
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
app.controller('editor', function($scope, $rootScope){
	
});
app.controller('list', function($scope, $rootScope, $ajax){
	// $ajax.get($rootScope.domain + '/json/list.json', {}).then(function (res) {
	// 	console.log(res)
	// }, function (e) {
	// 	console.log(e)
	// })
});
app.controller('login', function($scope, $rootScope, $ajax){
	// $ajax.get($rootScope.domain + '/json/list.json', {}).then(function (res) {
	// 	console.log(res)
	// }, function (e) {
	// 	console.log(e)
	// })
});
app.controller('pagination', function($scope, $rootScope, $ajax){
	
});
app.controller('welcome', function($scope, $rootScope, $ajax){
	// $ajax.get($rootScope.domain + '/json/list.json', {}).then(function (res) {
	// 	console.log(res)
	// }, function (e) {
	// 	console.log(e)
	// })
});