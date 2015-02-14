<?php
/**
 * Texas
 */
$tx_base = "data/tx_m";
$tx_files = scandir($tx_base);

$cal_base = "data/ca_month";
$cal_files = scandir($cal_base);

$fh = fopen("all.csv", "wb");
fputcsv($fh, array('reservoir','storage','capacity','pct_capacity','date','state'));

function merge($base, $fh, $files, $state = 'CA') {
    foreach($files as $file) {
        if(!preg_match('/^\./', $file)) {
            if (($handle = fopen($base . '/' . $file, "r")) !== FALSE) {
                while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                    $year = preg_split('/\//', $data[4])[1];
                    if($data[0] == 'reservoir' || $year < 1990) continue;

                    $res = explode('-', $data[0]);
                    $data[0] = ucwords(implode(' ', $res));
                    echo $data[0] . "\n";

                    $data[$state] = $state;

                    fputcsv($fh, $data);
                }
                fclose($handle);
            };
        }
    }
}

merge($tx_base, $fh, $tx_files, 'TX');
merge($cal_base, $fh, $cal_files);