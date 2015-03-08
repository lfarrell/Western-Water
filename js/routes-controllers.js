"use strict";

angular.module('westernWaterApp', ["ngRoute", "ui.bootstrap"]);

angular.module('westernWaterApp').config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/main.html',
            controller: 'mainController'
        })
        .when('/arizona', {
            templateUrl: 'partials/arizona.html',
            controller: 'arizonaController'
        })
        .when('/california', {
            templateUrl: 'partials/california.html',
            controller: 'californiaController'
        })
        .when('/colorado', {
            templateUrl: 'partials/colorado.html',
            controller: 'coloradoController'
        })
        .when('/nevada', {
            templateUrl: 'partials/nevada.html',
            controller: 'nevadaController'
        })
        .when('/new_mexico', {
            templateUrl: 'partials/new_mexico.html',
            controller: 'newmexicoController'
        })
        .when('/texas', {
            templateUrl: 'partials/texas.html',
            controller: 'texasController'
        })
        .when('/utah', {
            templateUrl: 'partials/utah.html',
            controller: 'utahController'
        })
        .when('/wyoming', {
            templateUrl: 'partials/wyoming.html',
            controller: 'wyomingController'
        })
        .when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'aboutController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angular.module('westernWaterApp').controller('aboutController', ['$scope', function($scope) {
}]);

angular.module('westernWaterApp').controller('mainController', ['$scope', function($scope) {
    d3.json('js/maps/contig_us.geo.json', function(map_data) {
        $scope.map_data = map_data;

        d3.csv('station_data/all_resv.csv', function(stations) {
            $scope.stations = stations;
            $scope.$apply();
        });

        $scope.graphloading = true;
        $scope.graphloaded = false;

        d3.csv('data/all.csv', function(data) {
            $scope.data = data;
            $scope.graphloading = false;
            $scope.graphloaded = true;
            $scope.$apply();
        });

        $scope.$apply();
    });
}]);

angular.module('westernWaterApp').controller('arizonaController', ['$scope', function($scope) {
    $scope.graphloading = false;
    $scope.graphloaded = true;
}]);

angular.module('westernWaterApp').controller('californiaController', ['$scope', function($scope) {
    $scope.graphloading = false;
    $scope.graphloaded = true;
}]);

angular.module('westernWaterApp').controller('coloradoController', ['$scope', function($scope) {
    $scope.graphloading = false;
    $scope.graphloaded = true;
}]);

angular.module('westernWaterApp').controller('nevadaController', ['$scope', function($scope) {
    $scope.graphloading = false;
    $scope.graphloaded = true;
}]);

angular.module('westernWaterApp').controller('newmexicoController', ['$scope', function($scope) {
    $scope.graphloading = false;
    $scope.graphloaded = true;
}]);

angular.module('westernWaterApp').controller('texasController', ['$scope', function($scope) {
    $scope.graphloading = false;
    $scope.graphloaded = true;
}]);

angular.module('westernWaterApp').controller('utahController', ['$scope', function($scope) {
    $scope.graphloading = false;
    $scope.graphloaded = true;
}]);

angular.module('westernWaterApp').controller('wyomingController', ['$scope', function($scope) {
    $scope.graphloading = false;
    $scope.graphloaded = true;
}]);