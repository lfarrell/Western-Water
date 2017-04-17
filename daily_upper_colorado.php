<?php
include 'functions.php';
include 'simple_html_dom.php';
date_default_timezone_set('America/New_York');

/**
 * Upper Colorado Basin Reservoirs
 * http://www.usbr.gov/rsvrWater/faces/rsvr40Day.xhtml?siteid=918
 */

$reservoirs = array(
    "Blue Mesa Reservoir"=>array("940800","CO","913"),
    "Big Sandy Reservoir"=>array("38300","WY","936"),
    // "Brantley Reservoir" => "bt",
    "Caballo Reservoir"=>array("343990","NM","1094"),
    "Causey Reservoir"=>array("8730","UT","938"),
    "Currant Creek Reservoir"=>array("15670","UT","952"),
    "Crystal Reservoir"=>array("17540","CO","915"),
    "Deer Creek Reservoir"=>array("152570","UT","953"),
    "East Canyon Reservoir"=>array("51200","UT","940"),
    "Echo Reservoir"=>array("74000","UT","941"),
    //   "Eden Reservoir" => "er",
    "Elephant Butte Reservoir"=>array("2065010","NM","1119"),
    "Flaming Gorge Reservoir"=>array("3788700","UT","917"),
    "Fontenelle Reservoir"=>array("345360","WY","916"),
    "Fruitgrowers Reservoir"=>array("4540","CO","955"),
    "Huntington North Reservoir"=>array("5420","UT","956"),
    "Hyrum Reservoir"=>array("18685","UT","957"),
    "Jordanelle Reservoir"=>array("320300","UT","964"),
    "Lake Powell"=>array("24322000","AZ&UT","919"),
    "Lemon Reservoir"=>array("39792","CO","934"),
    "Lost Creek Reservoir"=>array("22510","UT","942"),
    //  "Lost Lake" => "ll",*/
    "McPhee Reservoir"=>array("381100","CO","958"),
    "Meeks Cabin Reservoir"=>array("32470","WY","944"),
    "Morrow Point Reservoir"=>array("117025","CO","914"),
    "Moon Lake Reservoir"=>array("49500","UT","930"),
    "Navajo Reservoir"=>array("1708600","CO","920"),
    "Newton Reservoir"=>array("5600","UT","959"),
    "Paonia Reservoir"=>array("20950","CO","945"),
    "Pineview Reservoir"=>array("110150","UT","946"),
    "Red Fleet Reservoir"=>array("26000","UT","960"),
    "Rifle Gap Reservoir"=>array("12168","CO","961"),
    "Rockport Reservoir"=>array("62100","UT","947"),
    "Ridgway Reservoir"=>array("84230","CO","948"),
    "Scofield Reservoir"=>array("73600","UT","931"),
    "Silver Jack Reservoir"=>array("12820","CO","939"),
    "Stateline Reservoir"=>array("12000","UT","949"),
   // "Strawberry Reservoir"=>array("1106500","UT","929"),
    "Starvation Reservoir"=>array("167310","UT","928"),
    "Steinaker Reservoir"=>array("38173","UT","927"),
    "Taylor Park Reservoir"=>array("106200","CO","912"),
    //   "Trial Lake" => "tl",
    "Upper Stillwater Reservoir"=>array("33123","UT","963"),
    "Vallecito Reservoir"=>array("125400","CO","933"),
    //  "Washington Lake" => "wl",
    //  "Willard Bay Reservoir" => "wb"
);

$last_month = date("M", strtotime("first day of previous month"));
$last_month_full = date("m/Y", strtotime("first day of previous month"));

foreach($reservoirs as $key => $reservoir) {
    $url = "https://www.usbr.gov/rsvrWater/rsv40Day.html?siteid=" . $reservoir[2] . "&reservoirtype=Reservoir";
    $html = file_get_html($url, true);

    $full_data = $html->find('tbody tr');
    $file_base = str_replace(' ', '_', strtolower($key));
    $fh = fopen('data/uc_daily/' . $file_base . '.csv', 'wb');
    fputcsv($fh, array('reservoir', 'storage', 'capacity', 'pct_full', 'date', 'state'));

    foreach($full_data as $row) {
       $date = $row->find('td',0)->plaintext;
       $date_parts = preg_split('/-/', $date);
       $af = $row->find('td',2)->plaintext;

       if($date_parts[1] == $last_month) {
           $acre_feet = $row->find('td',2)->plaintext;
           $formatted_date = months($date_parts[1]) . '/' . $date_parts[0] . '/' . $date_parts[2];
           if($key != 'Lost Creek Reservoir') {
               $res_name = str_ireplace('reservoir', '', $key);
           } else {
               $res_name = $key;
           }

           fputcsv($fh, array(trim($res_name), $af, $reservoir[0], '', $formatted_date, $reservoir[1]));
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
        case 'Jan':
            return '01';
            break;
        case 'Feb':
            return '02';
            break;
        case 'Mar':
            return '03';
            break;
        case 'Apr':
            return '04';
            break;
        case 'May':
            return '05';
            break;
        case 'Jun':
            return '06';
            break;
        case 'Jul':
            return '07';
            break;
        case 'Aug':
            return '08';
            break;
        case 'Sep':
            return '09';
            break;
        case 'Oct':
            return '10';
            break;
        case 'Nov':
            return '11';
            break;
        case 'Dec':
            return '12';
            break;
    }
}