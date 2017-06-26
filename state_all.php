<?php
include 'functions.php';

$states = array('az', 'ca', 'co', 'id', 'nm', 'nv', 'or', 'tx', 'utah', 'wa', 'wy');

foreach($states as $state) {
    $fh = fopen('data/states_all/' . $state . '_all.csv', 'wb');
    fputcsv($fh, array('reservoir','storage','capacity','pct_capacity','date'));
    $suffix = ($state == 'tx') ? '_m' : '_month';
    $file_dir = 'data/' . $state . $suffix;
    $files = scandir($file_dir);

    foreach($files as $file) {
        if(!preg_match('/^\./', $file)) {
            if (($handle = fopen($file_dir . '/' . $file, "r")) !== FALSE) {
                while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                    $date = preg_split('/\//', $data[4]);
                    if(!preg_match('/reservoir/', $data[0]) && $date[1] >= 2000) {
                        if($data[0] == "Coyote Res-sta Clara") {
                            $data[0] = "Coyote Res Sta Clara";
                        }

                        if($data[0] == "Clear Lk - Cache Creek") {
                            $data[0] = "Clear Lk   Cache Creek";
                        }

                        if($data[0] == "Clear Lk - Klamath R") {
                            $data[0] = "Clear Lk   Klamath R";
                        }

                        fputcsv($fh, $data);
                    }
                }
                fclose($handle);
            }
        }
    }
    fclose($fh);
    $state . "processed\n";
}