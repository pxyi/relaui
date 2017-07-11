app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home/welcome');
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html'
		})
		.state('home.welcome', {
			url: '/welcome',
			templateUrl: 'views/welcome.html',
			controller: 'welcome'
		})
		.state('login', {
			url: '/login',
			templateUrl: 'views/login.html',
			controller: 'login'
		})
		.state('home.comp', {
			url: '/comp',
			template: '<div ui-view></div>'
		})
		.state('home.comp.iconfont', {
			url: '/iconfont',
			templateUrl: 'views/components/font.html',
		})
		.state('home.comp.button', {
			url: '/button',
			templateUrl: 'views/components/button.html',
		})
		.state('home.comp.form', {
			url: '/form',
			templateUrl: 'views/components/form.html',
		})
		.state('home.comp.tables', {
			url: '/tables',
			templateUrl: 'views/components/tables.html',
		})
		.state('home.comp.tabs', {
			url: '/tabs',
			templateUrl: 'views/components/tabs.html',
		})
		.state('home.comp.loading', {
			url: '/loading',
			templateUrl: 'views/components/loading.html',
		})
		.state('home.comp.title', {
			url: '/title',
			templateUrl: 'views/components/title.html',
		})
		.state('home.comp.alert', {
			url: '/alert',
			templateUrl: 'views/components/alert.html',
			controller: 'alert'
		})
		.state('home.comp.editor', {
			url: '/editor',
			templateUrl: 'views/components/editor.html',
			controller: 'editor'
		})
		.state('home.comp.pagination', {
			url: '/pagination',
			templateUrl: 'views/components/pagination.html',
			controller: 'pagination'
		})
		.state('home.demo', {
			url: '/demo',
			template: '<div ui-view></div>',
		})
		.state('home.demo.list', {
			url: '/list',
			templateUrl: 'views/demo/list.html',
			controller: 'list'
		})
		.state('home.demo.details', {
			url: '/details',
			templateUrl: 'views/demo/details.html',
			controller: 'details'
		})
});