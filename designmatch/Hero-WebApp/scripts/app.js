'use strict';

angular.module('cloudApp',['ngRoute', 'ngStorage'])
    .config(['$routeProvider','$httpProvider', function ($routeProvider, $httpProvider){
        $routeProvider            
            .when('/', {
            templateUrl: 'index.html',
            controller: 'HomeCtrl',
            controllerAs: 'home'
        })
         
        .when('/registrarse', {
            templateUrl: 'registro.html',
            controller: 'RegistroCtrl',
            controllerAs: 'registro'
        }) 
        
        .when('/inicioSesion', {
            templateUrl: 'login.html',
            controller: 'InicioSesionCtrl',
            controllerAs: 'sesion'
        }) 
        
        .when('/admin/proyectos', {
            templateUrl: 'proyectos.html',
            controller: 'ProyectosCtrl',
            controllerAs: 'proyecto'
        }) 

            .otherwise({
            redirectTo:'/'
        });
        
    }]);