<?php
include 'simple_html_dom.php';

/**
 * Upper Colorado Basin Reservoirs
 * http://www.usbr.gov/uc/water/rsvrs/ops/r40day.html
 */

/**
 * Lower Colorado Basin Reservoirs
 *
 */


// AF of water
$flaming_gorge_capacity = 3788900;
$blue_mesa_capacity = 829500;
$lake_navajo_capacity = 1696000;
$lake_mead_capacity = 25877000;
$lake_powell_capacity = 24322000;
$lake_mohave_capacity = 1809800;
$lake_havasu_capacity = 619400;

$base = "http://www.usbr.gov/uc/water/rsvrs/ops/crsp_40_";

$reservoirs = array(
    "Blue Mesa Reservoir" => "bmr",
    "Big Sandy Reservoir" => "bsr",
    "Brantley Reservoir" => "bt",
    "Caballo Reservoir" => "ca",
    "Causey Reservoir" => "cy",
    "Currant Creek Reservoir" => "cc",
    "Crystal Reservoir" => "cr",
    "Deer Creek Reservoir" => "dc",
    "East Canyon Reservoir" => "ec",
    "Echo Reservoir" => "eo",
    "Eden Reservoir" => "er",
    "Elephant Butte Reservoir" => "eb",
    "Flaming Gorge Reservoir" => "fgd",
    "Fontenelle Reservoir" => "fn",
    "Fruitgrowers Reservoir" => "fgc",
    "Huntington North Reservoir" => "hn",
    "Hyrum Reservoir" => "hy",
    "Joe's Valley Reservoir" => "jv",
    "Jordanelle Reservoir" => "jr",
    "Lake Powell" => "gc.html",
    "Lake Sumner" => "su",
    "Lemon Reservoir" => "lr",
    "Lost Creek Reservoir" => "lc",
    "Lost Lake" => "ll",
    "McPhee Reservoir" => "mr",
    "Meeks Cabin Reservoir" => "mc",
    "Morrow Point Reservoir" => "mpr",
    "Moon Lake Reservoir" => "ml",
    "Navajo Reservoir" => "nr",
    "Newton Reservoir" => "nw",
    "Paonia Reservoir" => "po",
    "Pineview Reservoir" => "pv",
    "Red Fleet Reservoir" => "rf",
    "Rifle Gap Reservoir" => "rg",
    "Rockport Reservoir" => "rp",
    "Ridgway Reservoir" => "rw",
    "Scofield Reservoir" => "sf",
    "Silver Jack Reservoir" => "sj",
    "Stateline Reservoir" => "sl",
    "Strawberry Reservoir" => "sw",
    "Starvation Reservoir" => "sv",
    "Steinaker Reservoir" => "sk",
    "Taylor Park Reservoir" => "tpr",
    "Trial Lake" => "tl",
    "Upper Stillwater Reservoir" => "us",
    "Vallecito Reservoir" => "vr",
    "Washington Lake" => "wl",
    "Willard Bay Reservoir" => "wb"
);

foreach($reservoirs as $key => $reservoir) {
    $file_base = str_replace(' ', '_', strtolower($key));
    $file = "data/$file_base.csv";
    $fh = fopen($file, 'a');

    if(!filesize($file)) {
        fputcsv($fh, array('reservoir', 'capacity', 'storage', 'pct_capacity', 'date'));
    }
    $path = $base . $reservoir . '.html';

    $html = new simple_html_dom();
    $html->load_file($path);

    $rows = $html->find('pre');
    echo $rows->plaintext;
}
