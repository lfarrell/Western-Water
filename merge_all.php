<?php
/**
 * Texas
 */
$base = "data/tx";
$files = scandir($base);
$fh = fopen("all.csv", "wb");
fputcsv($fh, array('reservoir','storage','capacity','pct_capacity','date','state'));

foreach($files as $file) {
    if(!preg_match('/^\./', $file)) {
        if (($handle = fopen($base . '/' . $file, "r")) !== FALSE) {
            while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                if($data[0] == 'reservoir') continue;

                $res = explode('-', $data[0]);
                $data[0] = ucwords(implode(' ', $res));
                echo $data[0] . "\n";
                $state = count($data);
                $data[$state] = 'TX';

                fputcsv($fh, $data);
            }
            fclose($handle);
        };
    }
}

/**
 * California
 */
if (($handle = fopen('data/california.csv', "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        if($data[0] == 'reservoir') continue;

        $data[0] = ucwords(strtolower($data[0]));
        fputcsv($fh, array($data[0], $data[2], $data[1], $data[4], $data[8], 'CA'));
        echo $data[0] . "--->" . $data[8] . "\n";
    }
    fclose($handle);
};


fclose($fh);