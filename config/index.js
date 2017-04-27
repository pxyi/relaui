var app = angular.module('relaui', ['ui.router']);

app.run(function ($rootScope, $state) {
	$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {

	});
})