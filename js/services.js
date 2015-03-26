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
    this.chart = function(selector, graph_height, graph_width, margin, xAxis, yAxis, y_text) {
        var chart = d3.select(selector).append("svg")
            .attr("width", graph_width + margin.left + margin.right)
            .attr("height", graph_height + margin.top + margin.bottom);

        chart.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate("+ margin.left + "," + (graph_height + margin.top) + ")")
            .call(xAxis);

        chart.append("text")
            .attr("x", graph_width / 1.5)
            .attr("y", graph_height + margin.bottom)
            .style("text-anchor", "zs")
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
            .text(y_text);

        return chart;
    };

    this.legend = function(selector, check) {
        var keys = ['Capacity', 'Avg Levels', 'Current Storage'];
        var colors = ['green', '#FCE883', 'steelblue'];
        var width = 300;
        var compare = document.querySelectorAll('#compare_legend .legend');
        if(check && compare.length) return;

        var legend = d3.select(selector)
            .append("svg")
            .attr("width", width)
            .attr("height", 55)
            .attr("class", "legend");

        var j = 0;

        legend.selectAll('g').data(keys)
            .enter()
            .append('g').attr("width",width)
            .each(function(d, i) {
                var g = d3.select(this);

                g.append("rect")
                    .attr("x", j)
                    .attr("y", 15)
                    .attr("width", 10)
                    .attr("height", 10)
                    .style("fill", colors[i]);

                g.append("text")
                    .attr("x", j + 15)
                    .attr("y", 25)
                    .attr("height",30)
                    .attr("width", d.length * 50)
                    .text(d);

                j += (d.length * 5) + 40;
            });
    };

    this.focus = function(chart, single) {
        if(single !== undefined) false;
      /*  var focus = chart.selectAll(".focus")
            .data(key_values).enter().append("g")
            .attr("class", "focus")
            .attr("id", function (d) { return "focus-" + d; })
            .style("display", "none"); */

        var focus = chart.append("g")
            .attr("class", "focus")
            .style("display", "none");

        focus.append("circle")
            .attr("class", "y0")
            .attr("r", 4.5);

        focus.append("text")
            .attr("class", "y0")
            .attr("x", 9)
            .attr("dy", ".35em");

        focus.append("circle")
            .attr("class", "y1")
            .attr("r", 4.5);

        focus.append("text")
            .attr("class", "y1")
            .attr("x", 9)
            .attr("dy", ".35em");

        if(!single) {
            focus.append("circle")
                .attr("class", "y2")
                .attr("r", 4.5);

            focus.append("text")
                .attr("class", "y2")
                .attr("x", 9)
                .attr("dy", ".35em");
        }

        return focus;
    };

    this.graphPadding = function() {
        var graph_padding = moment().add(8, 'month');
        return graph_padding.format('MM/YYYY');
    };

    this.histAvg = function(data, type) {
        var avg = d3.mean(data, function(d) {
            if(type === 'map-graph') {
                return +d.storage;
            } else {
                return +d.value;
            }
        });

        data.forEach(function(d) {
            d.mean = avg;
        });

        return data;
    };
});