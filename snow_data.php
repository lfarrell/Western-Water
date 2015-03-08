<?php
include 'functions.php';
date_default_timezone_set('America/New_York');

$base_name = "snow/cal_snow.csv";

if (($handle = fopen($base_name, "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
       if(preg_match('/^http/', $data[9])) {
           $ch = curl_init($data[9]);
           $name = strtolower(preg_replace('/(\(|\)|#|\s|\')/', '_', $data[0] . '-' . $data[2]));
           $fp = fopen("raw_data/cal_snow/" . $name . ".csv", "w");

           curl_setopt($ch, CURLOPT_FILE, $fp);
           curl_setopt($ch, CURLOPT_HEADER, 0);
           curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);

           curl_exec($ch);
           curl_close($ch);
           fclose($fp);

           echo $name . " processed\n";
       }
    }
    fclose($handle);
}

$base_file = file($base_name);
$path = 'raw_data/cal_snow';
$files = scandir($path);

foreach($files as $file) {
    if(!preg_match('/^\./', $file)) {
        $site = preg_split('/-+/', $file);
        $name = ucwords(str_replace('_', ' ', $site[0]));
        $provider = explode('.', $site[1]);
        $provider = strtoupper(substr_replace($provider[0], '', -1));

        $fh = fopen('data/cal_snow/' . $file, "wb");
        fputcsv($fh, array('location', 'snow_depth', 'snow_water_equivalent', 'provider', 'date'));
        if (($handle = fopen($path . '/' . $file, "r")) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                if(preg_match('/^\d{4}/', $data[0]) && $data[0] >= 2000) {
                    $year = $data[0];
                    array_shift($data);
                    $unique_measurements = array_chunk($data, 3);

                    foreach($unique_measurements as $measurement) {
                        if(!preg_match('/^[A-Z]/', $measurement[0])) { continue; }
                        $date = date('Y-m-d', strtotime(strtolower($measurement[0]) . ' ' . $year));
                        fputcsv($fh, array($name, $measurement[1], $measurement[2], $provider, $date));
                    }
                }
            }
            fclose($handle);
        }
        fclose($fh);
    }
    $file . " processed\n";
}