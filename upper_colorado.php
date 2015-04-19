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
    "Crawford Reservoir" => array(14395, 'CO'),
    "Currant Creek Reservoir" => array(15670, 'UT'),
    "Crystal Reservoir" => array(17540, 'CO'),
    "Deer Creek Reservoir" => array(152570, 'UT'),
    "East Canyon Reservoir" => array(51200, 'UT'),
    "Echo Reservoir" => array(74000, 'UT'),
    //   "Eden Reservoir" => "er",
    "Elephant Butte Reservoir" => array(2065010, 'NM'),
    "Flaming Gorge Reservoir" => array(3788700, 'UT'),
    "Fontenelle Reservoir" => array(345360, 'WY'),
    "Fruitgrowers Reservoir" => array(4540, 'CO'),
    "Huntington North Reservoir" => array(5420, 'UT'),
    "Hyrum Reservoir" => array(18685, 'UT'),
    "Jackson Gulch Reservoir" => array(9948, 'CO'),
    "Joes Valley Reservoir" => array(62460, 'UT'),
    "Jordanelle Reservoir" => array(320300, 'UT'),
    "Lake Powell" => array(24322000, 'AZ&UT'),
    "Lake Sumner Reservoir" => array(43768, 'NM'),
    "Lemon Reservoir" => array(39792, 'CO'),
    "Lost Creek Reservoir" => array(22510, 'UT'),
    //  "Lost Lake" => "ll",*/
    "McPhee Reservoir" => array(381100, 'CO'),
    "Meeks Cabin Reservoir" => array(32470, 'WY'),
    "Morrow Point Reservoir" => array(117025, 'CO'),
    "Moon Lake Reservoir" => array(49500, 'UT'),
    "Navajo Reservoir" => array(1708600, 'CO'),
    "Newton Reservoir" => array(5600, 'UT'),
    "Paonia Reservoir" => array(20950, 'CO'),
    "Pineview Reservoir" => array(110150, 'UT'),
    "Red Fleet Reservoir" => array(26000, 'UT'),
    "Rifle Gap Reservoir" => array(12168, 'CO'),
    "Rockport Reservoir" => array(62100, 'UT'),
    "Ridgway Reservoir" => array(84230, 'CO'),
    "Santa Rosa Reservoir" => array(717000, 'NM'),
    "Scofield Reservoir" => array(73600, 'UT'),
    "Silver Jack Reservoir" => array(12820, 'CO'),
    "Stateline Reservoir" => array(12000, 'UT'),
    "Strawberry Reservoir" => array(1106500, 'UT'),
    "Starvation Reservoir" => array(167310, 'UT'),
    "Steinaker Reservoir" => array(38173, 'UT'),
    "Taylor Park Reservoir" => array(106200, 'CO'),
    //   "Trial Lake" => "tl",
    "Upper Stillwater Reservoir" => array(33123, 'UT'),
    "Vallecito Reservoir" => array(125400, 'CO'),
    "Vega Reservoir" => array(33800, 'CO'),
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