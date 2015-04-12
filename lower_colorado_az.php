<?php
include 'functions.php';
include 'simple_html_dom.php';

date_default_timezone_set('America/Phoenix');

$bureau_reservoirs = array(
    'Horse Mesa' => array('capacity' => 245138, 'state' => 'AZ'),
    'Roosevelt' => array('capacity' => 1381580, 'state' => 'AZ'),
    'Mormon Flat' => array('capacity' => 57852, 'state' => 'AZ'),
    'Stewart Mtn' => array('capacity' => 69765, 'state' => 'AZ'),
    'Bartlett' => array('capacity' => 178490, 'state' => 'AZ'),
    'Horseshoe' => array('capacity' => 131500, 'state' => 'AZ')
);

$path = "http://data.hydrometdataservice.info/dwr/report.aspx?dt=";

$last_month = date("m/Y", strtotime("first day of previous month"));
$date_bits = preg_split('/\//', $last_month);
$days = cal_days_in_month(CAL_GREGORIAN, $date_bits[0], $date_bits[1]);

$fd = fopen("data/lower_az.csv", "wb");
fputcsv($fd, array('reservoir','storage','capacity','pct_capacity','date','state'));

for($i=1; $i<=$days; $i++) {
    $month = preg_replace('/^0/', '', $date_bits[0]);
    $url = $path . $month . '/' . $i . '/' . $date_bits[1];

    $lc_html = file_get_html($url);

    $table = $lc_html->find('table.section', 0);
    $rows = $table->find('tr');

    foreach($rows as $key => $row) {
        $reservoir = $row->find('td', 0);
        $res_name = $reservoir->plaintext;
        echo $res_name . "\n";

        if(array_key_exists($res_name, $bureau_reservoirs)) {
            $current_level = $row->find('td', 4);
            $curr_level = str_ireplace(',', '', $current_level->plaintext);
            $cap = $bureau_reservoirs[$res_name]['capacity'];
            $pct_cap = round(($curr_level / $cap) * 100, 1);

            fputcsv($fd, array($res_name, $curr_level, $cap, $pct_cap, $date_bits[0]. '/' . $i . '/' . $date_bits[1], 'AZ'));
        }
    }
}
fclose($fd);