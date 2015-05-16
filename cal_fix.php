<?php
$reservoirs = scandir('data/ca_month');

foreach($reservoirs as $reservoir) {
    if(!preg_match('/^\./', $reservoir)) {
        $ft = fopen('data/ca/' . $reservoir, "wb");
        if (($handle = fopen('data/ca_month/' . $reservoir, "r")) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                if(!preg_match('/04\/2015/', $data[4])) {
                    fputcsv($ft, $data);
                }

            }
        }
        fclose($handle);
        fclose($ft);
    }

}