<?php
$fh = fopen("all_resv_clean.csv", "wb");

if (($handle = fopen('station_data/all_resv.csv', "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        if($data[0] == 'reservoir') continue;

        $data[0] = ucwords(strtolower($data[0]));
      //  $data[3] = ($data[3] == "ca") ? "CA" : "TX";
        fputcsv($fh, $data);
        echo $data[0] . "\n";
    }
    fclose($handle);
};
$fh = fclose($fh);