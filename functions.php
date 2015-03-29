<?php
function get_records($path, $filename, $action) {
    $ch = curl_init($path);
    $fp = fopen($filename, $action);

    curl_setopt($ch, CURLOPT_FILE, $fp);
    curl_setopt($ch, CURLOPT_HEADER, 0);

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