<?php
function get_records($path, $filename, $action) {
    $ch = curl_init($path);
    $fp = fopen($filename, $action);

    curl_setopt($ch, CURLOPT_FILE, $fp);
    curl_setopt($ch, CURLOPT_HEADER, 0);

    curl_exec($ch);
    curl_close($ch);
    fclose($fp);
}