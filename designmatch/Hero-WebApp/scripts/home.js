'use strict';
/**
 * @ngdoc function
 * @name parte2App.controller:Controlador2Ctrl
 * @description
 * # Controlador2Ctrl
 * Controller of the parte2App
 */
angular.module('cloudApp')
  .controller('HomeCtrl', function ($scope, $http) {
    $scope.posts = [];    
    $scope.buscarTutores = function(){
        $scope.materiaBuscada = $scope.materiaBuscada.toUpperCase();
        $scope.materiaBuscada = $scope.materiaBuscada.trim();
        $scope.monitoresresultado = [];
        $scope.contadorResultados = 0;
        $scope.resultadosRandom=[];
        $scope.random1 = {};
        $scope.watachi=false;
        $scope.monithor=false;
        $http.get("http://localhost:9000/estudiantes")
        .success(function(data){
            
        })
        
        .error(function(error){
            console.log(error);
        })
        
        
    }
    
    
    $scope.iniciarSesion = function(){
        if(window.location.port){
            window.location = "http://" + window.location.hostname + ":" + window.location.port + "/Hero-WebApp/login.html";
        }
        else{
            window.location = "http://" + window.location.hostname + "/Hero-WebApp/login.html";
        }  
       }
    
    $scope.registrarse = function(){
        if(window.location.port){
            window.location = "http://" + window.location.hostname + ":" + window.location.port + "/Hero-WebApp/registro.html";
        }
        else{
            window.location = "http://" + window.location.hostname + "/Hero-WebApp/registro.html";
        } 
    }
  


  });
