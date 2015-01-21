angular.module('westernWaterApp').directive('mapGraph', ['tipService', function(tipService) {
    function link(scope, element, attrs) {
        var height = 600,
            width = 800,
            graph_width = 500,
            margin = {top: 20, right: 40, left: 70, bottom: 80},
            format = d3.time.format("%d/%m/%Y").parse,
            projection = d3.geo.mercator()
                .translate([width / 2, height / 2])
                .scale([1]),
            path = d3.geo.path().projection(projection);

        scope.$watch('data', function(data) {
            if (!data) { return; }

            var map_svg = d3.select('#map').append('svg')
                .attr('height', height)
                .attr('width', width)
                .attr("transform", "translate(0,500)");

            var map = map_svg.append('g') .attr("transform", "translate(100,1500)");

            map.selectAll("path")
                .data(data.features)
                .enter()
                .append("path")
                .attr("d", path);

            // Create scales
            var xScale = d3.time.scale()
                .domain([format("1977-01-01"),format("2015-01-01")])
                .range([0, width]);

            var yScale = d3.scale.linear()
                .domain([d3.max(data, function(d) { return d.magnitude; }), 0])
                .range([0, height]);

            // Create Axis
            var xAxis = d3.svg.axis()
                .scale(xScale)
                .orient("bottom")
                .tickFormat(d3.time.format("%b %Y"));

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
        });
    }

    return {
        restrict: 'C',
        link: link
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