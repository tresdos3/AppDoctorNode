var app = angular.module('firebaseApp',[
	'firebase', 
	'ui-notification',
	'ngRoute',
	'firebaseApp.home',
	'firebaseApp.emergencia',
	'firebaseApp.principal',
	'firebaseApp.mapas']);
app.config(['$locationProvider','$routeProvider',function($locationProvider, $routeProvider){ 
	$routeProvider.otherwise({
		redirectTo: '/home'
	});
}]);
// app.controller('MiPrueba', function($scope, $firebaseArray, Notification){
// 	var ref = firebase.database().ref().child('mapas');
// 	$scope.datosEstudiantes = $firebaseArray(ref);
// 	console.log($scope.datosEstudiantes)
// 	 $scope.errorHtml = function() {
//                     Notification.error({message: 'Success notification<br>Some other <b>content</b><br><a href="https://github.com/alexcrack/angular-ui-notification">This is a link</a><br><img src="https://angularjs.org/img/AngularJS-small.png"><audio autoplay="autoplay"><source src="js/Sirens.mp3" type="audio/mpeg" /><embed hidden="true" autostart="true" loop="false" src="js/Sirens.mp3" /></audio>', title: 'Html content', delay: 10000});
//                 };
// });
