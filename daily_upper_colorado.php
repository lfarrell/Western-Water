<?php
include 'functions.php';
include 'simple_html_dom.php';
date_default_timezone_set('America/New_York');

/**
 * Upper Colorado Basin Reservoirs
 * http://www.usbr.gov/uc/water/rsvrs/ops/r40day.html
 */

//$base = "http://www.usbr.gov/uc/water/rsvrs/ops/crsp_40_bmr.html";

$reservoirs = array(
    "Blue Mesa Reservoir"=>array("940800","CO","bmr"),
    "Big Sandy Reservoir"=>array("38300","WY","bsr"),
    // "Brantley Reservoir" => "bt",
    "Caballo Reservoir"=>array("343990","NM","ca"),
    "Causey Reservoir"=>array("8730","UT","cy"),
    "Currant Creek Reservoir"=>array("15670","UT","cc"),
    "Crystal Reservoir"=>array("17540","CO","cr"),
    "Deer Creek Reservoir"=>array("152570","UT","dc"),
    "East Canyon Reservoir"=>array("51200","UT","ec"),
    "Echo Reservoir"=>array("74000","UT","eo"),
    //   "Eden Reservoir" => "er",
    "Elephant Butte Reservoir"=>array("2065010","NM","eb"),
    "Flaming Gorge Reservoir"=>array("3788700","UT","fgd"),
    "Fontenelle Reservoir"=>array("345360","WY","fn"),
    "Fruitgrowers Reservoir"=>array("4540","CO","fgc"),
    "Huntington North Reservoir"=>array("5420","UT","hn"),
    "Hyrum Reservoir"=>array("18685","UT","hy"),
    "Jordanelle Reservoir"=>array("320300","UT","jr"),
    "Lake Powell"=>array("24322000","AZ&UT","gc"),
    "Lemon Reservoir"=>array("39792","CO","lr"),
    "Lost Creek Reservoir"=>array("22510","UT","lc"),
    //  "Lost Lake" => "ll",*/
    "McPhee Reservoir"=>array("381100","CO","mr"),
    "Meeks Cabin Reservoir"=>array("32470","WY","mc"),
    "Morrow Point Reservoir"=>array("117025","CO","mpr"),
    "Moon Lake Reservoir"=>array("49500","UT","ml"),
    "Navajo Reservoir"=>array("1708600","CO","nr"),
    "Newton Reservoir"=>array("5600","UT","nw"),
    "Paonia Reservoir"=>array("20950","CO","po"),
    "Pineview Reservoir"=>array("110150","UT","pv"),
    "Red Fleet Reservoir"=>array("26000","UT","rf"),
    "Rifle Gap Reservoir"=>array("12168","CO","rg"),
    "Rockport Reservoir"=>array("62100","UT","rp"),
    "Ridgway Reservoir"=>array("84230","CO","rw"),
    "Scofield Reservoir"=>array("73600","UT","sf"),
    "Silver Jack Reservoir"=>array("12820","CO","sj"),
    "Stateline Reservoir"=>array("12000","UT","sl"),
    "Strawberry Reservoir"=>array("1106500","UT","sw"),
    "Starvation Reservoir"=>array("167310","UT","sv"),
    "Steinaker Reservoir"=>array("38173","UT","sk"),
    "Taylor Park Reservoir"=>array("106200","CO","tpr"),
    //   "Trial Lake" => "tl",
    "Upper Stillwater Reservoir"=>array("33123","UT","us"),
    "Vallecito Reservoir"=>array("125400","CO","vr"),
    //  "Washington Lake" => "wl",
    //  "Willard Bay Reservoir" => "wb"
);

$last_month = date("m", strtotime("first day of previous month"));
$last_month_full = date("m/Y", strtotime("first day of previous month"));
foreach($reservoirs as $key => $reservoir) {
    $url = "http://www.usbr.gov/uc/water/rsvrs/ops/crsp_40_" . $reservoir[2] . ".html";
    $html = file_get_html($url);

    $full_data = $html->find('pre');
    $file_base = str_replace(' ', '_', strtolower($key));
    $fh = fopen('data/uc_daily/' . $file_base . '.csv', 'wb');
   // fputcsv($fh, array('reservoir', 'storage', 'capacity', 'pct_full', 'date', 'state'));
    foreach($full_data as $row) {
        $updated_row = preg_replace('/\s{2,}/', '@@', $row);
        $chunked_datas = array_chunk(explode('@@', $updated_row), 5);

        foreach($chunked_datas as $chunked_data) {
            $needed_month = preg_split('/-/', $chunked_data[1]);
            if(preg_match('/\d{2}-\w{3}/', $chunked_data[1]) && months($needed_month[1]) == $last_month) {
                $date_format = explode('-', $chunked_data[1]);
                $formatted_date = months($date_format[1]) . '/' . $date_format[0] . '/' . $date_format[2];
                if($key != 'Lost Creek Reservoir') {
                    $res_name = str_ireplace('reservoir', '', $key);
                } else {
                    $res_name = $key;
                }

                fputcsv($fh, array(trim($res_name), $chunked_data[3], $reservoir[0], '', $formatted_date, $reservoir[1]));
            }
        }
    }
    fclose($fh);
    echo $key . " processed\n";
}

aggregate('data/uc_daily', 'data/uc_mf');

// Dump out to individual state directories
$files = scandir('data/uc_mf');

foreach($files as $file) {
    if(!is_dir($file) && !preg_match('/^\./', $file)) {
        if (($handle = fopen('data/uc_mf/' . $file, 'r')) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                echo $data[4] . ' ' . $last_month_full . "\n";

               if($data[4] == $last_month_full) {
                   $states = preg_split('/&/', $data[5]);

                   foreach($states as $state) {
                       $state = strtolower(trim($state));
                       if($state == 'ut') { $state = 'utah'; }
                       copy('data/uc_mf/' . $file, 'data/' . $state . '_month/' . $file);
                   }
               } else {
                   continue;
               }
            }
            fclose($handle);
        }
    }
}

function months($date) {
    switch($date) {
        case 'JAN':
            return '01';
            break;
        case 'FEB':
            return '02';
            break;
        case 'MAR':
            return '03';
            break;
        case 'APR':
            return '04';
            break;
        case 'MAY':
            return '05';
            break;
        case 'JUN':
            return '06';
            break;
        case 'JUL':
            return '07';
            break;
        case 'AUG':
            return '08';
            break;
        case 'SEP':
            return '09';
            break;
        case 'OCT':
            return '10';
            break;
        case 'NOV':
            return '11';
            break;
        case 'DEC':
            return '12';
            break;
    }
}