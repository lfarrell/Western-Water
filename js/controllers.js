"use strict";

angular.module('westernWaterApp').controller('aboutController', ['$scope', function($scope) {
}]);

angular.module('westernWaterApp').controller('mainController', ['$scope', function($scope) {
    d3.json('js/maps/contig_us.geo.json', function(map_data) {
        $scope.map_data = map_data;

        d3.csv('station_data/all_resv.csv', function(stations) {
            $scope.stations = stations;
            $scope.$apply();
        });

        d3.csv('data/all.csv', function(data) {
            $scope.data = data;
            $scope.graphloading = false;
            $scope.graphloaded = true;
            $scope.$apply();
        });

        $scope.$apply();
    });
}]);