angular.module('westernWaterApp').service('LoadService', function() {
    this.file_load = function (text_file, $scope) {
        d3.csv(text_file, function (error, graph) {
            load(graph);
        });

        function load(data) {
            // put the data into angular's scope
            $scope.data = data;
            $scope.loading = false;
            $scope.loaded = true;

            $scope.$apply();
        }
    };

    this.canvasFormat = function($scope) {
        $scope.loading = true;
        $scope.loaded = false;

        d3.selectAll("svg").remove();

        return $scope;
    };
});

angular.module('westernWaterApp').service('tipService', function() {
    this.tipDiv = function() {
        var tip = document.querySelectorAll(".tooltip"); // check that there's not already a tip div

        if(tip.length) {
            return d3.select(".tooltip");
        }

        return d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

    };

    this.tipShow = function(tip, text) {
        tip.transition()
            .duration(200)
            .style("opacity", .9);

        tip.html(text)
            .style("top", (d3.event.pageY-28)+"px")
            .style("left", (d3.event.pageX-28)+"px");

    };

    this.tipHide = function(tip) {
        tip.transition()
            .duration(500)
            .style("opacity", 0);
    };
});