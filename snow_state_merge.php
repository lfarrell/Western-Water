<?php
$states = array('az', 'cal', 'co', 'nv', 'nm', 'utah', 'wy');

foreach($states as $state) {
    $base = 'data/' . $state . '_snow';
    $files = scandir($base);
    $fh = fopen($base . '/all_' . $state . '.csv', 'wb');
    fputcsv($fh, array('location', 'snow_depth', 'snow_water_equivalent', 'provider', 'date'));

    foreach($files as $file) {
        if(!preg_match('/^\./', $file)) {
            if (($handle = fopen($base . '/' . $file, "r")) !== FALSE) {
                while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                    if(preg_match('/location/', $data[0])) { continue; }
                    fputcsv($fh, $data);
                }
                fclose($handle);
            }
        }
    }
    fclose($fh);
    echo $state . " processed\n";
}