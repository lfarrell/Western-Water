<?php
include 'simple_html_dom.php';
date_default_timezone_set('America/Denver');

$fh = fopen('raw_data/denver_water.csv', 'a');

$url = "http://www.denverwater.org/SupplyPlanning/WaterSupply/ReservoirLevels/?fullsite";
$html = file_get_html($url);

$date = $html->find('h2');
$full_date = preg_split('/:/', $date[0]->plaintext);
$formatted_date =  date("m/d/Y", strtotime(trim($full_date[1])));

$res = $html->find('tr');

foreach($res as $row) {
    $storage = $row->find('td', 4);
    $store = str_replace(',', '', $storage->plaintext);

    if(preg_match('/^\d/', $store)) {
        $reservoir = $row->find('td', 0);
        $res_name = str_replace('*', '', $reservoir->plaintext);

        $capacity = $row->find('td', 6);
        $cap = str_replace(',', '', $capacity->plaintext);

        echo $res_name . "\n";
        echo $cap . "\n";
        fputcsv($fh, array($res_name, $store, $cap, $formatted_date));
    }
}
