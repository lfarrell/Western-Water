angular.module('westernWaterApp').directive('mapGraph', ['tipService', function(tipService) {
    function link(scope, element, attrs) {
        var margin = {top: 20, right: 40, left: 100, bottom: 80},
            height = 600 - margin.top - margin.bottom,
            width = 800,
            graph_width = 400 - margin.left - margin.right,
            format = d3.time.format("%m/%d/%Y").parse,
            projection = d3.geo.albers()
                .rotate([96, 0])
                .center([-.6, 38.7])
                .parallels([29.5, 45.5])
                .scale(1000)
                .translate([width / 2, height / 2])
                .precision(.1),
            path = d3.geo.path().projection(projection);

        scope.$watchGroup(['map', 'data'], function(values) {
            if (!values[0] || !values[1]) { return; }

            var map_data = values[0];
            var data = values[1];

            data.forEach(function(d) {
                d.capacity = d.capacity.replace(/,/g, '');
                d.storage = d.storage.replace(/,/g, '');
            });

            var ndx = crossfilter(data);
            var datz = data.filter(function(d) { return d.reservoir === 'SHASTA'; });
            console.log(datz)

            var map_svg = d3.select('#map').append('svg')
                .attr('height', height)
                .attr('width', width);

            var map = map_svg.append('g');//.attr("transform", "translate(850,50)");

            map.selectAll("path")
                .data(map_data.features)
                .enter()
                .append("path")
                .attr("d", path);

            // Create scales
            var xScale = d3.time.scale()
                .domain([format("01/15/2015"),format("01/25/2015")])
                .range([0, width]);

            var yScale = d3.scale.linear()
                .domain([d3.max(datz, function(d) { return d.capacity; }), 0])
                .range([0, height]);

            // Create Axis
            var xAxis = d3.svg.axis()
                .scale(xScale)
                .orient("bottom")
               // .tickFormat(d3.time.format("%b %Y"));

            var yAxis = d3.svg.axis()
                .scale(yScale)
                .orient("left");

            var chart = d3.select("#graph").append("svg")
                .attr("width", graph_width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom);

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
                .attr("x", -height /2)
                .attr("y", 6)
                .attr("dy", ".71em")
                .style("text-anchor", "end")
                .text("Acre Feet");

            chart.selectAll("rect")
                .data(datz)
                .enter()
                .append("rect")
                .attr("x", function(d) {
                    return xScale(format(d.date));
                })
                .attr("y", function(d) {
                    var store = d.storage;
                 //   if(isNaN(d.storage)) { store = +d.storage; }
                    return height - yScale(store);
                })
                .attr("width", 25)
                .attr("height", function(d) {
                    var store = +d.storage;
                    return yScale(store);
                })
                .attr("fill", "steelblue")
        });
    }

    return {
        restrict: 'C',
        link: link,
        scope: {
            'map': '=',
            'data': '='
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