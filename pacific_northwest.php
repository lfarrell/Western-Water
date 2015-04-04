<?php
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
);

foreach($stations as $station_code => $station) {
    $url = "http://www.usbr.gov/pn-bin/webarccsv.pl?station=$station_code&format=3&year=2000&month=+1&day=+1&year=2015&month=+3&day=31&pcode=AF";
}