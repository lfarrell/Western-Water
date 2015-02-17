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

angular.module('westernWaterApp').service('StatsService', function() {
    /**
     * Add , to make numbers easier to read
     * @param number
     * @returns {string}
     */
    this.numFormat = function(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

angular.module('westernWaterApp').service('chartService', function() {
    this.chart = function(graph_height, graph_width, margin, xAxis, yAxis) {
        var chart = d3.select("#graph").append("svg")
            .attr("width", graph_width + margin.left + margin.right)
            .attr("height", graph_height + margin.top + margin.bottom);

        chart.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate("+ margin.left + "," + (graph_height + margin.top) + ")")
            .call(xAxis);

        chart.append("text")
            .attr("x", graph_width / 2)
            .attr("y", graph_height + margin.bottom)
            .style("text-anchor", "end")
            .text("Date");

        chart.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .call(yAxis);

        chart.append("text")
            .attr("transform", "rotate(-90)")
            .attr("x", -graph_height/2)
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Acre Feet");

        return chart;
    };
});