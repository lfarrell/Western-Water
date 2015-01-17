"use strict";

angular.module('westernWaterApp').controller('mainController', ['$scope', function($scope) {
    $scope.header = 'Western Water';
}]);

angular.module('westernWaterApp').controller('calController', ['$scope', function($scope) {
    $scope.header = 'California';
}]);

angular.module('westernWaterApp').controller('texasController', ['$scope', function($scope) {
    $scope.header = 'Texas';
}]);
