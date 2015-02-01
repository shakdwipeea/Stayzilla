angular.module('stayzilla',['ui.router'])

.config( function  ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home', {
			url:'/home',
			templateUrl:'/templates/home.ejs',
			controller:'HomeController'
		})		;
});