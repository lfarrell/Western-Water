<?php
$path = 'data/tx';
$files = scandir($path);

foreach($files as $file) {
    if(!is_dir($file) && !preg_match('/^\./', $file)) {
        $row = 1;
        $res = '';
        $capacity = '';
        if (($handle = fopen($path . '/' . $file, "r")) !== FALSE) {
            $months = array();
            $months_list = array();
            $fh = fopen('data/tx_m/' . $file, 'wb');
            while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                if($row == 1) {
                    fputcsv($fh, $data);
                } else {
                    $date = explode('/', $data[4]);
                    $date_parts = $date[0] . '/' . $date[2];
                    $months[$date_parts][] = $data[1];
                }
                $res = $data[0];
                $capacity = $data[2];
                $row++;
            }

            foreach($months as $key => $month) {
                $monthly_avg = round(array_sum($month) / count($month));
                $monthly_avg_pct = round(($monthly_avg / $capacity) * 100, 1);

                if(preg_match('/20\d{2}$/', $key) && !preg_match('/[A-Za-z]/', $key)) {
                    fputcsv($fh, array($res, $monthly_avg, $capacity, $monthly_avg_pct, $key));
                }

            }
            echo $res . "\n";

            fclose($fh);
            fclose($handle);
        }
    }
}