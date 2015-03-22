<?php
include 'functions.php';
date_default_timezone_set('America/New_York');

$states = array('az', 'cal', 'co', 'nv', 'nm', 'utah', 'wy');

$url_base = "http://www.wcc.nrcs.usda.gov/nwcc/rgrpt?station=";

foreach($states as $state) {
    if (($handle = fopen("snow/".$state."_snow.csv", "r")) !== FALSE) {
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            if(preg_match('/Site_Name/', $data[0])) { continue; }

            $ch = curl_init($url_base . $data[1] . '&report=snowmonth_hist');
            $name = strtolower(preg_replace('/(\(|\)|#|\s|\')/', '_', trim($data[0]) . '-' . $data[2]));
            $fp = fopen("raw_data/".$state."_snow/" . $name . ".csv", "w");

            curl_setopt($ch, CURLOPT_FILE, $fp);
            curl_setopt($ch, CURLOPT_HEADER, 0);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);

            curl_exec($ch);
            curl_close($ch);
            fclose($fp);

            echo $name . " processed\n";
        }
        fclose($handle);
    }

    $base_file = file("snow/".$state."_snow.csv");
    $path = 'raw_data/' . $state . '_snow';
    $files = scandir($path);

    foreach($files as $file) {
        if(!preg_match('/^\./', $file)) {
            $site = preg_split('/-+/', $file);
            $name = ucwords(str_replace('_', ' ', $site[0]));
            $provider = explode('.', $site[1]);
            $provider = strtoupper(substr_replace($provider[0], '', -1));

            $fh = fopen('data/' . $state . '_snow/' . $file, "wb");
            fputcsv($fh, array('location', 'snow_depth', 'snow_water_equivalent', 'provider', 'date'));
            if (($handle = fopen($path . '/' . $file, "r")) !== FALSE) {
                while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                    if(preg_match('/^\d{4}/', $data[0]) && $data[0] >= 2000) {
                        $year = $data[0];
                        array_shift($data);
                        $unique_measurements = array_chunk($data, 3);

                        foreach($unique_measurements as $measurement) {
                            if(!preg_match('/^[A-Z]/', $measurement[0])) { continue; }
                            $date = date('m/Y', strtotime(strtolower($measurement[0]) . ' ' . $year));
                            if(preg_match('/^(10|11|12)/', $date)) {
                                echo "Old date " .$date . "\n";
                                $datebits = preg_split('/\//', $date);
                                $date = $datebits[0] . '/' . ($datebits[1] - 1);
                                echo "New Date $date\n";
                            }
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
}