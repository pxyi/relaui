var app = angular.module('relaui', ['ui.router']);

app.run(function ($rootScope, $state) {
	// $rootScope.loading = true;
	$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
		// if($('.ui-query').height() > 100){$('.ui-query-more').show();$('.ui-query').css('height', 100)}
		// $rootScope.loading = true;
		$rootScope.state = toState.name.split('.')[1];
		console.log($rootScope.state)
	});
})