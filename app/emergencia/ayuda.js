var app = angular.module('firebaseApp.emergencia',['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/emergencia',{
		templateUrl: 'emergencia/ayuda.html',
		controller: 'emergenciaCtrl'
	});
}]);
app.controller('emergenciaCtrl', function($scope, $firebaseArray, $firebaseObject, Notification, Datos){
	$scope.username = Datos.getUser();
	var ref = firebase.database().ref().child('mapas');
	$scope.datosEstudiantes = $firebaseArray(ref);
	console.log($scope.datosEstudiantes)
	$scope.errorHtml = function(nombre, latitud, longitud) {
		console.log('<a href="#/mapas/'+latitud+'/'+longitud+'">Mirar Posicion</a>');
        Notification.error({
        	message: 'Paciente pidiendo ayuda:<br>Nombre: <b>'+ nombre +'</b><br><a href="#/mapas/'+latitud+'/'+longitud+'">Mirar Posicion</a><br><center><img src="img/auxi.jpg" width="270" height="270"></center><audio autoplay="autoplay"><source src="js/Sirens.mp3" type="audio/mpeg" /><embed hidden="true" autostart="true" loop="false" src="js/Sirens.mp3" /></audio>', 
        	title: '<h1>Emergencia!! <span class="glyphicon glyphicon-warning-sign"></span></h1>', 
        	delay: 10000
        });
    };
    $scope.cambiarValor = function(valorID){
    	var ref = firebase.database().ref().child('mapas/'+valorID);	
    	ref.update({
            estado: 0
          }).then(function(ref){
            console.log(ref);
          }, function(error){
            console.log(error);
          });
    }
});