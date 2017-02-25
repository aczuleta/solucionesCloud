'use strict';
/**
 * @ngdoc function
 * @name parte2App.controller:Controlador2Ctrl
 * @description
 * # Controlador2Ctrl
 * Controller of the parte2App
 */
angular.module('cloudApp')
  .controller('ProyectosCtrl', function ($scope, $http) {
    
    $scope.commit="Create Project";
    $scope.modificar="Update Project";
    $scope.eliminar="Delete Project";
    $scope.company={};
    $scope.nombreCompania = "";
    $scope.emailCompania = "";
    $scope.contraCompania = "";
    $scope.confirmacionContra = "";
    $scope.companiaActual = {};
    $scope.idCompania = localStorage.getItem("companiaActualId");
    console.log($scope.idCompania);
    $scope.proyectos = [];
    $scope.nombreProyecto = "";
    $scope.descripcionProyecto="";
    $scope.precioProyecto=0;
    $scope.nombreProyecto2 = "";
    $scope.descripcionProyecto2="";
    $scope.precioProyecto2=0;
    $scope.proyecto = {};
    $scope.postman={};
    $scope.idProyectoActual = 0;
    
 
    
    $scope.inicializar = function(){
       $scope.usuarioInexistente = false;
       $http.get("https://cloud-project-backend.herokuapp.com/companies/" + $scope.idCompania + ".json")
       .then(function (response) {
        var data = response.data;
        var status = response.status;
        var statusText = response.statusText;
        var headers = response.headers;
        var config = response.config;
        $scope.companiaActual = data;
        $scope.nombreCompania = $scope.companiaActual.name;    
       }) 
       
   }
   
   $scope.getProyectos = function(){
        $scope.proyectos = [];
        $http.get("https://cloud-project-backend.herokuapp.com/companies/" + $scope.idCompania + "/projects.json")
       .then(function (response) {
        var data = response.data;
        var status = response.status;
        var statusText = response.statusText;
        var headers = response.headers;
        var config = response.config;
        $scope.proyectos = data;
       }) 
   }
   
      $scope.getProyectos();
    
   $scope.crearProyecto = function(){
        $scope.proyecto = {};
        $scope.postman = {};
        $scope.proyecto.name = $scope.nombreProyecto;
        $scope.proyecto.description = $scope.descripcionProyecto;
        $scope.proyecto.price = $scope.precioProyecto;
        $scope.proyecto.company_id = $scope.idCompania;
        $scope.postman.project = $scope.proyecto;
        $scope.postman.commit = $scope.commit;
        $http.post("https://cloud-project-backend.herokuapp.com/projects", JSON.stringify($scope.postman))
           .then(function (response) {
            var data = response.data;
            var status = response.status;
            var statusText = response.statusText;
            var headers = response.headers;
            var config = response.config;
            console.log(response);
           }) 
         
   }
   
      $scope.eliminarProyecto = function(idParam){
        var param = idParam;
        console.log("esta eliminando" + param);
        $http.delete("https://cloud-project-backend.herokuapp.com/projects/" + param)
       .then(function (response) {
        var data = response.data;
        var status = response.status;
        var statusText = response.statusText;
        var headers = response.headers;
        var config = response.config;
        $scope.proyectos = data;
        $scope.idProyectoActual = 0;
       }) 
    }
    
     $scope.modificarProyecto = function(){
        $scope.proyecto = {};
        $scope.postman = {};
        $scope.proyecto.name = $scope.nombreProyecto2;
        $scope.proyecto.description = $scope.descripcionProyecto2;
        $scope.proyecto.price = $scope.precioProyecto2;
        $scope.proyecto.company_id = $scope.idCompania;
        $scope.postman.project = $scope.proyecto;
        $scope.postman.commit = $scope.modificar;
         console.log(JSON.stringify($scope.postman));
        $http.put("https://cloud-project-backend.herokuapp.com/projects/" + $scope.idProyectoActual, JSON.stringify($scope.postman))
           .then(function (response) {
            var data = response.data;
            var status = response.status;
            var statusText = response.statusText;
            var headers = response.headers;
            var config = response.config;
            console.log(response);
            $scope.idProyectoActual = 0;
           }) 
     }
       
    $scope.guardarId = function(idParam){
        $scope.idProyectoActual = idParam;
    }
    $scope.inicializar();




  });
