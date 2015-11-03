<?php
include 'functions.php';
date_default_timezone_set('America/New_York');

$az_reservoirs = array(
    '09469000' => array('capacity' => 910000, 'name' => 'San Carlos', 'state' => 'AZ'),
    '09398300' => array('capacity' => 15000, 'name' => 'C. C. Cragin', 'state' => 'AZ'),
    '09509501' => array('capacity' => 131500, 'name' => 'Horseshoe', 'state' => 'AZ'),
    '09509502' => array('capacity' => 178186, 'name' => 'Bartlett', 'state' => 'AZ'),
    '09384600' => array('capacity' => 27000, 'name' => 'Lyman Lake', 'state' => 'AZ')
);
/*
$id_reservoirs = array(
    '13039000' => array('capacity' => 90000, 'name' => 'Henrys Lake', 'state' => 'ID'),
    '13115000' => array('capacity' => 90000, 'name' => 'Mud Lake', 'state' => 'ID')
); */

$base = 'raw_data/usgs_az/';

$last_month = date("Y-m-d", strtotime("first day of previous month"));
$date_bits = preg_split('/-/', $last_month);
$days = cal_days_in_month(CAL_GREGORIAN, $date_bits[1], $date_bits[0]);
$end_date = $date_bits[0] . '-' . $date_bits[1] . '-' . $days;

foreach($az_reservoirs as $res_key => $res_info) {
    $url = "http://waterdata.usgs.gov/nwis/dv?cb_00054=on&format=rdb&site_no=$res_key&referred_module=sw&period=&begin_date=$last_month&end_date=$end_date";

    $file_name = strtolower(preg_replace('/\s+/', '', $res_info['name']));
    get_records($url,  $base . $file_name  . ".tsv", 'a');

    if (($handle = fopen($base . $file_name  . ".tsv", "r")) !== FALSE) {
        $months = array();
        $months_list = array();
        $fh = fopen('data/usgs_az_month/' . $file_name . ".csv", 'wb');
        $if = fopen('data/az_month/' . $file_name . ".csv", 'wb');
    //    fputcsv($fh, array('reservoir','storage','capacity','pct_capacity','date', 'state'));

        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            $values = preg_replace('/\t+/', ',', $data[0]);
            $val_array = explode(',', $values);

            if(preg_match('/^USGS/', $val_array[0])) {

                $date = explode('-', $val_array[2]);
                $date_parts = $date[1] . '/' . $date[0];
                $months[$date_parts][] = $val_array[3];
            }
        }

        foreach($months as $key => $month) {
            $monthly_avg = round(array_sum($month) / count($month));
            $monthly_avg_pct = round(($monthly_avg / $res_info['capacity']) * 100, 1);
            // print_r(array($res_info['name'], $monthly_avg, $res_info['capacity'], $monthly_avg_pct, $key, 'AZ'));
            fputcsv($fh, array($res_info['name'], $monthly_avg, $res_info['capacity'], $monthly_avg_pct, $key, 'AZ'));
            fputcsv($if, array($res_info['name'], $monthly_avg, $res_info['capacity'], $monthly_avg_pct, $key, 'AZ'));
        }
        fclose($handle);
    };

    echo $res_info['name'] . " processed\n";
}