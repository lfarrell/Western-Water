"use strict";

angular.module('westernWaterApp', ["ngRoute", "pageslide-directive", "ui.bootstrap"]);

angular.module('westernWaterApp').config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/main.html',
            controller: 'mainController'
        })
        .when('/california', {
            templateUrl: 'partials/dpla.html',
            controller: 'dplaController'
        })
        .when('/texas', {
            templateUrl: 'partials/digital_nz.html',
            controller: 'digitalNzController'
        })
        .otherwise({
            redirectTo: '/'
        });
});