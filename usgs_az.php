<?php
include 'functions.php';

$az_reservoirs = array(
    '09469000' => array('capacity' => 910000, 'name' => 'San Carlos', 'state' => 'AZ'),
    '09398300' => array('capacity' => 15000, 'name' => 'C. C. Cragin', 'state' => 'AZ'),
    '09509501' => array('capacity' => 131500, 'name' => 'Horseshoe', 'state' => 'AZ'),
    '09509502' => array('capacity' => 178186, 'name' => 'Bartlett', 'state' => 'AZ'),
    '09384600' => array('capacity' => 27000, 'name' => 'Lyman Lake', 'state' => 'AZ')
);

$base = 'raw_data/usgs_az/';

foreach($az_reservoirs as $res_key => $res_info) {
    $url = "http://waterdata.usgs.gov/nwis/dv?cb_00054=on&format=rdb&site_no=$res_key&referred_module=sw&period=&begin_date=2000-01-01&end_date=2015-03-31";
    $file_name = strtolower(preg_replace('/\s+/', '', $res_info['name']));
    get_records($url,  $base . $file_name  . ".tsv", 'wb');

    if (($handle = fopen($base . $file_name  . ".tsv", "r")) !== FALSE) {
        $months = array();
        $months_list = array();
        $fh = fopen('data/usgs_az_month/' . $file_name . ".csv", 'wb');
        fputcsv($fh, array('reservoir','storage','capacity','pct_capacity','date', 'state'));

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

            fputcsv($fh, array($res_info['name'], $monthly_avg, $res_info['capacity'], $monthly_avg_pct, $key, 'AZ'));
        }
        fclose($handle);
    };

    echo $res_info['name'] . " processed\n";
}