"use strict";

angular.module('westernWaterApp', ["ngRoute", "pageslide-directive", "ui.bootstrap"]);

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