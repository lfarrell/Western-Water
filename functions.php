<?php
function get_records($path) {
    $ch = curl_init($path);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $data =  curl_exec($ch);
    curl_close($ch);

    return $data;
}