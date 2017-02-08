var app = angular.module("ComputerApp1", ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/main', {
			templateUrl: 'main.html',
			controller: 'MainCtrl'
		});
}])

.controller("MainCtrl", [function(){
	console.log("this is the main controller");
}]);

