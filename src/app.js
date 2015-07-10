var app = angular.module('app', [
      'ui.router', 
      'ui.bootstrap', 
      'ui.bootstrap.tpls', 
      'ui.select',
      'ngAnimate', 
      'templates',
      'localStorage'  
]);

var moduleLoader = 'partials/module-load.html';

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
	function AppConfig($stateProvider, $urlRouterProvider, $locationProvider, $futureStateProvider) {
	$stateProvider
		.state('team', 
			{ url: '/team',
			templateUrl: moduleLoader })
			.state('team.roster', 
				{ url: '/roster',
				controller: 'RosterCtrl',
				templateUrl: 'team/roster.html' });
	$urlRouterProvider.otherwise('/team/roster');
}]);

app.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
}]);

app.controller('AppCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state) {
	$rootScope.contentLoaded = true;
	$scope.currentAppString = $rootScope.startLocation;
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
	    if (toState.name === 'team' ){
			$state.go('team.roster');
	    }
	});
	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
	    $scope.currentAppString = toState.name.split(".")[0];
	});
	$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams) {
	    $scope.currentAppString = toState.name.split(".")[0];
	});
	$rootScope.updateCurrentTeam = function(i) {
		$rootScope.currentTeam = $rootScope.teams[i];
	};
}]);