<?php
function get_records($path, $filename, $action) {
    $ch = curl_init($path);
    $fp = fopen($filename, $action);

    curl_setopt($ch, CURLOPT_FILE, $fp);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);

  //  curl_exec($ch);
    if(curl_exec($ch) === false)
    {
        echo 'Curl error: ' . curl_error($ch);
    }
    curl_close($ch);
    fclose($fp);
}

function get_res($value) {
    $res = str_replace('_', ' ', $value);
    return ucwords($res);
}

function format_storage($value) {
    $store = str_replace(',', '', $value);
    return round($store * 1000);
}

function format_date($date) {
    $pieces = explode('-', $date);

    return $pieces[1] . '/' . $pieces[2] . '/' . $pieces[0];
}

function aggregate($target_path, $destination_path, $final_path = '', $write = false) {
    $path = $target_path;
    $files = scandir($path);
    $write_method = ($write) ? 'wb' : 'a';

    foreach($files as $file) {
        if(!is_dir($file) && !preg_match('/^\./', $file)) {
            $row = 1;
            $res = '';
            $capacity = '';
            if (($handle = fopen($path . '/' . $file, "r")) !== FALSE) {
                $months = array();

                $fh = fopen($destination_path .'/' . $file, $write_method);
                if($final_path) {
                    $if = fopen($final_path .'/' . $file, 'a');
                }
                while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
                    if($row == 1) {
                       // fputcsv($fh, $data);
                    } else {
                        $date = explode('/', $data[4]);
                        $date_parts = $date[0] . '/' . $date[2];
                        $months[$date_parts][] = $data[1];
                    }
                    $res = $data[0];
                    $capacity = $data[2];
                    $state = end($data);
                    $row++;
                }

                foreach($months as $key => $month) {
                    $monthly_avg = round(array_sum($month) / count($month));
                    $monthly_avg_pct = round(($monthly_avg / $capacity) * 100, 1);

                    fputcsv($fh, array($res, $monthly_avg, $capacity, $monthly_avg_pct, $key, $state));
                    if($final_path) {
                        fputcsv($if, array($res, $monthly_avg, $capacity, $monthly_avg_pct, $key, $state));
                    }
                }
                echo $res . "\n";

                fclose($fh);
                fclose($handle);
            }
        }
    }
}