"use strict";

angular.module('westernWaterApp', ["ngRoute", "ui.bootstrap"]);

angular.module('westernWaterApp').config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/main.html',
            controller: 'mainController'
        })
        .when('/california', {
            templateUrl: 'partials/california.html',
            controller: 'calController'
        })
        .when('/texas', {
            templateUrl: 'partials/texas.html',
            controller: 'texasController'
        })
        .otherwise({
            redirectTo: '/'
        });
});