"use strict";

angular.module('westernWaterApp', ["ngRoute", "ui.bootstrap"]);

angular.module('westernWaterApp').config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/main.html',
            controller: 'mainController'
        })
        .when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'aboutController'
        })
        .otherwise({
            redirectTo: '/'
        });
});