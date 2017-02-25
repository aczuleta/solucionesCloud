'use strict';
/**
 * @ngdoc function
 * @name parte2App.controller:Controlador2Ctrl
 * @description
 * # Controlador2Ctrl
 * Controller of the parte2App
 */
angular.module('cloudApp')
  .controller('RegistroCtrl', function ($scope, $http) {
    
    $scope.posts = [];
    $scope.usuario = [];
    $scope.commit="Create company";
    $scope.company={};
    $scope.nombreCompania = "";
    $scope.emailCompania = "";
    $scope.contraCompania = "";
    $scope.confirmacionContra = "";
    $scope.postman = {};
    
    
    $scope.iniciarSesion = function(){
        if(window.location.port){
            window.location = "http://" + window.location.hostname + ":" + window.location.port + "/Hero-WebApp/login.html";
        }
        else{
            window.location = "http://" + window.location.hostname + "/Hero-WebApp/login.html";
        }  
       }
    
    $scope.registrarse = function(){
        
        $scope.usuarioNuevo.precioHora= 0;
        $scope.usuarioNuevo.monitor=true;
        $scope.usuarioNuevo.descripcion="d1";
        
        console.log(JSON.stringify($scope.usuarioNuevo));
        $http.post('http://localhost:9000/estudiante',  JSON.stringify($scope.usuarioNuevo))        
        .success(function(data,headers){   
              $scope.usuarioNuevo={};
           })
        
        .error(function(error){
            console.log(error);
        })
    }
  
    $scope.registrarCompania = function(){
        $scope.company.name = $scope.nombreCompania;
        $scope.company.email = $scope.emailCompania;
        $scope.company.password = $scope.contraCompania;
        $scope.postman.company = $scope.company;
        $scope.postman.commit = $scope.commit;
        
        $http.post("https://cloud-project-backend.herokuapp.com/companies", JSON.stringify($scope.postman))
           .then(function (response) {
            var data = response.data;
            var status = response.status;
            var statusText = response.statusText;
            var headers = response.headers;
            var config = response.config;
            console.log(response);
           }) 
    
    }


  });
