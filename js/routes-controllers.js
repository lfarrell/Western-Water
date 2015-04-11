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
        .when('/idaho', {
            templateUrl: 'partials/idaho.html',
            controller: 'idahoController'
        })
        .when('/nevada', {
            templateUrl: 'partials/nevada.html',
            controller: 'nevadaController'
        })
        .when('/new_mexico', {
            templateUrl: 'partials/new_mexico.html',
            controller: 'newmexicoController'
        })
        .when('/oregon', {
            templateUrl: 'partials/oregon.html',
            controller: 'oregonController'
        })
        .when('/texas', {
            templateUrl: 'partials/texas.html',
            controller: 'texasController'
        })
        .when('/utah', {
            templateUrl: 'partials/utah.html',
            controller: 'utahController'
        })
        .when('/washington', {
            templateUrl: 'partials/washington.html',
            controller: 'washingtonController'
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

angular.module('westernWaterApp').controller('mainController', ['$scope', 'LoadService', function($scope, LoadService) {
    LoadService.data_load(
        $scope,
        'js/maps/contig_us.geo.json',
        'station_data/all_resv.csv',
        'data/all.csv',
        false
    );
}]);

angular.module('westernWaterApp').controller('arizonaController', ['$scope', 'LoadService', function($scope, LoadService) {
    LoadService.data_load(
        $scope,
        'js/maps/az.counties.json',
        'station_data/az.csv',
        'data/states_all/az_all.csv',
        'data/az_snow/all_az.csv'
    );
}]);

angular.module('westernWaterApp').controller('californiaController', ['$scope', 'LoadService', function($scope, LoadService) {
    LoadService.data_load(
        $scope,
        'js/maps/ca.counties.json',
        'station_data/ca.csv',
        'data/states_all/ca_all.csv',
        'data/cal_snow/all_cal.csv'
    );
}]);

angular.module('westernWaterApp').controller('coloradoController', ['$scope', 'LoadService', function($scope, LoadService) {
    LoadService.data_load(
        $scope,
        'js/maps/co.counties.json',
        'station_data/co.csv',
        'data/states_all/co_all.csv',
        'data/co_snow/all_co.csv'
    );
}]);

angular.module('westernWaterApp').controller('idahoController', ['$scope','LoadService', function($scope, LoadService) {
    LoadService.data_load(
        $scope,
        'js/maps/id.counties.json',
        'station_data/id.csv',
        'data/states_all/id_all.csv',
        'data/id_snow/all_id.csv'
    );
}]);

angular.module('westernWaterApp').controller('nevadaController', ['$scope', 'LoadService', function($scope, LoadService) {
    LoadService.data_load(
        $scope,
        'js/maps/nv.counties.json',
        'station_data/nv.csv',
        'data/states_all/nv_all.csv',
        'data/nv_snow/all_nv.csv'
    );
}]);

angular.module('westernWaterApp').controller('newmexicoController', ['$scope', 'LoadService', function($scope, LoadService) {
    LoadService.data_load(
        $scope,
        'js/maps/nm.counties.json',
        'station_data/nm.csv',
        'data/states_all/nm_all.csv',
        'data/nm_snow/all_nm.csv'
    );
}]);

angular.module('westernWaterApp').controller('oregonController', ['$scope', 'LoadService', function($scope, LoadService) {
    LoadService.data_load(
        $scope,
        'js/maps/or.counties.json',
        'station_data/or.csv',
        'data/states_all/or_all.csv',
        'data/or_snow/all_or.csv'
    );
}]);

angular.module('westernWaterApp').controller('texasController', ['$scope', 'LoadService', function($scope, LoadService) {
    LoadService.data_load(
        $scope,
        'js/maps/tx.counties.json',
        'station_data/texas_resv.csv',
        'data/states_all/tx_all.csv',
        false
    );
}]);

angular.module('westernWaterApp').controller('utahController', ['$scope', 'LoadService', function($scope, LoadService) {
    LoadService.data_load(
        $scope,
        'js/maps/ut.counties.json',
        'station_data/utah.csv',
        'data/states_all/utah_all.csv',
        'data/utah_snow/all_utah.csv'
    );
}]);

angular.module('westernWaterApp').controller('washingtonController', ['$scope', 'LoadService', function($scope, LoadService) {
    LoadService.data_load(
        $scope,
        'js/maps/wa.counties.json',
        'station_data/wa.csv',
        'data/states_all/wa_all.csv',
        'data/wa_snow/all_wa.csv'
    );
}]);

angular.module('westernWaterApp').controller('wyomingController', ['$scope', 'LoadService', function($scope, LoadService) {
    LoadService.data_load(
        $scope,
        'js/maps/wy.counties.json',
        'station_data/wy.csv',
        'data/states_all/wy_all.csv',
        'data/wy_snow/all_wy.csv'
    );
}]);