var app = angular.module('relaui', ['ui.router']);

app.run(function ($rootScope, $state) {
	/* 
 	 *	设置请求地址的 主机名及端口号
	 */
	$rootScope.domain = window.location.hostname + ':' + window.location.port;
	$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
		$rootScope.state = toState.name.split('.')[1];
	});
	/*
	 *	页面渲染完毕，判断是否需要将查询条件隐藏
	 */
	$rootScope.$on('$viewContentLoaded', function(event){
		if(document.querySelectorAll('.ui-query-box')){
			relaui.queryMore();
		}
	});
})