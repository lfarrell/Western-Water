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
    "Jackson Gulch Reservoir",
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
    "Lost Creek Reservoir",
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
    "Warm Springs Reservoir",
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
    "Applegate",
    "Lost Creek Res",
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
            .duration(100)
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
    var self = this;

    self.chart = function(selector, graph_height, graph_width, margin, xAxis, yAxis, y_text) {
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

    self.legend = function(selector, is_map, check) {
        var compare = document.querySelectorAll('#compare_legend .legend');
        if(check && compare.length) return;

        var keys, colors, width, classes;
        if(is_map) {
            keys = ['75%+', '50%+', 'Less than 50%  ', 'Current Level Unavailable'];
            colors = ['green', '#FCE883', 'red', 'gray'];
            classes = '.full,.low,.okay,.unavailable';
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
            .append('g')
            .attr("width", width)
            .each(function(d, i) {
                var g = d3.select(this);
                g.attr("class", colors[i] + " legend_value")

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
            }).on("mouseover", function(d) {
                if(is_map) {
                    var selected_class = self.resColorClass(d3.select(this).attr('class'));
                    var hidden = classes.replace('.'+ selected_class + ',', '');

                    d3.selectAll(hidden).style('opacity', 0);
                }

            })
            .on("mouseout", function(d) {
               if(is_map) {
                   d3.selectAll(classes).style('opacity', 0.7);
               }
            });
    };

    self.resColors = function(d) {
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

    self.resColorClass = function(full) {
        if(/green/.test(full)) {
            return 'full';
        } else if(/#FCE883/.test(full)) {
            return 'okay';
        } else if(/red/.test(full)) {
            return 'low';
        } else {
            return 'unavailable'
        }
    };

    self.stringDate = function(month) {
        var month_names = ["Jan", "Feb", "Mar",
            "Apr", "May", "Jun",
            "Jul", "Aug", "Sep",
            "Oct", "Nov", "Dec"];

        var month_num = parseInt(month, 10) - 1;

        return month_names[month_num];
    };

    self.focus = function(chart, height) {
        var focus = chart.append("g")
            .attr("class", "focus")
            .style("display", "none");

        focus.append("line")
            .attr("class", "y0")
            .attr({
                x1: 0,
                y1: 0,
                x2: 0,
                y2:height

            });

        return focus;
    };

    self.graphPadding = function(formatting) {
        var graph_padding = moment().add(8, 'month');
        var date_string = (formatting !== undefined) ? 'MM/YY' : 'MM/YYYY';

        return graph_padding.format(date_string);
    };

    self.rotate = function() {
        d3.selectAll("g.x text").attr('transform', "rotate(35)")
            .attr('dx', 27)
            .attr('dy', 10);
    };

    self.histAvg = function(data, type) {
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

    self.displayMonth = function() {
        var current_date = moment().subtract(1, 'month');
        var today = current_date.format('MM/YYYY');
        return current_date.format('MMMM YYYY');
    };

    self.mapPctFull = function(data, stations, key_used) {
        var sorted = d3.nest()
            .key(function(d) {
                var res = (!key_used) ? d.reservoir : reservoir_names[d.reservoir];
                return res;
            })
            .map(data);

        stations.forEach(function(d) {
            var res_total = _.last(sorted[d.reservoir]); //console.log(res_total)
        //   if(res_total === undefined) console.log(d.reservoir, d.state);
            d.pct_capacity = (res_total !== undefined) ? res_total.pct_capacity : undefined;
            d.capacity = (res_total !== undefined) ? res_total.capacity : undefined;
        });

        return stations;
    };

    self.mapScale = function(data, state) {
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

angular.module('westernWaterApp').service('searchService', function() {
    this.reservoirs = function() {
        return [
            {
                "name":"Upper Klamath",
                "code":"CA"
            },
            {
                "name":"Gerber",
                "code":"CA"
            },
            {
                "name":"Clear Lk   Klamath R",
                "code":"CA"
            },
            {
                "name":"Dwinnell",
                "code":"CA"
            },
            {
                "name":"Trinity Lake",
                "code":"CA"
            },
            {
                "name":"Lewiston",
                "code":"CA"
            },
            {
                "name":"Lake Pillsbury",
                "code":"CA"
            },
            {
                "name":"Lake Mendocino",
                "code":"CA"
            },
            {
                "name":"Warm Springs",
                "code":"CA"
            },
            {
                "name":"Soulajule Dam",
                "code":"CA"
            },
            {
                "name":"Nicasio",
                "code":"CA"
            },
            {
                "name":"Kent",
                "code":"CA"
            },
            {
                "name":"Alpine Lake",
                "code":"CA"
            },
            {
                "name":"Lake Hennessey",
                "code":"CA"
            },
            {
                "name":"Briones Dam",
                "code":"CA"
            },
            {
                "name":"U San Leandro",
                "code":"CA"
            },
            {
                "name":"Chabot",
                "code":"CA"
            },
            {
                "name":"Del Valle",
                "code":"CA"
            },
            {
                "name":"San Antonio Reservoir",
                "code":"CA"
            },
            {
                "name":"Calaveras",
                "code":"CA"
            },
            {
                "name":"Lexington Reservoir",
                "code":"CA"
            },
            {
                "name":"Leroy Anderson",
                "code":"CA"
            },
            {
                "name":"Coyote Res Sta Clara",
                "code":"CA"
            },
            {
                "name":"Lower Crystal Springs Reservoir",
                "code":"CA"
            },
            {
                "name":"San Pablo",
                "code":"CA"
            },
            {
                "name":"San Andreas",
                "code":"CA"
            },
            {
                "name":"Lake San Antonio",
                "code":"CA"
            },
            {
                "name":"Whale Rock",
                "code":"CA"
            },
            {
                "name":"Santa Margarita Lake",
                "code":"CA"
            },
            {
                "name":"Nacimiento",
                "code":"CA"
            },
            {
                "name":"Lake Jennings",
                "code":"CA"
            },
            {
                "name":"Twitchell",
                "code":"CA"
            },
            {
                "name":"Cachuma Lake",
                "code":"CA"
            },
            {
                "name":"Gibraltar Dam",
                "code":"CA"
            },
            {
                "name":"Matilija Dam",
                "code":"CA"
            },
            {
                "name":"Casitas",
                "code":"CA"
            },
            {
                "name":"Pyramid",
                "code":"CA"
            },
            {
                "name":"Bouquet Canyon",
                "code":"CA"
            },
            {
                "name":"Castaic",
                "code":"CA"
            },
            {
                "name":"Lake Piru",
                "code":"CA"
            },
            {
                "name":"Cogswell Reservoir",
                "code":"CA"
            },
            {
                "name":"San Gabriel",
                "code":"CA"
            },
            {
                "name":"Lake Mathews",
                "code":"CA"
            },
            {
                "name":"Perris",
                "code":"CA"
            },
            {
                "name":"Lake Hemet",
                "code":"CA"
            },
            {
                "name":"Bear Valley Dam",
                "code":"CA"
            },
            {
                "name":"Santiago Creek Res",
                "code":"CA"
            },
            {
                "name":"Railroad Canyon",
                "code":"CA"
            },
            {
                "name":"Diamond Valley",
                "code":"CA"
            },
            {
                "name":"Vail Lake",
                "code":"CA"
            },
            {
                "name":"Sutherland Reservoir",
                "code":"CA"
            },
            {
                "name":"Lake Hodges",
                "code":"CA"
            },
            {
                "name":"Skinner",
                "code":"CA"
            },
            {
                "name":"Henshaw",
                "code":"CA"
            },
            {
                "name":"Cuyamaca Dam",
                "code":"CA"
            },
            {
                "name":"San Vicente",
                "code":"CA"
            },
            {
                "name":"Miramar",
                "code":"CA"
            },
            {
                "name":"El Capitan Dam",
                "code":"CA"
            },
            {
                "name":"Murray Res",
                "code":"CA"
            },
            {
                "name":"Morena Dam",
                "code":"CA"
            },
            {
                "name":"Barrett",
                "code":"CA"
            },
            {
                "name":"Loveland Reservoir",
                "code":"CA"
            },
            {
                "name":"Sweetwater Reservoir",
                "code":"CA"
            },
            {
                "name":"Lower Otay",
                "code":"CA"
            },
            {
                "name":"Shasta Dam",
                "code":"CA"
            },
            {
                "name":"Keswick Reservoir",
                "code":"CA"
            },
            {
                "name":"Whiskeytown Dam",
                "code":"CA"
            },
            {
                "name":"Lake Mccloud",
                "code":"CA"
            },
            {
                "name":"Iron Canyon",
                "code":"CA"
            },
            {
                "name":"Lake Britton",
                "code":"CA"
            },
            {
                "name":"Black Butte",
                "code":"CA"
            },
            {
                "name":"Stony Gorge Reservoir",
                "code":"CA"
            },
            {
                "name":"East Park Reservoir",
                "code":"CA"
            },
            {
                "name":"Mountain Meadows",
                "code":"CA"
            },
            {
                "name":"Lake Almanor",
                "code":"CA"
            },
            {
                "name":"Butt Valley",
                "code":"CA"
            },
            {
                "name":"Antelope Lake",
                "code":"CA"
            },
            {
                "name":"Bucks Lake Storage",
                "code":"CA"
            },
            {
                "name":"Lake Davis",
                "code":"CA"
            },
            {
                "name":"Frenchman Dam",
                "code":"CA"
            },
            {
                "name":"Little Grass Valley",
                "code":"CA"
            },
            {
                "name":"Sly Creek",
                "code":"CA"
            },
            {
                "name":"Oroville Dam",
                "code":"CA"
            },
            {
                "name":"Thermalito  Total",
                "code":"CA"
            },
            {
                "name":"Bowman Lake",
                "code":"CA"
            },
            {
                "name":"Lake Spaulding S Yuba System",
                "code":"CA"
            },
            {
                "name":"French Lake",
                "code":"CA"
            },
            {
                "name":"New Bullards Bar",
                "code":"CA"
            },
            {
                "name":"Scotts Flat",
                "code":"CA"
            },
            {
                "name":"Englebright",
                "code":"CA"
            },
            {
                "name":"Rollins",
                "code":"CA"
            },
            {
                "name":"Bear River At Camp Far West Dam",
                "code":"CA"
            },
            {
                "name":"French Meadows",
                "code":"CA"
            },
            {
                "name":"Hell Hole",
                "code":"CA"
            },
            {
                "name":"Loon Lake",
                "code":"CA"
            },
            {
                "name":"Union Valley",
                "code":"CA"
            },
            {
                "name":"Ice House",
                "code":"CA"
            },
            {
                "name":"Slab Creek",
                "code":"CA"
            },
            {
                "name":"Caples Lake",
                "code":"CA"
            },
            {
                "name":"Folsom Lake",
                "code":"CA"
            },
            {
                "name":"Lake Natoma",
                "code":"CA"
            },
            {
                "name":"Indian Valley",
                "code":"CA"
            },
            {
                "name":"Clear Lk   Cache Creek",
                "code":"CA"
            },
            {
                "name":"Berryessa",
                "code":"CA"
            },
            {
                "name":"Los Vaqueros Reservoir",
                "code":"CA"
            },
            {
                "name":"Jenkinson Lake",
                "code":"CA"
            },
            {
                "name":"Lower Bear",
                "code":"CA"
            },
            {
                "name":"Salt Springs",
                "code":"CA"
            },
            {
                "name":"Pardee",
                "code":"CA"
            },
            {
                "name":"Camanche Reservoir",
                "code":"CA"
            },
            {
                "name":"New Hogan Lake",
                "code":"CA"
            },
            {
                "name":"Spicer Meadows",
                "code":"CA"
            },
            {
                "name":"Donnells",
                "code":"CA"
            },
            {
                "name":"Relief",
                "code":"CA"
            },
            {
                "name":"Beardsley Lake",
                "code":"CA"
            },
            {
                "name":"Strawberry",
                "code":"CA"
            },
            {
                "name":"New Melones Reservoir",
                "code":"CA"
            },
            {
                "name":"Tulloch",
                "code":"CA"
            },
            {
                "name":"Cherry Lake",
                "code":"CA"
            },
            {
                "name":"Lake Eleanor",
                "code":"CA"
            },
            {
                "name":"Hetch Hetchy",
                "code":"CA"
            },
            {
                "name":"Don Pedro Reservoir",
                "code":"CA"
            },
            {
                "name":"Modesto Reservoir",
                "code":"CA"
            },
            {
                "name":"Turlock Lake",
                "code":"CA"
            },
            {
                "name":"Lake Mcclure",
                "code":"CA"
            },
            {
                "name":"Buchanan Dam",
                "code":"CA"
            },
            {
                "name":"Hidden Dam",
                "code":"CA"
            },
            {
                "name":"Thomas A Edison",
                "code":"CA"
            },
            {
                "name":"Mammoth Pool",
                "code":"CA"
            },
            {
                "name":"Crane Valley",
                "code":"CA"
            },
            {
                "name":"Florence Lake",
                "code":"CA"
            },
            {
                "name":"Huntington Lake",
                "code":"CA"
            },
            {
                "name":"Shaver Lake",
                "code":"CA"
            },
            {
                "name":"Redinger Lake",
                "code":"CA"
            },
            {
                "name":"Friant Dam",
                "code":"CA"
            },
            {
                "name":"San Luis Reservoir",
                "code":"CA"
            },
            {
                "name":"Oneill Forebay",
                "code":"CA"
            },
            {
                "name":"San Luis Reservoir",
                "code":"CA"
            },
            {
                "name":"Los Banos",
                "code":"CA"
            },
            {
                "name":"Courtright",
                "code":"CA"
            },
            {
                "name":"Wishon",
                "code":"CA"
            },
            {
                "name":"Pine Flat Dam",
                "code":"CA"
            },
            {
                "name":"Terminus Dam",
                "code":"CA"
            },
            {
                "name":"Success Dam",
                "code":"CA"
            },
            {
                "name":"Isabella Dam",
                "code":"CA"
            },
            {
                "name":"Stampede",
                "code":"CA"
            },
            {
                "name":"Boca Reservoir",
                "code":"CA"
            },
            {
                "name":"Prosser Creek Reservoir",
                "code":"CA"
            },
            {
                "name":"Lake Tahoe",
                "code":"CA"
            },
            {
                "name":"Bridgeport Reservoir",
                "code":"CA"
            },
            {
                "name":"Saddlebag Lake Reservoir",
                "code":"CA"
            },
            {
                "name":"Grant Lake",
                "code":"CA"
            },
            {
                "name":"Gem  Lake",
                "code":"CA"
            },
            {
                "name":"Lake Crowley",
                "code":"CA"
            },
            {
                "name":"South Lake",
                "code":"CA"
            },
            {
                "name":"Tinemaha Reservoir",
                "code":"CA"
            },
            {
                "name":"Haiwee",
                "code":"CA"
            },
            {
                "name":"Lake Silverwood",
                "code":"CA"
            },
            {
                "name":"Abilene",
                "code":"TX"
            },
            {
                "name":"Addicks",
                "code":"TX"
            },
            {
                "name":"Alan Henry",
                "code":"TX"
            },
            {
                "name":"Amistad",
                "code":"TX"
            },
            {
                "name":"Amon G Carter",
                "code":"TX"
            },
            {
                "name":"Aquilla",
                "code":"TX"
            },
            {
                "name":"Arlington",
                "code":"TX"
            },
            {
                "name":"Arrowhead",
                "code":"TX"
            },
            {
                "name":"Athens",
                "code":"TX"
            },
            {
                "name":"Austin",
                "code":"TX"
            },
            {
                "name":"B A Steinhagen",
                "code":"TX"
            },
            {
                "name":"Bardwell",
                "code":"TX"
            },
            {
                "name":"Belton",
                "code":"TX"
            },
            {
                "name":"Benbrook",
                "code":"TX"
            },
            {
                "name":"Bob Sandlin",
                "code":"TX"
            },
            {
                "name":"Bonham",
                "code":"TX"
            },
            {
                "name":"Brady Creek",
                "code":"TX"
            },
            {
                "name":"Bridgeport",
                "code":"TX"
            },
            {
                "name":"Brownwood",
                "code":"TX"
            },
            {
                "name":"Buchanan",
                "code":"TX"
            },
            {
                "name":"Caddo",
                "code":"TX"
            },
            {
                "name":"Canyon",
                "code":"TX"
            },
            {
                "name":"Cedar Creek",
                "code":"TX"
            },
            {
                "name":"Champion Creek",
                "code":"TX"
            },
            {
                "name":"Choke Canyon",
                "code":"TX"
            },
            {
                "name":"Cisco",
                "code":"TX"
            },
            {
                "name":"Coleman",
                "code":"TX"
            },
            {
                "name":"Coleto Creek",
                "code":"TX"
            },
            {
                "name":"Colorado City",
                "code":"TX"
            },
            {
                "name":"Conroe",
                "code":"TX"
            },
            {
                "name":"Corpus Christi",
                "code":"TX"
            },
            {
                "name":"Crook",
                "code":"TX"
            },
            {
                "name":"Cypress Springs",
                "code":"TX"
            },
            {
                "name":"E V Spence",
                "code":"TX"
            },
            {
                "name":"Eagle Mountain",
                "code":"TX"
            },
            {
                "name":"Elephant Butte",
                "code":"TX"
            },
            {
                "name":"Falcon",
                "code":"TX"
            },
            {
                "name":"Fork",
                "code":"TX"
            },
            {
                "name":"Fort Phantom Hill",
                "code":"TX"
            },
            {
                "name":"Georgetown",
                "code":"TX"
            },
            {
                "name":"Graham",
                "code":"TX"
            },
            {
                "name":"Granbury",
                "code":"TX"
            },
            {
                "name":"Granger",
                "code":"TX"
            },
            {
                "name":"Grapevine",
                "code":"TX"
            },
            {
                "name":"Greenbelt",
                "code":"TX"
            },
            {
                "name":"Halbert",
                "code":"TX"
            },
            {
                "name":"Hords Creek",
                "code":"TX"
            },
            {
                "name":"Houston",
                "code":"TX"
            },
            {
                "name":"Houston County",
                "code":"TX"
            },
            {
                "name":"Hubbard Creek",
                "code":"TX"
            },
            {
                "name":"Hubert H Moss",
                "code":"TX"
            },
            {
                "name":"Inks",
                "code":"TX"
            },
            {
                "name":"J B Thomas",
                "code":"TX"
            },
            {
                "name":"Jacksonville",
                "code":"TX"
            },
            {
                "name":"Jim Chapman",
                "code":"TX"
            },
            {
                "name":"Joe Pool",
                "code":"TX"
            },
            {
                "name":"Kemp",
                "code":"TX"
            },
            {
                "name":"Kickapoo",
                "code":"TX"
            },
            {
                "name":"Lake O The Pines",
                "code":"TX"
            },
            {
                "name":"Lavon",
                "code":"TX"
            },
            {
                "name":"Leon",
                "code":"TX"
            },
            {
                "name":"Lewisville",
                "code":"TX"
            },
            {
                "name":"Limestone",
                "code":"TX"
            },
            {
                "name":"Livingston",
                "code":"TX"
            },
            {
                "name":"Lost Creek",
                "code":"TX"
            },
            {
                "name":"Lyndon B Johnson",
                "code":"TX"
            },
            {
                "name":"Mackenzie",
                "code":"TX"
            },
            {
                "name":"Martin",
                "code":"TX"
            },
            {
                "name":"Medina",
                "code":"TX"
            },
            {
                "name":"Meredith",
                "code":"TX"
            },
            {
                "name":"Millers Creek",
                "code":"TX"
            },
            {
                "name":"Mineral Wells",
                "code":"TX"
            },
            {
                "name":"Monticello",
                "code":"TX"
            },
            {
                "name":"Mountain Creek",
                "code":"TX"
            },
            {
                "name":"Murvaul",
                "code":"TX"
            },
            {
                "name":"Nacogdoches",
                "code":"TX"
            },
            {
                "name":"Natural Dam",
                "code":"TX"
            },
            {
                "name":"Navarro Mills",
                "code":"TX"
            },
            {
                "name":"New Terrell City",
                "code":"TX"
            },
            {
                "name":"Nocona",
                "code":"TX"
            },
            {
                "name":"North Fork Buffalo Creek",
                "code":"TX"
            },
            {
                "name":"O C Fisher",
                "code":"TX"
            },
            {
                "name":"O H Ivie",
                "code":"TX"
            },
            {
                "name":"Oak Creek",
                "code":"TX"
            },
            {
                "name":"Palestine",
                "code":"TX"
            },
            {
                "name":"Palo Duro",
                "code":"TX"
            },
            {
                "name":"Palo Pinto",
                "code":"TX"
            },
            {
                "name":"Pat Cleburne",
                "code":"TX"
            },
            {
                "name":"Pat Mayse",
                "code":"TX"
            },
            {
                "name":"Possum Kingdom",
                "code":"TX"
            },
            {
                "name":"Proctor",
                "code":"TX"
            },
            {
                "name":"Ray Hubbard",
                "code":"TX"
            },
            {
                "name":"Ray Roberts",
                "code":"TX"
            },
            {
                "name":"Red Bluff",
                "code":"TX"
            },
            {
                "name":"Richland Chambers",
                "code":"TX"
            },
            {
                "name":"Sam Rayburn",
                "code":"TX"
            },
            {
                "name":"Somerville",
                "code":"TX"
            },
            {
                "name":"Squaw Creek",
                "code":"TX"
            },
            {
                "name":"Stamford",
                "code":"TX"
            },
            {
                "name":"Stillhouse Hollow",
                "code":"TX"
            },
            {
                "name":"Sulphur Springs",
                "code":"TX"
            },
            {
                "name":"Sweetwater",
                "code":"TX"
            },
            {
                "name":"Tawakoni",
                "code":"TX"
            },
            {
                "name":"Texana",
                "code":"TX"
            },
            {
                "name":"Texoma",
                "code":"TX"
            },
            {
                "name":"Toledo Bend",
                "code":"TX"
            },
            {
                "name":"Travis",
                "code":"TX"
            },
            {
                "name":"Twin Buttes",
                "code":"TX"
            },
            {
                "name":"Tyler",
                "code":"TX"
            },
            {
                "name":"Waco",
                "code":"TX"
            },
            {
                "name":"Waxahachie",
                "code":"TX"
            },
            {
                "name":"Weatherford",
                "code":"TX"
            },
            {
                "name":"White River",
                "code":"TX"
            },
            {
                "name":"Whitney",
                "code":"TX"
            },
            {
                "name":"Worth",
                "code":"TX"
            },
            {
                "name":"Wright Patman",
                "code":"TX"
            },
            {
                "name":"Big Sandy",
                "code":"WY"
            },
            {
                "name":"Blue Mesa",
                "code":"CO"
            },
            {
                "name":"Caballo",
                "code":"NM"
            },
            {
                "name":"Causey",
                "code":"UT"
            },
            {
                "name":"Crystal",
                "code":"CO"
            },
            {
                "name":"Currant Creek",
                "code":"UT"
            },
            {
                "name":"Deer Creek",
                "code":"UT"
            },
            {
                "name":"Echo",
                "code":"UT"
            },
            {
                "name":"Vallecito",
                "code":"CO"
            },
            {
                "name":"Moon Lake",
                "code":"UT"
            },
            {
                "name":"Lake Powell",
                "code":"AZ & UT"
            },
            {
                "name":"Flaming Gorge",
                "code":"UT"
            },
            {
                "name":"Rifle Gap",
                "code":"CO"
            },
            {
                "name":"Rockport",
                "code":"UT"
            },
            {
                "name":"Scofield",
                "code":"UT"
            },
            {
                "name":"Taylor Park",
                "code":"CO"
            },
            {
                "name":"Fontenelle",
                "code":"WY"
            },
            {
                "name":"Hyrum",
                "code":"UT"
            },
            {
                "name":"Jackson Gulch Reservoir",
                "code":"CO"
            },
            {
                "name":"Steinaker",
                "code":"UT"
            },
            {
                "name":"Santa Rosa",
                "code":"NM"
            },
            {
                "name":"Lemon",
                "code":"CO"
            },
            {
                "name":"Morrow Point",
                "code":"CO"
            },
            {
                "name":"Navajo",
                "code":"CO"
            },
            {
                "name":"Starvation",
                "code":"UT"
            },
            {
                "name":"Vega",
                "code":"CO"
            },
            {
                "name":"Upper Stillwater",
                "code":"UT"
            },
            {
                "name":"Strawberry",
                "code":"UT"
            },
            {
                "name":"codeline",
                "code":"UT"
            },
            {
                "name":"Silver Jack",
                "code":"CO"
            },
            {
                "name":"Ridgway",
                "code":"CO"
            },
            {
                "name":"Red Fleet",
                "code":"UT"
            },
            {
                "name":"Pineview",
                "code":"UT"
            },
            {
                "name":"Paonia",
                "code":"CO"
            },
            {
                "name":"Newton",
                "code":"UT"
            },
            {
                "name":"Meeks Cabin",
                "code":"WY"
            },
            {
                "name":"McPhee",
                "code":"CO"
            },
            {
                "name":"Lost Creek Reservoir",
                "code":"UT"
            },
            {
                "name":"Lake Sumner",
                "code":"NM"
            },
            {
                "name":"Jordanelle",
                "code":"UT"
            },
            {
                "name":"Joes Valley",
                "code":"UT"
            },
            {
                "name":"Huntington North",
                "code":"UT"
            },
            {
                "name":"Elephant Butte",
                "code":"NM"
            },
            {
                "name":"Fruitgrowers",
                "code":"CO"
            },
            {
                "name":"East Canyon",
                "code":"UT"
            },
            {
                "name":"Lake Mohave",
                "code":"AZ & NV"
            },
            {
                "name":"Lake Havasu",
                "code":"AZ & CA"
            },
            {
                "name":"Lake Mead",
                "code":"AZ & NV"
            },
            {
                "name":"Agate",
                "code":"OR"
            },
            {
                "name":"American Falls",
                "code":"ID"
            },
            {
                "name":"Anderson Ranch",
                "code":"ID"
            },
            {
                "name":"Arrowrock",
                "code":"ID"
            },
            {
                "name":"Beulah",
                "code":"OR"
            },
            {
                "name":"Banks Lake",
                "code":"WA"
            },
            {
                "name":"Bully Creek",
                "code":"OR"
            },
            {
                "name":"Cold Springs",
                "code":"OR"
            },
            {
                "name":"Crane Prairie",
                "code":"OR"
            },
            {
                "name":"Crescent Lake",
                "code":"OR"
            },
            {
                "name":"Lake Cascade",
                "code":"ID"
            },
            {
                "name":"Deadwood",
                "code":"ID"
            },
            {
                "name":"Emigrant Lake",
                "code":"OR"
            },
            {
                "name":"Black Canyon",
                "code":"ID"
            },
            {
                "name":"Fish Lake",
                "code":"OR"
            },
            {
                "name":"Fourmile Lake",
                "code":"OR"
            },
            {
                "name":"Grand Coulee/FDR Lake",
                "code":"WA"
            },
            {
                "name":"Grassy Lake",
                "code":"WY"
            },
            {
                "name":"Haystack",
                "code":"OR"
            },
            {
                "name":"Howard Prairie Lake",
                "code":"OR"
            },
            {
                "name":"Hyatt",
                "code":"OR"
            },
            {
                "name":"Island Park",
                "code":"ID"
            },
            {
                "name":"Jackson Lake",
                "code":"WY"
            },
            {
                "name":"Lake Lowell",
                "code":"ID"
            },
            {
                "name":"Lucky Peak Lake",
                "code":"ID"
            },
            {
                "name":"Mann Creek",
                "code":"ID"
            },
            {
                "name":"McKay",
                "code":"OR"
            },
            {
                "name":"Milner",
                "code":"ID"
            },
            {
                "name":"Lake Walcott",
                "code":"ID"
            },
            {
                "name":"Ochoco",
                "code":"OR"
            },
            {
                "name":"Lake Owyhee",
                "code":"OR"
            },
            {
                "name":"Palisades",
                "code":"ID"
            },
            {
                "name":"Phillips Lake",
                "code":"OR"
            },
            {
                "name":"Prineville",
                "code":"OR"
            },
            {
                "name":"Reservoir A",
                "code":"ID"
            },
            {
                "name":"Ririe Lake",
                "code":"ID"
            },
            {
                "name":"Henry Hagg Lake",
                "code":"OR"
            },
            {
                "name":"Soldiers Meadow",
                "code":"ID"
            },
            {
                "name":"Thief Valley",
                "code":"OR"
            },
            {
                "name":"Unity",
                "code":"OR"
            },
            {
                "name":"Warm Springs Reservoir",
                "code":"OR"
            },
            {
                "name":"Clear Lake",
                "code":"OR"
            },
            {
                "name":"Wickiup",
                "code":"OR"
            },
            {
                "name":"Wildhorse",
                "code":"NV"
            },
            {
                "name":"Little Wood",
                "code":"ID"
            },
            {
                "name":"Horseshoe",
                "code":"AZ"
            },
            {
                "name":"San Carlos",
                "code":"AZ"
            },
            {
                "name":"C. C. Cragin",
                "code":"AZ"
            },
            {
                "name":"Bartlett",
                "code":"AZ"
            },
            {
                "name":"Lyman Lake",
                "code":"AZ"
            },
            {
                "name":"Roosevelt",
                "code":"AZ"
            },
            {
                "name":"Horse Mesa",
                "code":"AZ"
            },
            {
                "name":"Mormon Flat",
                "code":"AZ"
            },
            {
                "name":"Stewart Mtn",
                "code":"AZ"
            },
            {
                "name":"Henrys Lake",
                "code":"ID"
            },
            {
                "name":"Dillon",
                "code":"CO"
            },
            {
                "name":"Williams Fork",
                "code":"CO"
            },
            {
                "name":"Antero",
                "code":"CO"
            },
            {
                "name":"Cheesman",
                "code":"CO"
            },
            {
                "name":"Eleven Mile",
                "code":"CO"
            },
            {
                "name":"Gross",
                "code":"CO"
            },
            {
                "name":"Marston",
                "code":"CO"
            },
            {
                "name":"Lake Coeur D'Alene",
                "code":"ID"
            },
            {
                "name":"Lake Pend Oreille",
                "code":"ID"
            },
            {
                "name":"Priest Lake",
                "code":"ID"
            },
            {
                "name":"Dworshak",
                "code":"ID"
            },
            {
                "name":"Magic",
                "code":"ID"
            },
            {
                "name":"Blackfoot",
                "code":"ID"
            },
            {
                "name":"Oakley",
                "code":"ID"
            },
            {
                "name":"Salmon Falls",
                "code":"ID"
            },
            {
                "name":"Brownlee",
                "code":"ID"
            },
            {
                "name":"Bear Lake",
                "code":"ID"
            },
            {
                "name":"Montpelier",
                "code":"ID"
            },
            {
                "name":"Conconully",
                "code":"WA"
            },
            {
                "name":"Lake Chelan",
                "code":"WA"
            },
            {
                "name":"Keechelus",
                "code":"WA"
            },
            {
                "name":"Kachess",
                "code":"WA"
            },
            {
                "name":"Cle Elum",
                "code":"WA"
            },
            {
                "name":"Bumping Lake",
                "code":"WA"
            },
            {
                "name":"Rimrock",
                "code":"WA"
            },
            {
                "name":"Ross",
                "code":"WA"
            },
            {
                "name":"Diablo",
                "code":"WA"
            },
            {
                "name":"Wallowa Lake",
                "code":"OR"
            },
            {
                "name":"Wolf Creek",
                "code":"OR"
            },
            {
                "name":"Willow Creek",
                "code":"OR"
            },
            {
                "name":"Blue River",
                "code":"OR"
            },
            {
                "name":"Cottage Grove",
                "code":"OR"
            },
            {
                "name":"Cougar",
                "code":"OR"
            },
            {
                "name":"Detroit",
                "code":"OR"
            },
            {
                "name":"Dorena",
                "code":"OR"
            },
            {
                "name":"Fall Creek",
                "code":"OR"
            },
            {
                "name":"Fern Ridge",
                "code":"OR"
            },
            {
                "name":"Applegate",
                "code":"OR"
            },
            {
                "name":"Lost Creek Res",
                "code":"OR"
            },
            {
                "name":"Cottonwood",
                "code":"OR"
            },
            {
                "name":"Abiquiu",
                "code":"NM"
            },
            {
                "name":"Bluewater Lake",
                "code":"NM"
            },
            {
                "name":"Brantley Lake",
                "code":"NM"
            },
            {
                "name":"Cochiti Lake",
                "code":"NM"
            },
            {
                "name":"Conchas Lake",
                "code":"NM"
            },
            {
                "name":"Costilla",
                "code":"NM"
            },
            {
                "name":"Eagle Nest Lake",
                "code":"NM"
            },
            {
                "name":"El Vado",
                "code":"NM"
            },
            {
                "name":"Heron",
                "code":"NM"
            },
            {
                "name":"Lake Avalon",
                "code":"NM"
            },
            {
                "name":"Lahontan",
                "code":"NV"
            },
            {
                "name":"Rye Patch",
                "code":"NV"
            },
            {
                "name":"Big Sand Wash",
                "code":"UT"
            },
            {
                "name":"Cleveland Lake",
                "code":"UT"
            },
            {
                "name":"Grantsville",
                "code":"UT"
            },
            {
                "name":"Gunlock",
                "code":"UT"
            },
            {
                "name":"Gunnison",
                "code":"UT"
            },
            {
                "name":"Ken's Lake",
                "code":"UT"
            },
            {
                "name":"Kolob",
                "code":"UT"
            },
            {
                "name":"Lower Enterprise",
                "code":"UT"
            },
            {
                "name":"Miller Flat",
                "code":"UT"
            },
            {
                "name":"Millsite",
                "code":"UT"
            },
            {
                "name":"Minersville",
                "code":"UT"
            },
            {
                "name":"Otter Creek",
                "code":"UT"
            },
            {
                "name":"Panguitch Lake",
                "code":"UT"
            },
            {
                "name":"Piute",
                "code":"UT"
            },
            {
                "name":"Porcupine",
                "code":"UT"
            },
            {
                "name":"Quail Creek",
                "code":"UT"
            },
            {
                "name":"Sand Hollow",
                "code":"UT"
            },
            {
                "name":"Sevier Bridge",
                "code":"UT"
            },
            {
                "name":"Smith And Morehouse",
                "code":"UT"
            },
            {
                "name":"Upper Enterprise",
                "code":"UT"
            },
            {
                "name":"Utah Lake",
                "code":"UT"
            },
            {
                "name":"Willard Bay",
                "code":"UT"
            },
            {
                "name":"Woodruff Creek",
                "code":"UT"
            },
            {
                "name":"Woodruff Narrows",
                "code":"WY"
            },
            {
                "name":"Bull Lake",
                "code":"WY"
            },
            {
                "name":"Boysen",
                "code":"WY"
            },
            {
                "name":"Pilot Butte",
                "code":"WY"
            },
            {
                "name":"Buffalo Bill",
                "code":"WY"
            },
            {
                "name":"Keyhole",
                "code":"WY"
            },
            {
                "name":"Seminoe",
                "code":"WY"
            },
            {
                "name":"Pathfinder",
                "code":"WY"
            },
            {
                "name":"Alcova",
                "code":"WY"
            },
            {
                "name":"Glendo",
                "code":"WY"
            },
            {
                "name":"Guernsey",
                "code":"WY"
            },
            {
                "name":"High Savery",
                "code":"WY"
            },
            {
                "name":"Viva Naughton",
                "code":"WY"
            },
            {
                "name":"Wheatland #2",
                "code":"WY"
            },
            {
                "name":"Adobe Creek",
                "code":"CO"
            },
            {
                "name":"Barr Lake",
                "code":"CO"
            },
            {
                "name":"Boyd Lake",
                "code":"CO"
            },
            {
                "name":"Carter Lake",
                "code":"CO"
            },
            {
                "name":"Clear Creek",
                "code":"CO"
            },
            {
                "name":"Cobb Lake",
                "code":"CO"
            },
            {
                "name":"Continental",
                "code":"CO"
            },
            {
                "name":"Crawford",
                "code":"CO"
            },
            {
                "name":"Cucharas",
                "code":"CO"
            },
            {
                "name":"Empire",
                "code":"CO"
            },
            {
                "name":"Fossil Creek",
                "code":"CO"
            },
            {
                "name":"Green Mtn",
                "code":"CO"
            },
            {
                "name":"Groundhog",
                "code":"CO"
            },
            {
                "name":"Homestake",
                "code":"CO"
            },
            {
                "name":"Horse Creek",
                "code":"CO"
            },
            {
                "name":"Horsecreek",
                "code":"CO"
            },
            {
                "name":"Horsetooth",
                "code":"CO"
            },
            {
                "name":"Jackson Lk",
                "code":"CO"
            },
            {
                "name":"John Martin",
                "code":"CO"
            },
            {
                "name":"Julesberg",
                "code":"CO"
            },
            {
                "name":"Lake Granby",
                "code":"CO"
            },
            {
                "name":"Lake Loveland",
                "code":"CO"
            },
            {
                "name":"Marshall",
                "code":"CO"
            },
            {
                "name":"Meredith Reservoir",
                "code":"CO"
            },
            {
                "name":"Milton",
                "code":"CO"
            },
            {
                "name":"Mountain Home",
                "code":"CO"
            },
            {
                "name":"Narraguinnep",
                "code":"CO"
            },
            {
                "name":"Platoro",
                "code":"CO"
            },
            {
                "name":"Point Of Rocks",
                "code":"CO"
            },
            {
                "name":"Prewitt",
                "code":"CO"
            },
            {
                "name":"Pueblo",
                "code":"CO"
            },
            {
                "name":"Ralph Price",
                "code":"CO"
            },
            {
                "name":"Rio Grande",
                "code":"CO"
            },
            {
                "name":"Riverside",
                "code":"CO"
            },
            {
                "name":"Ruedi",
                "code":"CO"
            },
            {
                "name":"Sanchez",
                "code":"CO"
            },
            {
                "name":"Santa Maria",
                "code":"CO"
            },
            {
                "name":"Shadow Mountain",
                "code":"CO"
            },
            {
                "name":"Spinney Mountain",
                "code":"CO"
            },
            {
                "name":"Stagecoach",
                "code":"CO"
            },
            {
                "name":"Standley",
                "code":"CO"
            },
            {
                "name":"Terrace",
                "code":"CO"
            },
            {
                "name":"Trinidad Lake",
                "code":"CO"
            },
            {
                "name":"Turquoise Lake",
                "code":"CO"
            },
            {
                "name":"Twin Lakes",
                "code":"CO"
            },
            {
                "name":"Union",
                "code":"CO"
            },
            {
                "name":"Windsor",
                "code":"CO"
            },
            {
                "name":"Wolford Mountain",
                "code":"CO"
            }
        ];
    };
});