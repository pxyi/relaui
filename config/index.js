var app = angular.module('relaui', ['ui.router']);

app.run(function ($rootScope, $state) {
	/* 
 	 *	设置请求地址的 主机名及端口号
	 */
	$rootScope.domain = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;
	/*
	 *	ui-router 状态发生改变时，$rootscope 键值改变
	 */
	$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
		$rootScope.stateParent = toState.name.split('.')[1];
		$rootScope.state = toState.name.split('.')[2];
	});
})