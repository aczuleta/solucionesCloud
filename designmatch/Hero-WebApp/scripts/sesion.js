'use strict';
/**
 * @ngdoc function
 * @name parte2App.controller:Controlador2Ctrl
 * @description
 * # Controlador2Ctrl
 * Controller of the parte2App
 */
angular.module('cloudApp')
  .controller('InicioSesionCtrl', function ($scope, $http) {
    
   $scope.nombreCompania = "";
   $scope.emailCompania = "";
   $scope.contraCompania = "";
   $scope.companiaActual = {};
   $scope.companias = [];
   $scope.usuarioInexistente = false;
    
   $scope.iniciaSesion = function($window){
       $scope.usuarioInexistente = false;
       $http.get("https://cloud-project-backend.herokuapp.com/companies.json")
       .then(function (response) {
        var data = response.data;
        var status = response.status;
        var statusText = response.statusText;
        var headers = response.headers;
        var config = response.config;
        $scope.companias = data;
        console.log($scope.companias);
        for(var i = 0; i<$scope.companias.length;i++)
        {
           $scope.companiaActual = $scope.companias[i];
            if($scope.companiaActual.email == $scope.emailCompania 
              && $scope.contraCompania == $scope.companiaActual.password)
            {    
                $scope.usuarioInexistente = false;
                 localStorage.setItem("companiaActualId", $scope.companiaActual.id);
                 if(window.location.port){
                    window.alert("verga");
                    window.location = "http://" + window.location.hostname + ":" + window.location.port + "/Hero-WebApp/proyectos.html";
                }
                
                else{
                    window.alert("coño");
                    window.location = "http://" + window.location.hostname + "/Hero-WebApp/proyectos.html";
                }      
            }
            
            if(i == $scope.companias.length - 1)
            {
                $scope.usuarioInexistente = true;
            }
            
            console.log($scope.usuarioInexistente);
        }
        
           
       }) 
       }
    

  });
