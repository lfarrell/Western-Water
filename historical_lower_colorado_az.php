<?php
include 'functions.php';
include 'simple_html_dom.php';

date_default_timezone_set('America/Phoenix');

$bureau_reservoirs = array(
    'Horse Mesa' => array('capacity' => 245138, 'state' => 'AZ'),
    'Roosevelt' => array('capacity' => 1381580, 'state' => 'AZ'),
    'Mormon Flat' => array('capacity' => 57852, 'state' => 'AZ'),
    'Stewart Mtn' => array('capacity' => 69765, 'state' => 'AZ'),
    'Bartlett' => array('capacity' => 178490, 'state' => 'AZ'),
    'Horseshoe' => array('capacity' => 131500, 'state' => 'AZ')
);

$path = "http://data.hydrometdataservice.info/dwr/report.aspx?dt=";
$years = range(2008, 2015);
$months = array("01", '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12');

$fd = fopen("data/lower_all_az.csv", "wb");
fputcsv($fd, array('reservoir','storage','capacity','pct_capacity','date','state'));
$busted_dates = array('3/19/2009', '7/20/2009', '10/28/2009', '9/13/2010', '11/28/2010', '11/29/2010', '11/20/2012', '11/21/2012');

foreach($years as $year) {
    foreach($months as $month) {
        $days = cal_days_in_month(CAL_GREGORIAN, $month, $year);

        for($i=1; $i<=$days; $i++) {
            $month = preg_replace('/^0/', '', $month);
            $full_date = $month . '/' . $i . '/' . $year;
            if(in_array($full_date, $busted_dates)) {  // busted dates
                continue;
            }
            $url = $path . $full_date;

            $lc_html = file_get_html($url);

            $table = $lc_html->find('table.section', 0);
            $rows = $table->find('tr');

            foreach($rows as $key => $row) {
                $reservoir = $row->find('td', 0);
                $res_name = $reservoir->plaintext;

                if(array_key_exists($res_name, $bureau_reservoirs)) {
                    $current_level = $row->find('td', 4);
                    $curr_level = str_ireplace(',', '', $current_level->plaintext);
                    $cap = $bureau_reservoirs[$res_name]['capacity'];
                    $pct_cap = round(($curr_level / $cap) * 100, 1);

                    fputcsv($fd, array($res_name, $curr_level, $cap, $pct_cap, $month . '/' . $i . '/' . $year, 'AZ'));
                }
            }

            echo $month . ' ' . $i . ' ' . $year . " processed\n";
        }
    }
}
fclose($fd);

// Split into individual files
foreach($bureau_reservoirs as $key => $res) {
    $file = file_name($key);
    $fa = fopen('data/lc_az/' . $file . '.csv', 'wb');
    fputcsv($fa, array('reservoir','storage','capacity','pct_capacity','date','state'));
    fclose($fa);
}

if (($handle = fopen("data/lower_all_az.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        $file = file_name($data[0]);
        $fh = fopen('data/lc_az/' . $file . '.csv', 'a');
        fputcsv($fh, $data);
        fclose($fh);
    }
    fclose($handle);
}

aggregate('data/lc_az', 'data/az_month');

function file_name($data) {
    return preg_replace('/\s+/', '_', strtolower($data));
}