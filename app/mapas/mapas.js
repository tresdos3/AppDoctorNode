var app = angular.module('firebaseApp.mapas',['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/mapas/:IDL/:IDLo',{
		templateUrl: 'mapas/mapas.html',
		controller: 'mapasCtrl'
	});
}]);
app.controller('mapasCtrl', function($scope, $routeParams, Datos){
	$scope.username = Datos.getUser();
	$scope.ID = $routeParams.IDL;
	$scope.UD = $routeParams.IDLo;
	var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: parseFloat($scope.ID), lng: parseFloat($scope.UD)},
          scrollwheel: false,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
	var infoWindow = new google.maps.InfoWindow({map: map});
	var marker = new google.maps.Marker({
          map: map,
          position: {lat: parseFloat($scope.ID), lng: parseFloat($scope.UD)},
          title: 'El enfermo esta aki !!!!'
        });
});