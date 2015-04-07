<?php
include 'simple_html_dom.php';

$stations = array(
    'AGA' => array('name' => 'Agate', 'capacity' => 1671300, 'state' => 'OR'),
    'AMF' => array('name' => 'American Falls', 'capacity' => 1671300, 'state' => 'ID'),
    'AND' => array('name' => 'Anderson Ranch', 'capacity' => 503500, 'state' => 'ID'),
    'ARK' => array('name' => 'Arrowrock', 'capacity' => 300850, 'state' => 'ID'),
    'BEU' => array('name' => 'Agency Valley', 'capacity' => 59200, 'state' => 'OR'),
    'BNK' => array('name' => 'Banks Lake', 'capacity' => 1237000 , 'state' => 'WA'),
    'BUL' => array('name' => 'Bully Creek', 'capacity' => 31650, 'state' => 'OR'),
    'CLS' => array('name' => 'Cold Springs', 'capacity' => 40000, 'state' => 'OR'),
    'CRA' => array('name' => 'Crane Prairie', 'capacity' => 55300, 'state' => 'OR'),
    'CRE' => array('name' => 'Crescent Lake', 'capacity' => 566600, 'state' => 'OR'),
    'CSC' => array('name' => 'Lake Cascade', 'capacity' => 693100, 'state' => 'ID'),
    'DED' => array('name' => 'Deadwood', 'capacity' => 154000, 'state' => 'ID'),
  //  'DRW' => array('name' => 'Drews', 'capacity' => , 'state' => 'OR'),
    'EMI' => array('name' => 'Emigrant Lake', 'capacity' => 40530, 'state' => 'OR'),
    'EMM' => array('name' => 'Black Canyon', 'capacity' => 44700, 'state' => 'ID'),
    'FIS' => array('name' => 'Fish Lake', 'capacity' => 7836, 'state' => 'OR'),
    'FOR' => array('name' => 'Fourmile Lake', 'capacity' => 15600, 'state' => 'OR'),
    'GCL' => array('name' => 'Grand Coulee/FDR Lake', 'capacity' => 19562000, 'state' => 'WA'),
    'GRS' => array('name' => 'Grassy Lake', 'capacity' => 15200, 'state' => 'WY'),
    'HAY' => array('name' => 'Haystack', 'capacity' => 5600, 'state' => 'OR'),
 //   'HEN' => array('name' => 'Henrys Lake', 'capacity' => , 'state' => 'ID'),
    'HPD' => array('name' => 'Howard Prairie Lake', 'capacity' => 62100, 'state' => 'OR'),
    'HYA' => array('name' => 'Hyatt', 'capacity' => 16900, 'state' => 'OR'),
    'ISL' => array('name' => 'Island Park', 'capacity' => 135000, 'state' => 'ID'),
    'JCK' => array('name' => 'Jackson Lake', 'capacity' => 847000, 'state' => 'WY'),
    'LOW' => array('name' => 'Lake Lowell', 'capacity' => 169000, 'state' => 'ID'),
    'LUC' => array('name' => 'Lucky Peak Lake', 'capacity' => 307000, 'state' => 'ID'),
    'MAN' => array('name' => 'Mann Creek', 'capacity' => 10900, 'state' => 'ID'),
    'MCK' => array('name' => 'McKay', 'capacity' => 65534, 'state' => 'OR'),
    'MIL' => array('name' => 'Milner', 'capacity' => 36300, 'state' => 'ID'),
    'MIN' => array('name' => 'Lake Walcott', 'capacity' => 210200, 'state' => 'ID'),
    'OCH' => array('name' => 'Ochoco', 'capacity' => 39000, 'state' => 'OR'),
    'OWY' => array('name' => 'Lake Owyhee', 'capacity' => 1122000, 'state' => 'OR'),
    'PAL' => array('name' => 'Palisades', 'capacity' => 1200000, 'state' => 'ID'),
 //   'PAY' => array('name' => 'Payette Lake', 'capacity' => , 'state' => 'ID'),
    'PHL' => array('name' => 'Phillips Lake', 'capacity' => 114000, 'state' => 'OR'),
    'PRV' => array('name' => 'Prineville', 'capacity' => 150200, 'state' => 'OR'),
    'RSA' => array('name' => 'Reservoir A', 'capacity' => 3000, 'state' => 'ID'),
    'RIR' => array('name' => 'Ririe Lake', 'capacity' => 100500, 'state' => 'ID'),
    'SCO' => array('name' => 'Henry Hagg Lake', 'capacity' => 53640, 'state' => 'OR'),
    'SOL' => array('name' => 'Soldiers Meadow', 'capacity' => 2370, 'state' => 'ID'),
    'THF' => array('name' => 'Thief Valley', 'capacity' => 17600, 'state' => 'OR'),
    'UNY' => array('name' => 'Unity', 'capacity' => 25500, 'state' => 'OR'),
    'WAR' => array('name' => 'Warm Springs', 'capacity' => 169714, 'state' => 'OR'),
    'WAS' => array('name' => 'Clear Lake', 'capacity' => 13100, 'state' => 'OR'),
    'WIC' => array('name' => 'Wickiup', 'capacity' => 206880, 'state' => 'OR'),
    'WLD' => array('name' => 'Wildhorse', 'capacity' => 71500, 'state' => 'NV'),
    'WOD' => array('name' => 'Little Wood', 'capacity' => 30000, 'state' => 'ID'),
);

foreach($stations as $station_code => $station) {
    $fh = fopen('data/pn/' . $key . '.csv', 'wb');
    fputcsv($fh, array('reservoir', 'storage' ,'capacity' ,'pct_capacity',' date'));
    $url = "http://www.usbr.gov/pn-bin/webarccsv.pl?station=$station_code&format=3&year=2000&month=+1&day=+1&year=2015&month=+3&day=31&pcode=AF";

    $html = new simple_html_dom();
    $html->load_file($url);

    $rows = $html->find('tr');

    foreach($rows as $row) {
        $full_date = $row->find('td',0);
        $date = $full_date->plaintext;

        $level = $row->find('td',1);
        $res_level = $level->plaintext;

        $pct_capacity = round(($res_level / $station['capacity']) * 100, 1);

        fputcsv($fh, array($station['name'], trim($res_level), $res_level, $station['capacity'], $pct_capacity, $full_date));

        echo $station . "processed\n";
    }

    fclose($fh);
}