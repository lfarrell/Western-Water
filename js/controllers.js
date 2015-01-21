"use strict";

angular.module('westernWaterApp').controller('mainController', ['$scope', function($scope) {
    $scope.header = 'Western Water';
}]);

angular.module('westernWaterApp').controller('calController', ['$scope', function($scope) {
    $scope.header = 'California';

    d3.json('js/maps/ca.geo.json', function(data) {
        $scope.data = data;
        $scope.loading = false;
        $scope.loaded = true;

        $scope.$apply();
    });

    $scope.siteChange = function() {

    };
}]);

angular.module('westernWaterApp').controller('texasController', ['$scope', function($scope) {
    $scope.header = 'Texas';

    d3.json('js/maps/tx.geo.json', function(data) {
        $scope.data = data;
        $scope.loading = false;
        $scope.loaded = true;

        $scope.$apply();
    });

    $scope.siteChange = function() {

    };
}]);
