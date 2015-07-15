var reservoir_names = [
    "Upper Klamath",
    "Gerber",
    "Clear Lk   Klamath R",
    "Dwinnell",
    "Trinity Lake",
    "Lewiston",
    "Lake Pillsbury",
    "Lake Mendocino",
    "Warm Springs",
    "Soulajule Dam",
    "Nicasio",
    "Kent",
    "Alpine Lake",
    "Lake Hennessey",
    "Briones Dam",
    "U San Leandro",
    "Chabot",
    "Del Valle",
    "San Antonio Reservoir",
    "Calaveras",
    "Lexington Reservoir",
    "Leroy Anderson",
    "Coyote Res Sta Clara",
    "Lower Crystal Springs Reservoir",
    "San Pablo",
    "San Andreas",
    "Lake San Antonio",
    "Whale Rock",
    "Santa Margarita Lake",
    "Nacimiento",
    "Lake Jennings",
    "Twitchell",
    "Cachuma Lake",
    "Gibraltar Dam",
    "Matilija Dam",
    "Casitas",
    "Pyramid",
    "Bouquet Canyon",
    "Castaic",
    "Lake Piru",
    "Cogswell Reservoir",
    "San Gabriel",
    "Lake Mathews",
    "Perris",
    "Lake Hemet",
    "Bear Valley Dam",
    "Santiago Creek Res",
    "Railroad Canyon",
    "Diamond Valley",
    "Vail Lake",
    "Sutherland Reservoir",
    "Lake Hodges",
    "Skinner",
    "Henshaw",
    "Cuyamaca Dam",
    "San Vicente",
    "Miramar",
    "El Capitan Dam",
    "Murray Res",
    "Morena Dam",
    "Barrett",
    "Loveland Reservoir",
    "Sweetwater Reservoir",
    "Lower Otay",
    "Shasta Dam",
    "Keswick Reservoir",
    "Whiskeytown Dam",
    "Lake Mccloud",
    "Iron Canyon",
    "Lake Britton",
    "Black Butte",
    "Stony Gorge Reservoir",
    "East Park Reservoir",
    "Mountain Meadows",
    "Lake Almanor",
    "Butt Valley",
    "Antelope Lake",
    "Bucks Lake Storage",
    "Lake Davis",
    "Frenchman Dam",
    "Little Grass Valley",
    "Sly Creek",
    "Oroville Dam",
    "Thermalito  Total",
    "Bowman Lake",
    "Lake Spaulding S Yuba System",
    "French Lake",
    "New Bullards Bar",
    "Scotts Flat",
    "Englebright",
    "Rollins",
    "Bear River At Camp Far West Dam",
    "French Meadows",
    "Hell Hole",
    "Loon Lake",
    "Union Valley",
    "Ice House",
    "Slab Creek",
    "Caples Lake",
    "Folsom Lake",
    "Lake Natoma",
    "Indian Valley",
    "Clear Lk   Cache Creek",
    "Berryessa",
    "Los Vaqueros Reservoir",
    "Jenkinson Lake",
    "Lower Bear",
    "Salt Springs",
    "Pardee",
    "Camanche Reservoir",
    "New Hogan Lake",
    "Spicer Meadows",
    "Donnells",
    "Relief",
    "Beardsley Lake",
    "Strawberry",
    "New Melones Reservoir",
    "Tulloch",
    "Cherry Lake",
    "Lake Eleanor",
    "Hetch Hetchy",
    "Don Pedro Reservoir",
    "Modesto Reservoir",
    "Turlock Lake",
    "Lake Mcclure",
    "Buchanan Dam",
    "Hidden Dam",
    "Thomas A Edison",
    "Mammoth Pool",
    "Crane Valley",
    "Florence Lake",
    "Huntington Lake",
    "Shaver Lake",
    "Redinger Lake",
    "Friant Dam",
    "San Luis Reservoir",
    "Oneill Forebay",
    "San Luis Reservoir",
    "Los Banos",
    "Courtright",
    "Wishon",
    "Pine Flat Dam",
    "Terminus Dam",
    "Success Dam",
    "Isabella Dam",
    "Stampede",
    "Boca Reservoir",
    "Prosser Creek Reservoir",
    "Lake Tahoe",
    "Bridgeport Reservoir",
    "Saddlebag Lake Reservoir",
    "Grant Lake",
    "Gem  Lake",
    "Lake Crowley",
    "South Lake",
    "Tinemaha Reservoir",
    "Haiwee",
    "Lake Silverwood",
    "Abilene",
    "Addicks",
    "Alan Henry",
    "Amistad",
    "Amon G Carter",
    "Aquilla",
    "Arlington",
    "Arrowhead",
    "Athens",
    "Austin",
    "B A Steinhagen",
    "Bardwell",
    "Belton",
    "Benbrook",
    "Bob Sandlin",
    "Bonham",
    "Brady Creek",
    "Bridgeport",
    "Brownwood",
    "Buchanan",
    "Caddo",
    "Canyon",
    "Cedar Creek",
    "Champion Creek",
    "Choke Canyon",
    "Cisco",
    "Coleman",
    "Coleto Creek",
    "Colorado City",
    "Conroe",
    "Corpus Christi",
    "Crook",
    "Cypress Springs",
    "E V Spence",
    "Eagle Mountain",
    "Elephant Butte",
    "Falcon",
    "Fork",
    "Fort Phantom Hill",
    "Georgetown",
    "Graham",
    "Granbury",
    "Granger",
    "Grapevine",
    "Greenbelt",
    "Halbert",
    "Hords Creek",
    "Houston",
    "Houston County",
    "Hubbard Creek",
    "Hubert H Moss",
    "Inks",
    "J B Thomas",
    "Jacksonville",
    "Jim Chapman",
    "Joe Pool",
    "Kemp",
    "Kickapoo",
    "Lake O The Pines",
    "Lavon",
    "Leon",
    "Lewisville",
    "Limestone",
    "Livingston",
    "Lost Creek",
    "Lyndon B Johnson",
    "Mackenzie",
    "Martin",
    "Medina",
    "Meredith",
    "Millers Creek",
    "Mineral Wells",
    "Monticello",
    "Mountain Creek",
    "Murvaul",
    "Nacogdoches",
    "Natural Dam",
    "Navarro Mills",
    "New Terrell City",
    "Nocona",
    "North Fork Buffalo Creek",
    "O C Fisher",
    "O H Ivie",
    "Oak Creek",
    "Palestine",
    "Palo Duro",
    "Palo Pinto",
    "Pat Cleburne",
    "Pat Mayse",
    "Possum Kingdom",
    "Proctor",
    "Ray Hubbard",
    "Ray Roberts",
    "Red Bluff",
    "Richland Chambers",
    "Sam Rayburn",
    "Somerville",
    "Squaw Creek",
    "Stamford",
    "Stillhouse Hollow",
    "Sulphur Springs",
    "Sweetwater",
    "Tawakoni",
    "Texana",
    "Texoma",
    "Toledo Bend",
    "Travis",
    "Twin Buttes",
    "Tyler",
    "Waco",
    "Waxahachie",
    "Weatherford",
    "White River",
    "Whitney",
    "Worth",
    "Wright Patman",
    "Big Sandy",
    "Blue Mesa",
    "Caballo",
    "Causey",
    "Crystal",
    "Currant Creek",
    "Deer Creek",
    "Echo",
    "Vallecito",
    "Moon Lake",
    "Lake Powell",
    "Flaming Gorge",
    "Rifle Gap",
    "Rockport",
    "Scofield",
    "Taylor Park",
    "Fontenelle",
    "Hyrum",
    "Jackson Gulch",
    "Steinaker",
    "Santa Rosa",
    "Lemon",
    "Morrow Point",
    "Navajo",
    "Starvation",
    "Vega",
    "Upper Stillwater",
    "Strawberry",
    "Stateline",
    "Silver Jack",
    "Ridgway",
    "Red Fleet",
    "Pineview",
    "Paonia",
    "Newton",
    "Meeks Cabin",
    "McPhee",
    "Lost Creek",
    "Lake Sumner",
    "Jordanelle",
    "Joes Valley",
    "Huntington North",
    "Elephant Butte",
    "Fruitgrowers",
    "East Canyon",
    "Lake Mohave",
    "Lake Havasu",
    "Lake Mead",
    "Agate",
    "American Falls",
    "Anderson Ranch",
    "Arrowrock",
    "Beulah",
    "Banks Lake",
    "Bully Creek",
    "Cold Springs",
    "Crane Prairie",
    "Crescent Lake",
    "Lake Cascade",
    "Deadwood",
    "Emigrant Lake",
    "Black Canyon",
    "Fish Lake",
    "Fourmile Lake",
    "Grand Coulee/FDR Lake",
    "Grassy Lake",
    "Haystack",
    "Howard Prairie Lake",
    "Hyatt",
    "Island Park",
    "Jackson Lake",
    "Lake Lowell",
    "Lucky Peak Lake",
    "Mann Creek",
    "McKay",
    "Milner",
    "Lake Walcott",
    "Ochoco",
    "Lake Owyhee",
    "Palisades",
    "Phillips Lake",
    "Prineville",
    "Reservoir A",
    "Ririe Lake",
    "Henry Hagg Lake",
    "Soldiers Meadow",
    "Thief Valley",
    "Unity",
    "Warm Springs",
    "Clear Lake",
    "Wickiup",
    "Wildhorse",
    "Little Wood",
    "Horseshoe",
    "San Carlos",
    "C. C. Cragin",
    "Bartlett",
    "Lyman Lake",
    "Roosevelt",
    "Horse Mesa",
    "Mormon Flat",
    "Stewart Mtn",
    "Henrys Lake",
    "Dillon",
    "Williams Fork",
    "Antero",
    "Cheesman",
    "Eleven Mile",
    "Gross",
    "Marston",
    "Lake Coeur D'Alene",
    "Lake Pend Oreille",
    "Priest Lake",
    "Dworshak",
    "Magic",
    "Blackfoot",
    "Oakley",
    "Salmon Falls",
    "Brownlee",
    "Bear Lake",
    "Montpelier",
    "Conconully",
    "Lake Chelan",
    "Keechelus",
    "Kachess",
    "Cle Elum",
    "Bumping Lake",
    "Rimrock",
    "Ross",
    "Diablo",
    "Wallowa Lake",
    "Wolf Creek",
    "Willow Creek",
    "Clear Lake",
    "Blue River",
    "Cottage Grove",
    "Cougar",
    "Detroit",
    "Dorena",
    "Fall Creek",
    "Fern Ridge",
    "Foster",
    "Applegate",
    "Lost Creek",
    "Cottonwood",
    "Abiquiu",
    "Bluewater Lake",
    "Brantley Lake",
    "Cochiti Lake",
    "Conchas Lake",
    "Costilla",
    "Eagle Nest Lake",
    "El Vado",
    "Heron",
    "Lake Avalon",
    "Lahontan",
    "Rye Patch",
    "Big Sand Wash",
    "Cleveland Lake",
    "Grantsville",
    "Gunlock",
    "Gunnison",
    "Ken's Lake",
    "Kolob",
    "Lower Enterprise",
    "Miller Flat",
    "Millsite",
    "Minersville",
    "Otter Creek",
    "Panguitch Lake",
    "Piute",
    "Porcupine",
    "Quail Creek",
    "Sand Hollow",
    "Sevier Bridge",
    "Smith And Morehouse",
    "Upper Enterprise",
    "Utah Lake",
    "Willard Bay",
    "Woodruff Creek",
    "Woodruff Narrows",
    "Bull Lake",
    "Boysen",
    "Pilot Butte",
    "Buffalo Bill",
    "Keyhole",
    "Seminoe",
    "Pathfinder",
    "Alcova",
    "Glendo",
    "Guernsey",
    "High Savery",
    "Viva Naughton",
    "Wheatland #2",
    "Adobe Creek",
    "Barr Lake",
    "Boyd Lake",
    "Carter Lake",
    "Clear Creek",
    "Cobb Lake",
    "Continental",
    "Crawford",
    "Cucharas",
    "Empire",
    "Fossil Creek",
    "Green Mtn",
    "Groundhog",
    "Homestake",
    "Horse Creek",
    "Horsecreek",
    "Horsetooth",
    "Jackson Gulch",
    "Jackson Lk",
    "John Martin",
    "Julesberg",
    "Lake Granby",
    "Lake Loveland",
    "Marshall",
    "Meredith Reservoir",
    "Milton",
    "Mountain Home",
    "Narraguinnep",
    "Platoro",
    "Point Of Rocks",
    "Prewitt",
    "Pueblo",
    "Ralph Price",
    "Rio Grande",
    "Riverside",
    "Ruedi",
    "Sanchez",
    "Santa Maria",
    "Shadow Mountain",
    "Spinney Mountain",
    "Stagecoach",
    "Standley",
    "Terrace",
    "Trinidad Lake",
    "Turquoise Lake",
    "Twin Lakes",
    "Union",
    "Windsor",
    "Wolford Mountain"
];

angular.module('westernWaterApp').service('LoadService', function() {
    this.data_load = function($scope, map_path, stations_path, data_path, snow_path) {
        $scope.graphloading = true;
        $scope.graphloaded = false;

        d3.json(map_path, function(map_data) {
            $scope.map_data = map_data;

            d3.csv(stations_path, function(stations) {
                $scope.stations = stations;
                $scope.$apply();
            });

            d3.csv(data_path, function(data) {
                $scope.data = data;

                if(!snow_path) {
                    $scope.graphloading = false;
                    $scope.graphloaded = true;
                }
                $scope.$apply();
            });

            if(snow_path) {
                $scope.graphloading = true;
                $scope.graphloaded = false;

                d3.csv(snow_path, function(data) {
                    $scope.snowdata = data;
                    $scope.graphloading = false;
                    $scope.graphloaded = true;
                    $scope.$apply();
                });
            }

            $scope.$apply();
        });
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
            .style("top", (d3.event.pageY-38)+"px")
            .style("left", (d3.event.pageX-38)+"px");

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

    this.legend = function(selector, is_map, check) {
        var compare = document.querySelectorAll('#compare_legend .legend');
        if(check && compare.length) return;

        var keys, colors, width;
        if(is_map) {
            keys = ['75%+', '50%+', 'Less than 50%  ', 'Current Level Unavailable'];
            colors = ['green', '#FCE883', 'red', 'gray'];
            width = 450;
        } else {
            keys = ['Capacity', 'Avg Levels', 'Current Storage'];
            colors = ['green', '#FCE883', 'steelblue'];
            width = 300;
        }

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

    this.resColors = function(d) {
        if(d >= 75) {
            return 'green';
        } else if (d >= 50) {
            return '#FCE883';
        } else if (d < 50) {
            return 'red';
        } else {
            return 'lightgray';
        }
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

        if(!single) {
            focus.append("circle")
                .attr("class", "y1")
                .attr("r", 4.5);

            focus.append("text")
                .attr("class", "y1")
                .attr("x", 9)
                .attr("dy", ".35em");
        }

        return focus;
    };

    this.graphPadding = function(formatting) {
        var graph_padding = moment().add(8, 'month');
        var date_string = (formatting !== undefined) ? 'MM/YY' : 'MM/YYYY';

        return graph_padding.format(date_string);
    };

    this.rotate = function() {
        d3.selectAll("g.x text").attr('transform', "rotate(35)")
            .attr('dx', 27)
            .attr('dy', 10);
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

    this.displayMonth = function() {
        var current_date = moment().subtract(1, 'month');
        var today = current_date.format('MM/YYYY');
        return current_date.format('MMMM YYYY');
    };

    this.mapPctFull = function(data, stations, key_used) {
        var sorted = d3.nest()
            .key(function(d) {
                var res = (!key_used) ? d.reservoir : reservoir_names[d.reservoir];
                return res;
            })
            .map(data);

        stations.forEach(function(d) {
            var res_total = _.last(sorted[d.reservoir]); //console.log(res_total)
         //   if(res_total === undefined) console.log(d.reservoir)
            d.pct_capacity = (res_total !== undefined) ? res_total.pct_capacity : undefined;
            d.capacity = (res_total !== undefined) ? res_total.capacity : undefined;
        });

        return stations;
    };

    this.mapScale = function(data, state) {
        var vals;

        if(state === 'CA') {
            vals = [2, 7];
        } else {
            vals = [3, 8];
        }
        return d3.scale.linear()
            .domain(d3.extent(data, function(d) { return d.capacity * .2; }))
            .range(vals);
    };
});