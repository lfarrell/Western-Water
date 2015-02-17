angular.module('westernWaterApp').directive('mapGraph', ['tipService', 'StatsService', 'chartService', function(tipService, StatsService, chartService) {
    function link(scope, element, attrs) {
        var margin = {top: 20, right: 40, left: 100, bottom: 80},
            height = 600 - margin.top - margin.bottom,
            width = 800,
            graph_width = 525 - margin.left - margin.right,
            graph_height = 525 - margin.top - margin.bottom,
            format = d3.time.format("%m/%Y").parse,
            tip = tipService.tipDiv();

        scope.$watchGroup(['map', 'stations', 'data'], function(values) {
            if (!values[0] || !values[1] || !values[2]) { return; }

            var map_data = values[0];
            var stations = values[1];
            var data = values[2];

            var projection = d3.geo.albers()
                    .rotate([96, 0])
                    .center([-.6, 38.7])
                    .parallels([29.5, 45.5])
                    .scale(1000)
                    .translate([width / 2, height / 2])
                    .precision(.1),
                path = d3.geo.path().projection(projection);

         //   var ndx = crossfilter(data);
            datz = data.filter(function(d) { return d.reservoir === 'Shasta Dam'; });
            scope.reservoir = 'Shasta Dam, CA';

            // Create scales
            var xScale = d3.time.scale().range([0, graph_width]);
            xScale.domain([
                    format(d3.min(data, function(d) { return d.date; })),
                    format(d3.max(data, function(d) { return d.date; }))
                ]);

            var yScale = d3.scale.linear()
                .domain([d3.max(datz, function(d) { return d.capacity ; }) * 1.2, 0])
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
                    datz = data.filter(function(d) {
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

            /**
             * Chart
             */
            var bisectDate = d3.bisector(function(d) { return format(d.date); }).left;

            // Create Axis
            var xAxis = d3.svg.axis()
                .scale(xScale)
                .orient("bottom");

            var yAxis = d3.svg.axis()
                 .scale(yScale)
                 .orient("left");

            var chart = chartService.chart(graph_height, graph_width, margin, xAxis, yAxis);

            d3.selectAll("g.x text").attr('transform', "rotate(35)")
              .attr('dx', 27)
              .attr('dy', 10);

            var storage = d3.svg.line()
                  .x(function(d) { return xScale(format(d.date)); })
                  .y(function(d) { return yScale(d.storage); });

            chart.append("path")
                 .attr("d", storage(datz))
                 .attr("id", "storage")
                 .attr("fill", "none")
                 .attr("stroke", "steelblue")
                 .attr("stroke-width", 2)
                 .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            /**
             * Show values on mouseover
             */
            var focus = chart.append("g")
                .attr("class", "focus")
                .style("display", "none");

            focus.append("circle")
                .attr("r", 4.5);

            focus.append("text")
                .attr("x", 9)
                .attr("dy", ".35em");

            chart.append("rect")
                .attr("class", "overlay")
                .attr("width", graph_width)
                .attr("height", graph_height)
                .on("mouseover", function() { focus.style("display", null); })
                .on("mouseout", function() { focus.style("display", "none"); })
                .on("mousemove", mousemove)
                .attr("transform", "translate(" + margin.left+ "," + margin.top + ")");


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
                yScale.domain([d3.max(datz, function(d) { return d.capacity; }) * 1.2, 0]);

                d3.select("g.x").transition().duration(1200).ease("sin-in-out").call(xAxis);
                d3.select("g.y").transition().duration(1200).ease("sin-in-out").call(yAxis);
                d3.select("#storage").transition().duration(1200).ease("sin-in-out").attr("d", storage(datz));
           //     d3.select("#avg_storage").transition().duration(1200).ease("sin-in-out").attr("d", avg_storage(datz));
                d3.select("#capacity").transition().duration(1200).ease("sin-in-out").attr("d", capacity(datz));
                var res = datz[0];
                d3.select("#reservoir").text( res.reservoir + ', ' + res.state);
                d3.select("rect").on("mousemove", mousemove);
            }

            function dragged(d) {
                d3.event.sourceEvent.stopPropagation();
                d3.select(this).attr("x", d.x = d3.event.x).attr("y", d.y = d3.event.y);
            }

            function mousemove() {
                var x0 = xScale.invert(d3.mouse(this)[0]),
                    i = bisectDate(datz, x0, 1),
                    d0 = datz[i - 1],
                    d1 = datz[i],
                    d = x0 - d0.date > d1.date - x0 ? d1 : d0;
                focus.attr("transform", "translate(" + (xScale(format(d.date)) + margin.left) + "," + (yScale(d.storage) + margin.top) + ")");
                focus.select("text").text("Vol on (" + d.date + "): " + StatsService.numFormat(d.storage) + " acre feet");
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
            format = d3.time.format("%m/%Y").parse;

        scope.$watchGroup(['data', 'state'], function(values) {
            if(!values[0]) { return; }

            var data = values[0];
            var state = values[1];

            var current_date = moment().subtract(1, 'month');
            var today = current_date.format('MM/YYYY');
            var today_words = current_date.format('MMMM Do YYYY');

            d3.select("#date").html('('+ today_words + ')');

            if(state === 'CA') {
                compare('#ca_capacities');
            } else {
                compare('#tx_capacities');
            }

            function compare(selector) {
                var datz = data.filter(function(d) { return d.state === state; });
                var res = _.uniq(datz, function(d) { return d.reservoir; });
                var total_capacity = d3.sum(_.pluck(res, 'capacity'));

                var ndx = crossfilter(datz);
                var all_storage = ndx.dimension(function(d) { return d.date; });
                var storage_total = all_storage.group().reduceSum(function(d) {
                    return d.storage;
                });
                var each_res = storage_total.top(Infinity).sort(function(a,b) {
                    var date_one_parts = a.key.split('/');
                    var date_two_parts = b.key.split('/');
                    var date_one = new Date(date_one_parts[1], date_one_parts[0] - 1);
                    var date_two = new Date(date_two_parts[1], date_two_parts[0] - 1);

                    if(date_one < date_two) {
                        return -1;
                    } else if(date_one > date_two) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
              //  console.log(each_res)

                var todays_total = each_res.filter(function(d) {
                    return d.key === today;
                });
                var total_storage = d3.sum(_.pluck(todays_total, 'value'));
                var pct_capacity = Math.round(total_storage / total_capacity * 100).toFixed(1);

                d3.select(selector + ' span').html('(' + pct_capacity + '% of full capacity)');

                var chart = d3.selectAll(selector).append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom);

                // Create scales
                var xScale = d3.time.scale()
                    .domain([
                        format(d3.min(each_res, function(d) { return d.key; })),
                        format(d3.max(each_res, function(d) { return d.key; }))
                    ])
                    .range([0, width]);

                var yScale = d3.scale.linear()
                    .domain([total_capacity + 2500000, 0])
                    .range([0, height]);

                // Create Axis
                var xAxis = d3.svg.axis()
                    .scale(xScale)
                    .orient("bottom");

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

                var storage = d3.svg.line()
                    .x(function(d) { return xScale(format(d.key)); })
                    .y(function(d) {
                        return yScale(d.value);
                    });

                chart.append("g")
                    .append("path")
                    .attr("d", storage(each_res))
                    .attr("class", "storage")
                    .attr("fill", "none")
                    .attr("stroke", "firebrick")
                    .attr("stroke-width", 2)
                    .attr("transform", "translate(" + margin.left + ",0)");

                var capacity = d3.svg.line()
                    .x(function(d) { return xScale(format(d.date)); })
                    .y(function(d) { return yScale(total_capacity); });

                chart.append("g")
                    .append("path")
                    .attr("d", capacity(datz))
                    .attr("class", "capacity")
                    .attr("transform", "translate(" + margin.left + ",0)");
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