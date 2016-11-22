var app = angular.module('firebaseApp.principal',['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/principal',{
		templateUrl: 'principal/principal.html',
		controller: 'principalCtrl'
	});
}]);
app.controller('principalCtrl', function($scope, $firebaseArray, Notification, Datos){
		$scope.username = Datos.getUser();
});