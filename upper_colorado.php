<?php
include 'functions.php';

/**
 * Upper Colorado Basin Reservoirs
 * http://www.usbr.gov/uc/water/rsvrs/ops/r40day.html
 */

//$base = "http://www.usbr.gov/uc/water/rsvrs/ops/crsp_40_";

$reservoirs = array(
    "Blue Mesa Reservoir" => array(940800, 'CO'),
    "Big Sandy Reservoir" => array(38300, 'WY'),
   // "Brantley Reservoir" => "bt",
    "Caballo Reservoir" => array(343990, 'NM'),
    "Causey Reservoir" => array(8730, 'UT'),
    "Currant Creek Reservoir" => array(15670, 'UT'),
    "Crystal Reservoir" => array(17540, 'CO'),
    "Deer Creek Reservoir" => array(152570, 'UT'),
  //  "East Canyon Reservoir" => "ec",
    "Echo Reservoir" => array(74000, 'UT'),
 //   "Eden Reservoir" => "er",
 //   "Elephant Butte Reservoir" => "eb",
    "Flaming Gorge Reservoir" => array(3788700, 'UT'),
    "Fontenelle Reservoir" => array(345360, 'WY'),
 //   "Fruitgrowers Reservoir" => "fgc",
 //   "Huntington North Reservoir" => "hn",
    "Hyrum Reservoir" => array(18685, 'UT'),
    "Jackson Gulch Reservoir" => array(9948, 'CO'),
//    "Joe's Valley Reservoir" => "jv",
 //   "Jordanelle Reservoir" => "jr",
    "Lake Powell" => array(24322000, 'AZ&UT'),
 //   "Lake Sumner" => "su",
    "Lemon Reservoir" => array(39792, 'CO'),
 /*   "Lost Creek Reservoir" => "lc",
    "Lost Lake" => "ll",
    "McPhee Reservoir" => "mr",
    "Meeks Cabin Reservoir" => "mc",*/
    "Morrow Point Reservoir" => array(117025, 'CO'),
    "Moon Lake Reservoir" => array(49500, 'UT'),
    "Navajo Reservoir" => array(1708600, 'CO'),
  /*  "Newton Reservoir" => "nw",
    "Paonia Reservoir" => "po",
    "Pineview Reservoir" => "pv",
    "Red Fleet Reservoir" => "rf",*/
    "Rifle Gap Reservoir" => array(12168, 'CO'),
    "Rockport Reservoir" => array(62100, 'UT'),
  //  "Ridgway Reservoir" => "rw",
    "Santa Rosa Reservoir" => array(717000, 'NM'),
    "Scofield Reservoir" => array(73600, 'UT'),
  /*  "Silver Jack Reservoir" => "sj",
    "Stateline Reservoir" => "sl",
    "Strawberry Reservoir" => "sw",
    "Starvation Reservoir" => "sv",*/
    "Steinaker Reservoir" => array(38173, 'UT'),
    "Taylor Park Reservoir" => array(106200, 'CO'),
 //   "Trial Lake" => "tl",
  //  "Upper Stillwater Reservoir" => "us",
    "Vallecito Reservoir" => array(125400, 'CO'),
  //  "Washington Lake" => "wl",
  //  "Willard Bay Reservoir" => "wb"
);

foreach($reservoirs as $key => $reservoir) {
    $file_base = str_replace(' ', '_', strtolower($key));
    $fc = fopen("data/uc_m/$file_base.csv", "wb");
    fputcsv($fc, array('reservoir', 'storage', 'capacity', 'date', 'state'));

    $file = "data/uc/$file_base.csv";

    if (($handle = fopen($file, "r")) !== FALSE) {
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            if(!preg_match('/\d{4}/', $data[0]) || empty($data[1])) continue;

            $res_name = trim(str_replace('Reservoir', '', $key));
            $format_date = date_formatting($data[0]);
            fputcsv($fc, array($res_name, $data[1], $reservoir[0], $format_date, $reservoir[1]));
        }
        fclose($handle);
    }
    fclose($fc);
}


function date_formatting($date) {
    $dates = explode('-', $date);
    $month = months($dates[1]);

    return $month . "/" . $dates[2];
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

$path = 'data/uc_m';
$files = scandir($path);

foreach($files as $file) {
    if(!is_dir($file) && !preg_match('/^\./', $file)) {
        $row = 1;
        $res = '';
        $capacity = '';
        $state = '';
        if (($handle = fopen($path . '/' . $file, "r")) !== FALSE) {
            $months = array();
            $months_list = array();
            $fh = fopen('data/uc_mf/' . $file, 'wb');
            while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                if($row == 1) {
                    fputcsv($fh, array('reservoir', 'storage', 'capacity', 'pct_capacity', 'date', 'state'));
                } else {
                    $months[$data[3]][] = $data[1];
                }
                $res = $data[0];
                $capacity = $data[2];
                $state = $data[4];
                $row++;
            }

            foreach($months as $key => $month) {
                $monthly_avg = round(array_sum($month) / count($month));
                $monthly_avg_pct = round(($monthly_avg / $capacity) * 100, 1);

                fputcsv($fh, array($res, $monthly_avg, $capacity, $monthly_avg_pct, $key, $state));
            }
            echo $res . "\n";

            fclose($fh);
            fclose($handle);
        }
    }
}