app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html',
			// controller: homeBase
		})
		.state('home.iconfont', {
			url: '/iconfont',
			templateUrl: 'views/icon_font.html',
			// controller: iconFont
		})
});