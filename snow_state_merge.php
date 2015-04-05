<?php
$states = array('az', 'cal', 'co', 'id', 'nv', 'nm', 'or', 'utah', 'wa', 'wy');

foreach($states as $state) {
    $base = 'data/' . $state . '_snow';
    $files = scandir($base);
    $fh = fopen($base . '/all_' . $state . '.csv', 'wb');
    fputcsv($fh, array('location', 'snow_water_equivalent', 'date'));

    foreach($files as $file) {
        if(!preg_match('/^\./', $file)) {
            if (($handle = fopen($base . '/' . $file, "r")) !== FALSE) {
                while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                    if(preg_match('/location/', $data[0])) { continue; }
                    fputcsv($fh, array($data[0], $data[2], $data[4]));
                }
                fclose($handle);
            }
        }
    }
    fclose($fh);
    echo $state . " processed\n";
}