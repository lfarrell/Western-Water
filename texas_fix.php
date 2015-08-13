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

foreach($reservoirs as $reservoir) {
    $ft = fopen('data/tx_fix/' . $reservoir. '.csv', "wb");
    fputcsv($ft, ['reservoir','storage','capacity','pct_capacity','date']);
    if (($handle = fopen('data/tx_m/' . $reservoir. '.csv', "r")) !== FALSE) {
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            $date = preg_split('/\//', $data[4]);
            if(preg_match('/^\d/', $data[4]) && $date[1] >= 2000) {
                fputcsv($ft, $data);
            }

        }
    }
    fclose($handle);
    fclose($ft);
}