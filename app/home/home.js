var app = angular.module('firebaseApp.home',['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/home',{
		templateUrl: 'home/home.html',
		controller: 'homeCtrl'
	});
}]);
app.controller('homeCtrl', function($scope, $firebaseAuth, $location, Datos){
	$scope.username = Datos.getUser();
	$scope.IniciarSession = function(){
		var email = $scope.user.email;
		var password = $scope.user.password;
		var auth = $firebaseAuth();
		auth.$signInWithEmailAndPassword(email, password).then(function(){
			console.log('Usted ha iniciado session');
			Datos.setUser($scope.user.email);
			$location.path('/principal');
		}).catch(function(error){
			$scope.errMsg = true;
			$scope.MensajeError = 'Usuario y contracena no validas';
		});
	}
});
app.service('Datos',function($location){
	var user = "";
	return{
		getUser: function(){
			return user;
		},
		setUser: function(value){
			user = value;
			console.log(user);
		}
	}
})