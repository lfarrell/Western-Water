<?php
include 'functions.php';
date_default_timezone_set('America/New_York');

$reservoirs = array(
    "Rimrock" => array("station_id" => "12491000", "capacity" => 198000, "state" => "WA"),
);

$current_month = date('m', strtotime('this month'));
$current_year = date('Y', strtotime('this month'));

foreach($reservoirs as $res_name => $res) {
    $url = "http://www.wcc.nrcs.usda.gov/reportGenerator/view_csv/customCalendarYearGroupByMonthReport/monthly/" . $res['station_id'] . ":" . $res['state'] .":BOR|id=%22%22|name/POR_BEGIN,POR_END/RESC::value";
    $res_name_format = preg_replace('/(\s+|\'|#)/', '_', $res_name);
    $file_name = 'raw_data/usda/' . $res['state'] . '_' . $res_name_format . ".csv";
    get_records($url, $file_name, "wb");

    $fh = fopen('data/usda_month/' . $res['state'] . '_' . $res_name_format . ".csv", 'wb');
    fputcsv($fh, array('reservoir','storage','capacity','pct_capacity','date', 'state'));

    if (($handle = fopen($file_name, "r")) !== FALSE) {
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            if(preg_match('/^\d/', $data[0])) {
                $num = count($data);
                for ($c=0; $c < $num; $c++) {
                    if($data[0] < 2000 || !$c || $data[$c] == '' || !preg_match('/\d/', $data[$c])) { continue; }

                    $pct_capacity = round(($data[$c] / $res['capacity']) * 100, 1);
                    $month = ($c < 10) ? '0' . $c : $c;

                    if($month == $current_month && $data[0] == $current_year) continue;
                    fputcsv($fh, array($res_name, $data[$c], $res['capacity'], $pct_capacity, $month . '/' . $data[0], $res['state']));
                }
            }
        }
        fclose($handle);
    }

    fclose($fh);
    echo $res_name . " processed\n";
}