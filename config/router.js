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
			templateUrl: 'views/font.html',
			// controller: iconFont
		})
		.state('home.button', {
			url: '/button',
			templateUrl: 'views/button.html',
			// controller: iconFont
		})
		.state('home.form', {
			url: '/form',
			templateUrl: 'views/form.html',
			// controller: iconFont
		})
		.state('home.tables', {
			url: '/tables',
			templateUrl: 'views/tables.html',
			// controller: iconFont
		})
		.state('home.tabs', {
			url: '/tabs',
			templateUrl: 'views/tabs.html',
			// controller: iconFont
		})
		.state('home.loading', {
			url: '/loading',
			templateUrl: 'views/loading.html',
			// controller: iconFont
		})
		.state('home.title', {
			url: '/title',
			templateUrl: 'views/title.html',
			// controller: iconFont
		})
});