angular.module('westernWaterApp').directive('mapGraph', ['tipService', function(tipService) {
    function link(scope, element, attrs) {
        var margin = {top: 20, right: 40, left: 100, bottom: 80},
            height = 600 - margin.top - margin.bottom,
            width = 800,
            graph_width = 525 - margin.left - margin.right,
            graph_height = 525 - margin.top - margin.bottom,
            format = d3.time.format("%m/%d/%Y").parse,
            tip = tipService.tipDiv();

        scope.$watchGroup(['map', 'stations', 'data'], function(values) {
            if (!values[0] || !values[1] || !values[2]) { return; }

            var map_data = values[0];
            var stations = values[1];
            var data = values[2];

            data.forEach(function(d) {
                d.capacity = d.capacity.replace(/,/g, '');
                d.storage = d.storage.replace(/,/g, '');
              //  d.avg_storage = d.avg_storage.replace(/,/g, '');
            });

            var projection = d3.geo.albers()
                    .rotate([96, 0])
                    .center([-.6, 38.7])
                    .parallels([29.5, 45.5])
                    .scale(1000)
                    .translate([width / 2, height / 2])
                    .precision(.1),
                path = d3.geo.path().projection(projection);

         //   var ndx = crossfilter(data);
            var datz = data.filter(function(d) { return d.reservoir === 'Shasta'; });
            scope.reservoir = 'Shasta, CA';

            // Create scales
            var xScale = d3.time.scale()
                .domain([
                    format(d3.min(data, function(d) { return d.date; })),
                    format(d3.max(data, function(d) { return d.date; }))
                ])
                .range([0, graph_width]);

            var yScale = d3.scale.linear()
                .domain([d3.max(datz, function(d) { return d.capacity; }), 0])
                .range([0, graph_height]);

            var zoom = d3.behavior.zoom()
                .scaleExtent([1, 10])
                .on("zoom", zooming);

            var drag = d3.behavior.drag()
                .origin(function(d) { return d; })
                .on("drag", dragged);

            var map_svg = d3.select('#map').append('svg')
                .attr('height', height)
                .attr('width', width)
                .call(zoom);
              //  .call(drag);

            var map = map_svg.append('g');

            map.selectAll("path")
               .data(map_data.features)
               .enter()
               .append("path")
               .attr("d", path);

            map.selectAll("circle")
               .data(stations)
               .enter()
               .append("circle")
               .attr("class", "map-circle")
               .attr("cx", function(d) {
                   return projection([d.lng, d.lat])[0]; })
               .attr("cy", function(d) {
                    return projection([d.lng, d.lat])[1]; })
               .attr("r", function(d) {
                    return 2.5;
               })
               .on("click", function (res) {
                    var datz = data.filter(function(d) {
                        return d.reservoir === res.reservoir;
                    });
                    chart_update(datz);
                })
                .on("mouseover", function(d) {
                    var text = d.reservoir;
                    tipService.tipShow(tip, text);
                })
                .on("mouseout", function(d) {
                    tipService.tipHide(tip);
                });

            function zooming() {
                map.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
            }

            // Create Axis
            var xAxis = d3.svg.axis()
                .scale(xScale)
                .orient("bottom")
                .tickFormat(d3.time.format("%m/%d"));

            var yAxis = d3.svg.axis()
                 .scale(yScale)
                 .orient("left");

            var chart = d3.select("#graph").append("svg")
                 .attr("width", graph_width + margin.left + margin.right)
                 .attr("height", graph_height + margin.top + margin.bottom);

            chart.append("g")
                 .attr("class", "x axis")
                 .attr("transform", "translate("+ margin.left + "," + (graph_height + margin.top) + ")")
                 .call(xAxis);

            chart.append("text")
                 .attr("x", width / 2)
                 .attr("y", graph_height + margin.bottom)
                 .style("text-anchor", "end")
                 .text("Date");

            chart.append("g")
                 .attr("class", "y axis")
                 .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                 .call(yAxis);

            chart.append("text")
                 .attr("transform", "rotate(-90)")
                 .attr("x", -height/2)
                 .attr("y", 6)
                 .attr("dy", ".71em")
                 .style("text-anchor", "end")
                 .text("Acre Feet");

            d3.selectAll("g.x text").attr('transform', "rotate(35)")
              .attr('dx', 27)
              .attr('dy', 10);

            var storage = d3.svg.line()
                  .x(function(d) { return xScale(format(d.date)); })
                  .y(function(d) { return yScale(d.storage); });

            chart.append("g")
                 .append("path")
                 .attr("d", storage(datz))
                 .attr("id", "storage")
                 .attr("fill", "none")
                 .attr("stroke", "firebrick")
                 .attr("stroke-width", 2)
                 .attr("transform", "translate(" + margin.left + ",0)");

          /*  var avg_storage = d3.svg.line()
                  .x(function(d) { return xScale(format(d.date)); })
                  .y(function(d) { return yScale(d.avg_storage); });

            chart.append("g")
                 .append("path")
                 .attr("d", avg_storage(datz))
                 .attr("id", "avg_storage")
                 .attr("fill", "none")
                 .attr("stroke", "steelblue")
                 .attr("stroke-width", 2)
                 .attr("stroke-dasharray", [5,5])
                 .attr("transform", "translate(" + margin.left + ",0)"); */

            var capacity = d3.svg.line()
                  .x(function(d) { return xScale(format(d.date)); })
                  .y(function(d) { return yScale(d.capacity); });

            chart.append("g")
                 .append("path")
                 .attr("d", capacity(datz))
                 .attr("id", "capacity")
                 .attr("fill", "none")
                 .attr("stroke", "green")
                 .attr("stroke-width", 2)
                 .attr("transform", "translate(" + margin.left + ",0)");

            function chart_update(datz) {
                xScale.domain([
                    format(d3.min(data, function(d) { return d.date; })),
                    format(d3.max(data, function(d) { return d.date; }))
                ]);
                yScale.domain([d3.max(datz, function(d) { return d.capacity; }), 0]);

                d3.select("g.x").transition().duration(1200).ease("sin-in-out").call(xAxis);
                d3.select("g.y").transition().duration(1200).ease("sin-in-out").call(yAxis);
                d3.select("#storage").transition().duration(1200).ease("sin-in-out").attr("d", storage(datz));
           //     d3.select("#avg_storage").transition().duration(1200).ease("sin-in-out").attr("d", avg_storage(datz));
                d3.select("#capacity").transition().duration(1200).ease("sin-in-out").attr("d", capacity(datz));
                var res = datz[0];
                d3.select("#reservoir").text( res.reservoir + ', ' + res.state);
            }

            function dragged(d) {
                d3.event.sourceEvent.stopPropagation();
                d3.select(this).attr("x", d.x = d3.event.x).attr("y", d.y = d3.event.y);
            }
        });
    }

    return {
        restrict: 'C',
        link: link,
        scope: {
            'map': '=',
            'data': '=',
            'stations': '='
        }
    }
}]);

angular.module('westernWaterApp').directive('totalsCharts', ['tipService', function(tipService) {
    function link(scope, element, attrs) {
        var margin = {top: 20, right: 40, left: 100, bottom: 80},
            width = 600 - margin.left - margin.right,
            height = 550 - margin.top - margin.bottom,
            format = d3.time.format("%m/%d/%Y").parse;

        scope.$watchGroup(['data', 'state'], function(values) {
            if(!values[0]) { return; }

            var data = values[0];
            var state = values[1];

            data.forEach(function(d) {
                d.capacity = d.capacity.replace(/,/g, '');
                d.storage = d.storage.replace(/,/g, '');
            });

            var datz = data.filter(function(d) { return d.state === state; });
           // var ndx = crossfilter(datz);
           // var all_capacities = ndx.dimension(function(d) { return d.reservoir; });
           // var each_res = all_capacities.top(Infinity);
            if(state === 'CA') {
                compare('#ca_capacities');
            } else {
                compare('#tx_capacities');
            }


            function compare(selector) {
            var res = _.uniq(datz, function(d) { return d.reservoir; });
            var total_capacity = d3.sum(_.pluck(res, 'capacity'));
            var total_storage = d3.sum(_.pluck(res, 'storage'));

            var chart = d3.selectAll(selector).append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom);

            // Create scales
            var xScale = d3.time.scale()
                .domain([
                    format(d3.min(datz, function(d) { return d.date; })),
                    format(d3.max(datz, function(d) { return d.date; }))
                ])
                .range([0, width]);

            var yScale = d3.scale.linear()
                .domain([total_capacity, 0])
                .range([0, height]);

            // Create Axis
            var xAxis = d3.svg.axis()
                .scale(xScale)
                .orient("bottom")
                .tickFormat(d3.time.format("%m/%d"));

            var yAxis = d3.svg.axis()
                .scale(yScale)
                .orient("left");

            chart.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate("+ margin.left + "," + (height + margin.top) + ")")
                .call(xAxis);

            chart.append("text")
                .attr("x", width / 2)
                .attr("y", height + margin.bottom)
                .style("text-anchor", "end")
                .text("Date");

            chart.append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                .call(yAxis);

            chart.append("text")
                .attr("transform", "rotate(-90)")
                .attr("x", -height/2)
                .attr("y", 6)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .text("Acre Feet");
            }
        });
    }

    return {
        restrict: 'C',
        link: link,
        scope: {
            'data': '=',
            'state': '@'
        }
    }
}]);

angular.module('westernWaterApp').directive('smallCharts', ['tipService', function(tipService) {
    function link(scope, element, attrs) {

    }

    return {
        restrict: 'C',
        link: link
    }
}]);