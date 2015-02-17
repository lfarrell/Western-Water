"use strict";

angular.module('westernWaterApp').controller('aboutController', ['$scope', function($scope) {
    $scope.header = 'Western Water';
}]);

angular.module('westernWaterApp').controller('mainController', ['$scope', function($scope) {
    $scope.header = 'California';

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
        $scope.loading = false;
        $scope.loaded = true;

        $scope.$apply();
    });
}]);