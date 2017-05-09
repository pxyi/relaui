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
			templateUrl: 'views/components/font.html',
			// controller: iconFont
		})
		.state('home.button', {
			url: '/button',
			templateUrl: 'views/components/button.html',
			// controller: iconFont
		})
		.state('home.form', {
			url: '/form',
			templateUrl: 'views/components/form.html',
			// controller: iconFont
		})
		.state('home.tables', {
			url: '/tables',
			templateUrl: 'views/components/tables.html',
			// controller: iconFont
		})
		.state('home.tabs', {
			url: '/tabs',
			templateUrl: 'views/components/tabs.html',
			// controller: iconFont
		})
		.state('home.loading', {
			url: '/loading',
			templateUrl: 'views/components/loading.html',
			// controller: iconFont
		})
		.state('home.title', {
			url: '/title',
			templateUrl: 'views/components/title.html',
			// controller: iconFont
		})
		.state('home.list', {
			url: '/list',
			templateUrl: 'views/demo/list.html',
			controller: 'list'
		})
		.state('home.test', {
			url: '/test',
			templateUrl: 'views/demo/test.html',
			controller: 'test'
		})
});