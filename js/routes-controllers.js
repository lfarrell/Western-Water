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
    $scope.graphloading = true;
    $scope.graphloaded = false;

    d3.json('js/maps/az.counties.json', function(map_data) {
        $scope.map_data = map_data;

        d3.csv('station_data/az.csv', function(stations) {
            $scope.stations = stations;
            $scope.$apply();
        });

        d3.csv('data/states_all/az_all.csv', function(data) {
            $scope.data = data;
            $scope.$apply();
        });

        $scope.graphloading = true;
        $scope.graphloaded = false;

        d3.csv('data/az_snow/all_az.csv', function(data) {
            $scope.snowdata = data;
            $scope.graphloading = false;
            $scope.graphloaded = true;
            $scope.$apply();
        });

        $scope.$apply();
    });
}]);

angular.module('westernWaterApp').controller('californiaController', ['$scope', function($scope) {
    $scope.graphloading = true;
    $scope.graphloaded = false;

    d3.json('js/maps/ca.counties.json', function(map_data) {
        $scope.map_data = map_data;

        d3.csv('station_data/ca.csv', function(stations) {
            $scope.stations = stations;
            $scope.$apply();
        });

        d3.csv('data/states_all/ca_all.csv', function(data) {
            $scope.data = data;
            $scope.$apply();
        });

        $scope.graphloading = true;
        $scope.graphloaded = false;

        d3.csv('data/cal_snow/all_cal.csv', function(data) {
            $scope.snowdata = data;
            $scope.graphloading = false;
            $scope.graphloaded = true;
            $scope.$apply();
        });

        $scope.$apply();
    });
}]);

angular.module('westernWaterApp').controller('coloradoController', ['$scope', function($scope) {
    $scope.graphloading = true;
    $scope.graphloaded = false;

    d3.json('js/maps/co.counties.json', function(map_data) {
        $scope.map_data = map_data;

        d3.csv('station_data/co.csv', function(stations) {
            $scope.stations = stations;
            $scope.$apply();
        });

        d3.csv('data/states_all/co_all.csv', function(data) {
            $scope.data = data;
            $scope.$apply();
        });

        $scope.graphloading = true;
        $scope.graphloaded = false;

        d3.csv('data/co_snow/all_co.csv', function(data) {
            $scope.snowdata = data;
            $scope.graphloading = false;
            $scope.graphloaded = true;
            $scope.$apply();
        });

        $scope.$apply();
    });
}]);

angular.module('westernWaterApp').controller('idahoController', ['$scope', function($scope) {
    $scope.graphloading = true;
    $scope.graphloaded = false;

    d3.json('js/maps/id.counties.json', function(map_data) {
        $scope.map_data = map_data;

        d3.csv('station_data/id.csv', function(stations) {
            $scope.stations = stations;
            $scope.$apply();
        });

        d3.csv('data/states_all/id_all.csv', function(data) {
            $scope.data = data;
            $scope.$apply();
        });

        $scope.graphloading = true;
        $scope.graphloaded = false;

        d3.csv('data/id_snow/all_id.csv', function(data) {
            $scope.snowdata = data;
            $scope.graphloading = false;
            $scope.graphloaded = true;
            $scope.$apply();
        });

        $scope.$apply();
    });
}]);

angular.module('westernWaterApp').controller('nevadaController', ['$scope', function($scope) {
    $scope.graphloading = true;
    $scope.graphloaded = false;

    d3.json('js/maps/nv.counties.json', function(map_data) {
        $scope.map_data = map_data;

        d3.csv('station_data/nv.csv', function(stations) {
            $scope.stations = stations;
            $scope.$apply();
        });

        d3.csv('data/states_all/nv_all.csv', function(data) {
            $scope.data = data;
            $scope.$apply();
        });

        $scope.graphloading = true;
        $scope.graphloaded = false;

        d3.csv('data/nv_snow/all_nv.csv', function(data) {
            $scope.snowdata = data;
            $scope.graphloading = false;
            $scope.graphloaded = true;
            $scope.$apply();
        });

        $scope.$apply();
    });
}]);

angular.module('westernWaterApp').controller('newmexicoController', ['$scope', function($scope) {
    $scope.graphloading = true;
    $scope.graphloaded = false;

    d3.json('js/maps/nm.counties.json', function(map_data) {
        $scope.map_data = map_data;

        d3.csv('station_data/nm.csv', function(stations) {
            $scope.stations = stations;
            $scope.$apply();
        });

        d3.csv('data/states_all/nm_all.csv', function(data) {
            $scope.data = data;
            $scope.$apply();
        })

        $scope.graphloading = true;
        $scope.graphloaded = false;

        d3.csv('data/nm_snow/all_nm.csv', function(data) {
            $scope.snowdata = data;
            $scope.graphloading = false;
            $scope.graphloaded = true;
            $scope.$apply();
        });

        $scope.$apply();
    });
}]);

angular.module('westernWaterApp').controller('oregonController', ['$scope', function($scope) {
    $scope.graphloading = true;
    $scope.graphloaded = false;

    d3.json('js/maps/or.counties.json', function(map_data) {
        $scope.map_data = map_data;

        d3.csv('station_data/or.csv', function(stations) {
            $scope.stations = stations;
            $scope.$apply();
        });

        d3.csv('data/states_all/or_all.csv', function(data) {
            $scope.data = data;
            $scope.$apply();
        });

        $scope.graphloading = true;
        $scope.graphloaded = false;

        d3.csv('data/or_snow/all_or.csv', function(data) {
            $scope.snowdata = data;
            $scope.graphloading = false;
            $scope.graphloaded = true;
            $scope.$apply();
        });

        $scope.$apply();
    });
}]);

angular.module('westernWaterApp').controller('texasController', ['$scope', function($scope) {
    $scope.graphloading = true;
    $scope.graphloaded = false;

    d3.json('js/maps/tx.counties.json', function(map_data) {
        $scope.map_data = map_data;

        d3.csv('station_data/texas_resv.csv', function(stations) {
            $scope.stations = stations;
            $scope.$apply();
        });

        d3.csv('data/states_all/tx_all.csv', function(data) {
            $scope.data = data;
            $scope.$apply();
        });

        $scope.graphloading = false;
        $scope.graphloaded = true;
        $scope.$apply();
    });
}]);

angular.module('westernWaterApp').controller('utahController', ['$scope', function($scope) {
    $scope.graphloading = true;
    $scope.graphloaded = false;

    d3.json('js/maps/ut.counties.json', function(map_data) {
        $scope.map_data = map_data;

        d3.csv('station_data/utah.csv', function(stations) {
            $scope.stations = stations;
            $scope.$apply();
        });

        d3.csv('data/states_all/utah_all.csv', function(data) {
            $scope.data = data;
            $scope.$apply();
        });

        $scope.graphloading = true;
        $scope.graphloaded = false;

        d3.csv('data/utah_snow/all_utah.csv', function(data) {
            $scope.snowdata = data;
            $scope.graphloading = false;
            $scope.graphloaded = true;
            $scope.$apply();
        });

        $scope.$apply();
    });
}]);

angular.module('westernWaterApp').controller('washingtonController', ['$scope', function($scope) {
    $scope.graphloading = true;
    $scope.graphloaded = false;

    d3.json('js/maps/wa.counties.json', function(map_data) {
        $scope.map_data = map_data;

        d3.csv('station_data/wa.csv', function(stations) {
            $scope.stations = stations;
            $scope.$apply();
        });

        d3.csv('data/states_all/wa_all.csv', function(data) {
            $scope.data = data;
            $scope.$apply();
        });

        $scope.graphloading = true;
        $scope.graphloaded = false;

        d3.csv('data/wa_snow/all_wa.csv', function(data) {
            $scope.snowdata = data;
            $scope.graphloading = false;
            $scope.graphloaded = true;
            $scope.$apply();
        });

        $scope.$apply();
    });
}]);

angular.module('westernWaterApp').controller('wyomingController', ['$scope', function($scope) {
    $scope.graphloading = true;
    $scope.graphloaded = false;

    d3.json('js/maps/wy.counties.json', function(map_data) {
        $scope.map_data = map_data;

        d3.csv('station_data/wy.csv', function(stations) {
            $scope.stations = stations;
            $scope.$apply();
        });

        d3.csv('data/states_all/wy_all.csv', function(data) {
            $scope.data = data;
            $scope.$apply();
        });

        $scope.graphloading = true;
        $scope.graphloaded = false;

        d3.csv('data/wy_snow/all_wy.csv', function(data) {
            $scope.snowdata = data;
            $scope.graphloading = false;
            $scope.graphloaded = true;
            $scope.$apply();
        });

        $scope.$apply();
    });
}]);