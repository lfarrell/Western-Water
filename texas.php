<?php
include 'functions.php';
date_default_timezone_set('America/New_York');

$reservoirs = array(
    "abilene",
    "addicks",
    "alan-henry",
    "amistad",
    "amon-g-carter",
    "aquilla",
    "arlington",
    "arrowhead",
    "athens",
    "austin",
    "b-a-steinhagen",
    "bardwell",
    "belton",
    "benbrook",
    "bob-sandlin",
    "bonham",
    "brady-creek",
    "bridgeport",
    "brownwood",
    "buchanan",
    "caddo",
    "canyon",
    "cedar-creek",
    "champion-creek",
    "choke-canyon",
    "cisco",
    "coleman",
    "coleto-creek",
    "colorado-city",
    "conroe",
    "corpus-christi",
    "crook",
    "cypress-springs",
    "e-v-spence",
    "eagle-mountain",
    "elephant-butte",
    "falcon",
    "fork",
    "fort-phantom-hill",
    "georgetown",
    "graham",
    "granbury",
    "granger",
    "grapevine",
    "greenbelt",
    "halbert",
    "hords-creek",
    "houston",
    "houston-county",
    "hubbard-creek",
    "hubert-h-moss",
    "inks",
    "j-b-thomas",
    "jacksonville",
    "jim-chapman",
    "joe-pool",
    "kemp",
    "kickapoo",
    "lake-o-the-pines",
    "lavon",
    "leon",
    "lewisville",
    "limestone",
    "livingston",
    "lost-creek",
    "lyndon-b-johnson",
    "mackenzie",
    "martin",
    "medina",
    "meredith",
    "millers-creek",
    "mineral-wells",
    "monticello",
    "mountain-creek",
    "murvaul",
    "nacogdoches",
    "natural-dam",
    "navarro-mills",
    "new-terrell-city",
    "nocona",
    "north-fork-buffalo-creek",
    "o-c-fisher",
    "o-h-ivie",
    "oak-creek",
    "palestine",
    "palo-duro",
    "palo-pinto",
    "pat-cleburne",
    "pat-mayse",
    "possum-kingdom",
    "proctor",
    "ray-hubbard",
    "ray-roberts",
    "red-bluff",
    "richland-chambers",
    "sam-rayburn",
    "somerville",
    "squaw-creek",
    "stamford",
    "stillhouse-hollow",
    "sulphur-springs",
    "sweetwater",
    "tawakoni",
    "texana",
    "texoma",
    "toledo-bend",
    "travis",
    "twin-buttes",
    "tyler",
    "waco",
    "waxahachie",
    "weatherford",
    "white-river",
    "whitney",
    "worth",
    "wright-patman"
);

$last_month = date("Y-m", strtotime("first day of previous month"));

foreach($reservoirs as $reservoir) {
    $path = "http://waterdatafortexas.org/reservoirs/individual/" . $reservoir . "-1year.csv";
    $file_name = 'raw_data/tx/' . $reservoir . ".csv";

    get_records($path, $file_name, "wb");
    echo $reservoir . " downloaded\n";

    // Clean up the data
    $action = (file_exists($file_name)) ? "a" : "wb";
    $current_date = date("Y-m-d");
    $fh = fopen('data/tx/'. $reservoir . ".csv", $action);
    if (($handle = fopen($file_name, "r")) !== FALSE) {
        if($action != "a") {
            fputcsv($fh, array("reservoir", "storage", "capacity", "pct_capacity", "date"));
        }

        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            $raw_date = $data[0];
            $res = explode('-', $reservoir);
            $reservoir = ucwords(implode(' ', $res));

            if($action == "a") {
                if(preg_match('/^'. $last_month . '/', $raw_date)) {
                    csv_data($fh, $reservoir, $data);
                } else {
                    continue;
                }
            } else {
                if(preg_match('/^'. $last_month . '/', $data[0])) {
                    csv_data($fh, $reservoir, $data);
                } else {
                    continue;
                }
            }
        }
        fclose($handle);
    }
    fclose($fh);
    echo $reservoir . " processed\n";
}

function csv_data($fh, $reservoir, $data) {
    $date_parts = explode('-', $data[0]);
    fputcsv($fh, array($reservoir, $data[4], $data[6], $data[5], $date_parts[1] . '/' . $date_parts[2] . '/' . $date_parts[0]));
}