<?php
include 'functions.php';
include 'simple_html_dom.php';
date_default_timezone_set('America/Los_Angeles');
/**
 * Lower Colorado Basin Reservoirs
 * AF of water
 */
$reservoirs = array(
    'MEA' => array('capacity' => 25877000, 'state' => 'AZ & NV'),
    'MHV' => array('capacity' => 1809800, 'state' => 'AZ & NV'),
    'HVS' => array('capacity' => 619400, 'state' => 'AZ & CA'),
);
/*
$reservoirs = array(
    "KLM" => 486800,
    "GBR" => 94300,
    "CLK" => 451000
);

$states = array(
    'lake_mead' => 'AZ & NV',
    'lake_mohave' => 'AZ & NV',
    'lake_havasu' => 'AZ & CA'
); */

$day = date('d-M-Y+H:i');

foreach($reservoirs as $key => $reservoir) {
  //  $full_link = "http://cdec.water.ca.gov/cgi-progs/queryMonthly?$key";
    $full_link = "http://cdec.water.ca.gov/cgi-progs/queryMonthly?$key&d=$day&span=20years";

    try {
        $html = new simple_html_dom();
        $html->load_file($full_link);

        $res_name = $html->find('h1');
        $name = ucwords(strtolower(preg_replace('/\(.+$/', '', trim($res_name[0]->plaintext))));
        $file_name = preg_replace('/\s+/', '_', strtolower($name));

        $fh = fopen("data/lc_month/$file_name.csv", "a");
        fputcsv($fh, array("reservoir", "storage", "capacity", "pct_capacity", "date", "state"));

        $rows = $html->find('tr');
        foreach($rows as $row) {
            $date = $row->find('td',0);
            $d = $date->plaintext;

            $volume = $row->find('td',2);
            $vol = trim($volume->plaintext);

            $regx = '/^\d/';
            if(preg_match($regx, $vol)) {
                $pct = round(($vol / $reservoir['capacity']) * 100, 1);
                fputcsv($fh, array(trim($name), $vol, $reservoir['capacity'], $pct, $d, $reservoir['state']));
            }
        }
        fclose($fh);
        echo $key . " processed\n";
    } catch(Exception $e) {

    }
}