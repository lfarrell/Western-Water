<?php
include 'functions.php';
include 'simple_html_dom.php';

/**
 * Lower Colorado Basin Reservoirs
 * AF of water
 */
$capacities = array(
    'lake_mead' => 25877000,
    'lake_mohave' => 1809800,
    'lake_havasu' => 619400
);

$states = array(
    'lake_mead' => 'AZ & NV',
    'lake_mohave' => 'AZ & NV',
    'lake_havasu' => 'AZ & CA'
);

/*
$reservoirs = array(
    'lake_mead' => 'http://www.usbr.gov/lc/region/g4000/riverdata/gage-last-month-table.cfm?GAGE=30',
    'lake_mohave' => 'http://www.usbr.gov/lc/region/g4000/riverdata/gage-last-month-table.cfm?GAGE=60',
    'lake_havasu' => 'http://www.usbr.gov/lc/region/g4000/riverdata/gage-last-month-table.cfm?GAGE=110'
); */

$reservoirs = array(
    'lake_mead' => 'http://www.usbr.gov/lc/region/g4000/riverdata/gage-month-table.cfm?GAGE=30',
    'lake_mohave' => 'http://www.usbr.gov/lc/region/g4000/riverdata/gage-month-table.cfm?GAGE=60',
    'lake_havasu' => 'http://www.usbr.gov/lc/region/g4000/riverdata/gage-month-table.cfm?GAGE=110'
);

$html = new simple_html_dom();

foreach($reservoirs as $key => $reservoir) {
    $raw_data = "raw_data/$key.html";
    get_records($reservoir, $raw_data, 'wb');

 /*   $values = array();
    $file = "data/$key.csv";
    $fh = fopen($file, 'a');

    if(!filesize($file)) {
        fputcsv($fh, array('reservoir','storage',' capacity','pct_capacity','date' ,'state'));
    }

    $res = $key;
    $html->load_file($raw_data);
    $rows = $html->find('tr');

    foreach($rows as $row) {
        $pct_cap = $row->find('td',3);
        $pct = trim($pct_cap->plaintext);

        if(preg_match('/^\d/', $pct)) {
            $find_date = $row->find('td',0);
            $date = $find_date->plaintext;
            $values['res'] = get_res($res);
            $storage = $row->find('td',2);
            $values['storage'] = $storage_val;
            $storage_val = format_storage(trim($storage->plaintext));
            $values['capacity'] = $capacities[$key];
            $values['pct_capacity'] = $pct;
            $values['date'] = format_date($date);
            $values['state'] = $states[$key];

            fputcsv($fh, $values);
        }

    }
    fclose($fh);*/
}