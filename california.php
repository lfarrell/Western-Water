<?php
include 'functions.php';
include 'simple_html_dom.php';

$file = 'data/california.csv';
$fh = fopen($file, 'a');

if(!filesize($file)) {
    fputcsv($fh, array('reservoir', 'capacity', 'storage', 'storage_change', 'pct_capacity', 'avg_storage', 'pct_avg', 'storage_last_year', 'date'));
}


// Data from California Data Exchange Center
$path = 'http://cdec.water.ca.gov/cgi-progs/reservoirs/RES';

$html = new simple_html_dom();
$html->load_file($path);

$date_rows = $html->find('h1+h3');
$date = preg_split('/-/', $date_rows[0]->plaintext);

$rows = $html->find('tr');

$reservoirs = array();

foreach($rows as $row) {
    $capacity = $row->find('td',2);
    $cap = $capacity->plaintext;

    if(preg_match('/\d$/', $cap)) {
        $site = $row->find('td', 0);
        $reservoirs['site'] = $site->plaintext;

        $reservoirs['capacity'] = $cap;

        $storage = $row->find('td', 4);
        $reservoirs['storage'] = $storage->plaintext;

        $change = $row->find('td', 5);
        $reservoirs['change'] = $change->plaintext;

        $pct_capacity = $row->find('td', 6);
        $reservoirs['pct_capacity'] = $pct_capacity->plaintext;

        $avg_storage = $row->find('td', 7);
        $reservoirs['avg_storage'] = $avg_storage->plaintext;

        $pct_avg = $row->find('td', 8);
        $reservoirs['pct_avg'] = $pct_avg->plaintext;

        $year_ago = $row->find('td', 11);
        $reservoirs['year_ago'] = $year_ago->plaintext;

        $reservoirs['date'] = trim($date[1]);

        fputcsv($fh, $reservoirs);
    }
}

fclose($fh);