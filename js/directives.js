angular.module('westernWaterApp').directive('mapGraph', ['tipService', 'StatsService', 'chartService', function(tipService, StatsService, chartService) {
    function link(scope, element, attrs) {
        var margin = {top: 20, right: 130, left: 100, bottom: 80},
            height = 600 - margin.top - margin.bottom,
            width = 900 - margin.left - margin.right,
            graph_width = 550 - margin.left - margin.right,
            graph_height = 500 - margin.top - margin.bottom,
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
                        .scale(925)
                    .translate([width / 2, height / 2])
                    .precision(.1),
                path = d3.geo.path().projection(projection);

            var filtered = data.filter(function(d) { return d.reservoir === 'Shasta Dam'; });
            datz = chartService.histAvg(filtered, 'map-graph');

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
                    return 2.4;
               })
               .on("click", function (res) {
                    var filtered = data.filter(function(d) {
                        return d.reservoir === res.reservoir;
                    });

                    datz = chartService.histAvg(filtered, 'map-graph');

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
                if(d3.event.scale > 2) {
                    d3.selectAll('#map circle').attr("r", 1.5);
                }

            }

            /**
             * Chart
             */
            var xScale = d3.time.scale().range([0, graph_width]);
            xScale.domain([
                d3.min(datz, function(d) { return format(d.date); }),
                d3.max(datz, function(d) { return format(chartService.graphPadding()); })
            ]);

            var yScale = d3.scale.linear()
                .domain([d3.max(datz, function(d) { return d.capacity; }) * 1.2, 0])
                .range([0, graph_height]);

            var bisectDate = d3.bisector(function(d) { return format(d.date); }).right;

            // Create Axis
            var xAxis = d3.svg.axis()
                .scale(xScale)
                .orient("bottom");

            var yAxis = d3.svg.axis()
                 .scale(yScale)
                 .orient("left");

            chartService.legend('#res_legend');
            var chart = chartService.chart("#graph", graph_height, graph_width, margin, xAxis, yAxis, 'Acre Feet');

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
            var focus = chartService.focus(chart);

            chart.append("rect")
                .attr("class", "overlay")
                .attr("width", graph_width)
                .attr("height", graph_height)
                .on("mouseover", function() { focus.style("display", null); })
                .on("mouseout", function() { focus.style("display", "none"); })
                .on("mousemove", mousemove)
                .attr("transform", "translate(" + margin.left+ "," + margin.top + ")");


              var avg_storage = d3.svg.line()
                    .x(function(d) { return xScale(format(d.date)); })
                    .y(function(d) { return yScale(d.mean); });

              chart.append("g")
                   .append("path")
                   .attr("d", avg_storage(datz))
                   .attr("id", "avg_storage")
                   .attr("fill", "none")
                   .attr("stroke", "white")
                   .attr("stroke-width", 2)
                   .attr("stroke-dasharray", [5,5])
                   .attr("transform", "translate(" + margin.left + ",0)");

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
                 .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



            function chart_update(datz) {
                xScale.domain([
                    d3.min(datz, function(d) { return format(d.date); }),
                    d3.max(datz, function(d) { return format(chartService.graphPadding()); })
                ]);
                yScale.domain([d3.max(datz, function(d) { return d.capacity; }) * 1.2, 0]);

                d3.select("g.x").transition().duration(1000).ease("sin-in-out").call(xAxis);
                d3.select("g.y").transition().duration(1000).ease("sin-in-out").call(yAxis);
                d3.select("#storage").transition().duration(1000).ease("sin-in-out").attr("d", storage(datz));
                d3.select("#avg_storage").transition().duration(1200).ease("sin-in-out").attr("d", avg_storage(datz));
                d3.select("#capacity").transition().duration(1000).ease("sin-in-out").attr("d", capacity(datz));
                var res = datz[0];
                d3.select("#reservoir").text( res.reservoir + ', ' + res.state);
            }

            function dragged(d) {
                d3.event.sourceEvent.stopPropagation();
                d3.select(this).attr("x", d.x = d3.event.x).attr("y", d.y = d3.event.y);
            }

            function mousemove() {
                var x0 = xScale.invert(d3.mouse(this)[0]),
                    i = bisectDate(datz, x0, 1),
                    d0 = datz[i - 1],
                    d1 = datz[i];

                 if(d1 === undefined) d1 = Infinity;
                 var d = x0 - d0.date > d1.date - x0 ? d1 : d0;

                var res_transform = "translate(" + (xScale(format(d.date)) + margin.left) + "," + (yScale(d.storage) + margin.top) + ")";
                d3.select("circle.y0").attr("transform", res_transform);
                d3.select("text.y0").attr("transform", res_transform)
                    .tspans([
                        "Date: " + d.date,
                        "Vol: " + StatsService.numFormat(d.storage) + " acre ft",
                        "Pct Full: " + d.pct_capacity + "%"
                    ]);

                var cap_transform = "translate(" + (xScale(format(d.date)) + margin.left) + "," + (yScale(d.capacity) + margin.top) + ")";
                d3.select("#graph circle.y1").attr("transform", cap_transform);
                d3.select("#graph text.y1").attr("transform", cap_transform)
                    .tspans([
                        "Date: " + d.date,
                        "Capacity: " + StatsService.numFormat(d.capacity) + " acre ft"
                    ], -15);
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

angular.module('westernWaterApp').directive('totalsCharts', ['tipService', 'StatsService', 'chartService', function(tipService, StatsService, chartService) {
    function link(scope, element, attrs) {
        var margin = {top: 20, right: 130, left: 100, bottom: 80},
            width = 600 - margin.left - margin.right,
            height = 550 - margin.top - margin.bottom,
            format = d3.time.format("%m/%Y").parse;

        chartService.legend('#compare_legend', true);

        scope.$watchGroup(['data', 'state'], function(values) {
            if(!values[0]) { return; }

            var data = values[0];
            var state = values[1];

            var current_date = moment().subtract(1, 'month');
            var today = current_date.format('MM/YYYY');
            var today_words = current_date.format('MMMM YYYY');

            d3.select("#date").html('(for Month Ending '+ today_words + ')');

            if(state === 'CA') {
                compare('#ca_capacities');
            } else {
                compare('#tx_capacities');
            }

            function compare(selector) {
                var datz = data.filter(function(d) { return d.state === state; });
                var ndx = crossfilter(datz);

              //  var res = _.uniq(datz, function(d) { return d.reservoir; });
              //  var total_capacity = d3.sum(_.pluck(res, 'capacity'));

                var all_storage = ndx.dimension(function(d) { return d.date; });

                var capacity_total = all_storage.group().reduceSum(function(d) {
                    return d.capacity;
                });
                var each_capacity = capacity_total.top(Infinity).sort(function(a,b) {
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

                each_res.forEach(function(d) {
                    d.cap = _.find(each_capacity, function(e) { return d.key === e.key; }).value;
                });

                var todays_total = each_res.filter(function(d) {
                    return d.key === today;
                });
                var total_storage = d3.sum(_.pluck(todays_total, 'value'));
                var pct_capacity = Math.round(total_storage / each_capacity[each_capacity.length - 1].value * 100).toFixed(1);

                d3.select(selector + ' span').html('(' + pct_capacity + '% of full capacity)');

                // Create scales
                var bisectDate = d3.bisector(function(d) { return format(d.key); }).right;

                var xScale = d3.time.scale()
                    .domain([
                        format(d3.min(each_res, function(d) { return d.key; })),
                        format(d3.max(each_res, function(d) { return chartService.graphPadding(); }))
                    ])
                    .range([0, width]);

                var yScale = d3.scale.linear()
                    .domain([d3.max(each_capacity, function(d) { return d.value }) + 2500000, 0])
                    .range([0, height]);

                // Create Axis
                var xAxis = d3.svg.axis()
                    .scale(xScale)
                    .orient("bottom");

                var yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient("left");

                var chart = chartService.chart(selector, height, width, margin, xAxis, yAxis, 'Acre Feet');

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
                    .attr("stroke", "steelblue")
                    .attr("stroke-width", 2)
                    .attr("transform", "translate(" + margin.left + "," + margin.top +")");

                /**
                 * Show values on mouseover
                 */
                var focus = chartService.focus(chart);

                chart.append("rect")
                    .attr("class", "overlay")
                    .attr("width", width)
                    .attr("height", height)
                    .on("mouseover", function() { focus.style("display", null); })
                    .on("mouseout", function() { focus.style("display", "none"); })
                    .on("mousemove", mousemove)
                    .attr("transform", "translate(" + margin.left+ "," + margin.top + ")");

                var capacity = d3.svg.line()
                    .x(function(d) { return xScale(format(d.key)); })
                    .y(function(d) { return yScale(d.value); });

                chart.append("g")
                    .append("path")
                    .attr("d", capacity(each_capacity))
                    .attr("class", "capacity")
                    .attr("transform", "translate(" + margin.left + "," + margin.top +")");

                function mousemove() {
                    var x0 = xScale.invert(d3.mouse(this)[0]),
                        i = bisectDate(each_res, x0, 1),
                        d0 = each_res[i - 1],
                        d1 = each_res[i];

                    if(d1 === undefined) d1 = Infinity;
                    var d = x0 - d0.key > d1.key - x0 ? d1 : d0;

                    // Get total capacity for the month/year moused over
                    var total_cap = _.filter(each_capacity, function(g) { return g.key === d.key; });

                    var res_transform = "translate(" + (xScale(format(d.key)) + margin.left) + "," + (yScale(d.value) + margin.top) + ")";
                    d3.select(selector + " circle.y0").attr("transform", res_transform);
                    d3.select(selector + " text.y0").attr("transform", res_transform)
                        .tspans([
                            "Date: " + d.key,
                            "Vol: " + StatsService.numFormat(d.value) + " acre ft",
                            "Pct Full: " + (d.value / total_cap[0].value * 100).toFixed(1) + "%"
                        ]);

                    var cap_transform = "translate(" + (xScale(format(d.key)) + margin.left) + "," + (yScale(d.cap) + margin.top) + ")";
                    d3.select(selector + " circle.y1").attr("transform", cap_transform);
                    d3.select(selector + " text.y1").attr("transform", cap_transform)
                        .tspans([
                            "Date: " + d.key,
                            "Vol: " + StatsService.numFormat(d.cap) + " acre ft"
                        ], -15);
                }
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

angular.module('westernWaterApp').directive('stateGraph', ['tipService', 'StatsService', 'chartService', function(tipService, StatsService, chartService) {
    function link(scope, element, attrs) {
        var margin = {top: 20, right: 130, left: 100, bottom: 80},
            height = 675 - margin.top - margin.bottom,
            width = 900 - margin.left - margin.right,
            graph_width = 550 - margin.left - margin.right,
            graph_height = 500 - margin.top - margin.bottom,
            format = d3.time.format("%m/%Y").parse,
            tip = tipService.tipDiv();

        scope.$watchGroup(['map', 'stations', 'data', 'res', 'state'], function(values) {
            if (!values[0] || !values[1] || !values[2] || !values[3] || !values[4]) { return; }

            var map_data = values[0];
            var stations = values[1];
            var data = values[2];
            var res = values[3];
            var state = values[4];

            var filtered = data.filter(function(d) { return d.reservoir === res; });
            state_data = chartService.histAvg(filtered, 'map-graph');

            var scale = 1,
                projection = d3.geo.mercator()
                    .scale(scale)
                    .translate([width/2, height/2]),
                center = d3.geo.centroid(map_data),
                path = d3.geo.path().projection(projection);

            // using the path determine the bounds of the current map and use
            // these to determine better values for the scale and translation
            var bounds  = path.bounds(map_data);
            var hscale  = scale*width  / (bounds[1][0] - bounds[0][0]);
            var vscale  = scale*height / (bounds[1][1] - bounds[0][1]);
            scale   = (hscale < vscale) ? hscale : vscale;
        /*    var offset  = [width - (bounds[0][0] + bounds[1][0])/2,
                height - (bounds[0][1] + bounds[1][1])/2]; */

            var offset = (state === 'utah' || state === 'ca') ? 288 : 250;

            // new projection
            projection = d3.geo.mercator().center(center)
                .scale(scale / 1.15).translate([350, offset]);
            path = path.projection(projection);

            // Create scales
            var zoom = d3.behavior.zoom()
                .scaleExtent([1, 5])
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
                    if(state === 'ca') return 3.5;
                    return 5;
                })
                .on("click", function (res) {
                    var filtered = data.filter(function(d) {
                        return d.reservoir === res.reservoir;
                    });

                    state_data = chartService.histAvg(filtered, 'map-graph');
                    chart_update(state_data);
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
                if(d3.event.scale > 2) {
                    d3.selectAll('#map circle').attr("r", 5);
                }
            }

            function dragged(d) {
                d3.event.sourceEvent.stopPropagation();
                d3.select(this).attr("x", d.x = d3.event.x).attr("y", d.y = d3.event.y);
            }

            /**
             * Chart
             */
            var xScale = d3.time.scale().range([0, graph_width]);
            xScale.domain([
                d3.min(state_data, function(d) { return format(d.date); }),
                d3.max(state_data, function(d) { return format(chartService.graphPadding()); })
            ]);

            var yScale = d3.scale.linear()
                .domain([d3.max(state_data, function(d) { return d.capacity; }) * 1.2, 0])
                .range([0, graph_height]);

            var bisectDate = d3.bisector(function(d) { return format(d.date); }).right;

            // Create Axis
            var xAxis = d3.svg.axis()
                .scale(xScale)
                .orient("bottom");

            var yAxis = d3.svg.axis()
                .scale(yScale)
                .orient("left");

            chartService.legend('#res_legend');
            var chart = chartService.chart("#graph", graph_height, graph_width, margin, xAxis, yAxis, 'Acre Feet');

            d3.selectAll("g.x text").attr('transform', "rotate(35)")
                .attr('dx', 27)
                .attr('dy', 10);

            var storage = d3.svg.line()
                .x(function(d) { return xScale(format(d.date)); })
                .y(function(d) { return yScale(d.storage); });

            chart.append("path")
                .attr("d", storage(state_data))
                .attr("id", "storage")
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 2)
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            var avg_storage = d3.svg.line()
                .x(function(d) { return xScale(format(d.date)); })
                .y(function(d) { return yScale(d.mean); });

            chart.append("g")
                .append("path")
                .attr("d", avg_storage(state_data))
                .attr("id", "avg_storage")
                .attr("fill", "none")
                .attr("stroke", "white")
                .attr("stroke-width", 2)
                .attr("stroke-dasharray", [5,5])
                .attr("transform", "translate(" + margin.left + ",0)");

            var capacity = d3.svg.line()
                .x(function(d) { return xScale(format(d.date)); })
                .y(function(d) { return yScale(d.capacity); });

            chart.append("g")
                .append("path")
                .attr("d", capacity(state_data))
                .attr("id", "capacity")
                .attr("fill", "none")
                .attr("stroke", "green")
                .attr("stroke-width", 2)
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            /**
             * Show values on mouseover
             */
            var focus = chartService.focus(chart);

            chart.append("rect")
                .attr("class", "overlay")
                .attr("width", graph_width)
                .attr("height", graph_height)
                .on("mouseover", function() { focus.style("display", null); })
                .on("mouseout", function() { focus.style("display", "none"); })
                .on("mousemove", mousemove)
                .attr("transform", "translate(" + margin.left+ "," + margin.top + ")");

            function chart_update(datz) {
                xScale.domain([
                    d3.min(datz, function(d) { return format(d.date); }),
                    d3.max(datz, function(d) { return format(chartService.graphPadding()); })
                ]);
                yScale.domain([d3.max(datz, function(d) { return d.capacity; }) * 1.2, 0]);

                d3.select("g.x").transition().duration(1000).ease("sin-in-out").call(xAxis);
                d3.select("g.y").transition().duration(1000).ease("sin-in-out").call(yAxis);
                d3.select("#storage").transition().duration(1000).ease("sin-in-out").attr("d", storage(datz));
                d3.select("#avg_storage").transition().duration(1000).ease("sin-in-out").attr("d", avg_storage(datz));
                d3.select("#capacity").transition().duration(1000).ease("sin-in-out").attr("d", capacity(datz));
                var res = datz[0];
                d3.select("#reservoir").text( res.reservoir + ', ' + state);
            }

            function mousemove() {
                var x0 = xScale.invert(d3.mouse(this)[0]),
                    i = bisectDate(state_data, x0, 1),
                    d0 = state_data[i - 1],
                    d1 = state_data[i];

                if(d1 === undefined) d1 = Infinity;
                var d = x0 - d0.date > d1.date - x0 ? d1 : d0;

                var res_transform = "translate(" + (xScale(format(d.date)) + margin.left) + "," + (yScale(d.storage) + margin.top) + ")";
                d3.select("circle.y0").attr("transform", res_transform);
                d3.select("text.y0").attr("transform", res_transform)
                    .tspans([
                        "Date: " + d.date,
                        "Vol: " + StatsService.numFormat(d.storage) + " acre ft",
                        "Pct Full: " + d.pct_capacity + "%"
                    ]);

                var cap_transform = "translate(" + (xScale(format(d.date)) + margin.left) + "," + (yScale(d.capacity) + margin.top) + ")";
                d3.select("#graph circle.y1").attr("transform", cap_transform);
                d3.select("#graph text.y1").attr("transform", cap_transform)
                    .tspans([
                        "Date: " + d.date,
                        "Capacity: " + StatsService.numFormat(d.capacity) + " acre ft"
                    ], -15);
            }

        });
     }

    return {
        restrict: 'C',
        link: link,
        scope: {
            'map': '=',
            'data': '=',
            'stations': '=',
            'res': '@',
            'state': '@'
        }
    }
}]);

angular.module('westernWaterApp').directive('snowCharts', ['StatsService', 'chartService', 'tipService', function(StatsService, chartService, tipService) {
    function link(scope, element, attrs) {
        var margin = {top: 20, right: 150, left: 100, bottom: 80},
            width = 1250 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom,
            format = d3.time.format("%m/%Y").parse,
            tip = tipService.tipDiv();

        scope.$watchGroup(['snowdata', 'state'], function(values) {
            if(!values[0]) { return; }

            var data = values[0];
            var state = values[1];

            // Process and format data
            var snow = d3.nest()
                .key(function(d) { return d.date; })
                .rollup(function(values) { return d3.mean(values, function(d) {return +d.snow_water_equivalent; }) })
                .map(data);

            var snow_keys = _.keys(snow);
            var snow_water = [];

            snow_keys.forEach(function(d) {
               snow_water.push({key: d, value: snow[d]});
            });

            snow_water = chartService.histAvg(snow_water);

            snow_water.sort(function(a,b) {
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

            // Create scales
            var xScale = d3.time.scale()
                .domain([
                    d3.min(snow_water, function(d) { return format(d.key); }),
                    d3.max(snow_water, function(d) { return format(d.key); })
                ])
                .range([0, width]);

            var yScale = d3.scale.linear()
                .domain([d3.max(snow_water, function(d) { return d.value; }), 0])
                .range([0, height]);

            // Create Axis
            var xAxis = d3.svg.axis()
                .scale(xScale)
                .orient("bottom");

            var yAxis = d3.svg.axis()
                .scale(yScale)
                .orient("left");

            var chart = chartService.chart('#snow_level', height, width, margin, xAxis, yAxis, 'Snow Water Equivalent (inches)');

            var snow_level = d3.svg.line()
                .x(function(d) { return xScale(format(d.key)); })
                .y(function(d) { return yScale(d.value); });

            chart.append("g")
                .append("path")
                .attr("d", snow_level(snow_water))
                .attr("class", "snow")
                .attr("transform", "translate(" + margin.left + "," + margin.top +")");

            var snow_avg = d3.svg.line()
                .x(function(d) { return xScale(format(d.key)); })
                .y(function(d) { return yScale(d.mean); });

            chart.append("g")
                .append("path")
                .attr("d", snow_avg(snow_water))
                .attr("class", "snow_avg")
                .attr("transform", "translate(" + margin.left + "," + margin.top +")")
                .style("stroke-dasharray", "5,5");

            var focus = chartService.focus(chart, true);

            chart.append("rect")
                .attr("class", "overlay")
                .attr("width", width)
                .attr("height", height)
                .on("mouseover", function() { focus.style("display", null); })
                .on("mouseout", function() { focus.style("display", "none"); })
                .on("mousemove", mousemove)
                .attr("transform", "translate(" + margin.left+ "," + margin.top + ")");

            var bisectDate = d3.bisector(function(d) { return format(d.key); }).right;

            function mousemove() {
                var x0 = xScale.invert(d3.mouse(this)[0]),
                    i = bisectDate(snow_water, x0, 1),
                    d0 = snow_water[i - 1],
                    d1 = snow_water[i];
                if(d1 === undefined) d1 = Infinity;
                var d = x0 - d0.key > d1.key - x0 ? d1 : d0;
                var res_transform = "translate(" + (xScale(format(d.key)) + margin.left) + "," + (yScale(d.value) + margin.top) + ")";
                d3.select("#snow_level circle.y0").attr("transform", res_transform);
                d3.select("#snow_level text.y0").attr("transform", res_transform)
                    .tspans([
                        "Date: " + d.key,
                        "Snow Water Eqv: " + d.value.toFixed(1) + " inches"
                    ]);
            }
        });
    }

    return {
        restrict: 'C',
        link: link,
        scope: {
            'snowdata': '=',
            'state': '@'
        }
    }
}]);