<?php
include 'functions.php';
date_default_timezone_set('America/New_York');

$reservoirs = array(
    //  "Hungry Horse Lake" => array("station_id" => "", "capacity" => 3451000, "state" => "MT"),
    //  "Flathead Lake" => array("station_id" => "", "capacity" => 1791000, "state" => "MT"),
    //  "Noxon Rapids" => array("station_id" => "", "capacity" => 335000, "state" => "MT"),
    "Lake Coeur d'Alene" => array("station_id" => "12415500", "capacity" => 238500, "state" => "ID"),
    "Lake Pend Oreille" => array("station_id" => "12392500", "capacity" => 1561300, "state" => "ID"),
    "Priest Lake" => array("station_id" => "12393000", "capacity" => 119300, "state" => "ID"),
    "Dworshak" => array("station_id" => "13340950", "capacity" => 3468000, "state" => "ID"),
    "Magic" => array("station_id" => "13142000", "capacity" => 191500, "state" => "ID"),
    "Blackfoot" => array("station_id" => "13065000", "capacity" => 337000, "state" => "ID"),
    "Oakley" => array("station_id" => "13083500", "capacity" => 75600, "state" => "ID"),
    "Salmon Falls" => array("station_id" => "13106500", "capacity" => 182600, "state" => "ID"),
    "Brownlee" => array("station_id" => "13289700", "capacity" => 1420000, "state" => "ID"),
    "Bear Lake" => array("station_id" => "10055500", "capacity" => 1302000, "state" => "ID"),
    "Montpelier" => array("station_id" => "10069500", "capacity" => 4000, "state" => "ID"),
    "Conconully" => array("station_id" => "12446480", "capacity" => 13000, "state" => "WA"),
    "Lake Chelan" => array("station_id" => "12452000", "capacity" => 676100, "state" => "WA"),
    "Keechelus" => array("station_id" => "12474000", "capacity" => 157800, "state" => "WA"),
    "Kachess" => array("station_id" => "12475500", "capacity" => 239000, "state" => "WA"),
    "Cle Elum" => array("station_id" => "12478500", "capacity" => 436900, "state" => "WA"),
    "Bumping Lake" => array("station_id" => "12487500", "capacity" => 33700, "state" => "WA"),
    "Rimrock" => array("station_id" => "12491000", "capacity" => 198000, "state" => "WA"),
    "Ross" => array("station_id" => "12175000", "capacity" => 1404100, "state" => "WA"),
    "Diablo" => array("station_id" => "12176500", "capacity" => 90600, "state" => "WA"),
    "Wallowa Lake" => array("station_id" => "13326000", "capacity" => 37500, "state" => "OR"),
    "Wolf Creek" => array("station_id" => "13283600", "capacity" => 10400, "state" => "OR"),
    "Willow Creek" => array("station_id" => "14034490", "capacity" => 13900, "state" => "OR"),
    "Clear Lake" => array("station_id" => "14097310", "capacity" => 11900, "state" => "OR"),
    "Blue River" => array("station_id" => "14162100", "capacity" => 85500, "state" => "OR"),
    "Cottage Grove" => array("station_id" => "14153000", "capacity" => 29800, "state" => "OR"),
    "Cougar" => array("station_id" => "14159400", "capacity" => 155200, "state" => "OR"),
    "Detroit" => array("station_id" => "14180500", "capacity" => 300700, "state" => "OR"),
    "Dorena" => array("station_id" => "14155000", "capacity" => 70500, "state" => "OR"),
    "Fall Creek" => array("station_id" => "14150900", "capacity" => 115500, "state" => "OR"),
    "Fern Ridge" => array("station_id" => "14168000", "capacity" => 109600, "state" => "OR"),
    // "Foster" => array("station_id" => "14186600", "capacity" => 29700, "state" => "OR"),
    "Applegate" => array("station_id" => "14361900", "capacity" => 75200, "state" => "OR"),
    "Lost Creek Res" => array("station_id" => "14335040", "capacity" => 315000, "state" => "OR"),
    "Cottonwood" => array("station_id" => "11340000", "capacity" => 8700, "state" => "OR"),
    "Abiquiu" => array("station_id" => "08108010", "capacity" => 1192800, "state" => "NM"),
    "Bluewater Lake" => array("station_id" => "08341400", "capacity" => 38500, "state" => "NM"),
    "Brantley Lake" => array("station_id" => "08401450", "capacity" => 1082000, "state" => "NM"),
    "Cochiti Lake" => array("station_id" => "08108040", "capacity" => 491000, "state" => "NM"),
    "Conchas Lake" => array("station_id" => "08108030", "capacity" => 254200, "state" => "NM"),
    "Costilla" => array("station_id" => "08108050", "capacity" => 16000, "state" => "NM"),
    "Eagle Nest Lake" => array("station_id" => "07205500", "capacity" => 79000, "state" => "NM"),
    "El Vado" => array("station_id" => "08108060", "capacity" => 190300, "state" => "NM"),
    "Heron" => array("station_id" => "08108080", "capacity" => 400000, "state" => "NM"),
    "Lake Avalon" => array("station_id" => "08108090", "capacity" => 4000, "state" => "NM"),
    // "Donner Lake" => array("station_id" => "", "capacity" => 9500, "state" => "NV"),
    "Lahontan" => array("station_id" => "10312100", "capacity" => 295100, "state" => "NV"),
    "Rye Patch" => array("station_id" => "10334500", "capacity" => 194300, "state" => "NV"),
    "Big Sand Wash" => array("station_id" => "09UTBSWR", "capacity" => 25700, "state" => "UT"),
    "Cleveland Lake" => array("station_id" => "09UTCLEV", "capacity" => 5400, "state" => "UT"),
    "Grantsville" => array("station_id" => "10UTGTVL", "capacity" => 3300, "state" => "UT"),
    "Gunlock" => array("station_id" => "09UTGUNL", "capacity" => 10400, "state" => "UT"),
    "Gunnison" => array("station_id" => "10216200", "capacity" => 20300, "state" => "UT"),
    "Ken's Lake" => array("station_id" => "09UTKENS", "capacity" => 2300, "state" => "UT"),
    "Kolob" => array("station_id" => "09UTKOLB", "capacity" => 5600, "state" => "UT"),
    "Lower Enterprise" => array("station_id" => "10UTENTL", "capacity" => 2600, "state" => "UT"),
    "Miller Flat" => array("station_id" => "09UTMILF", "capacity" => 5200, "state" => "UT"),
    "Millsite" => array("station_id" => "09UTMILL", "capacity" => 16700, "state" => "UT"),
    "Minersville" => array("station_id" => "10238500", "capacity" => 23300, "state" => "UT"),
    "Otter Creek" => array("station_id" => "10188000", "capacity" => 52500, "state" => "UT"),
    "Panguitch Lake" => array("station_id" => "10UTPANG", "capacity" => 22300, "state" => "UT"),
    "Piute" => array("station_id" => "10191000", "capacity" => 71800, "state" => "UT"),
    "Porcupine" => array("station_id" => "10105200", "capacity" => 11300, "state" => "UT"),
    "Quail Creek" => array("station_id" => "09UTQUAI", "capacity" => 40000, "state" => "UT"),
    "Sand Hollow" => array("station_id" => "09UTSAND", "capacity" => 50000, "state" => "UT"),
    "Sevier Bridge" => array("station_id" => "10218500", "capacity" => 236000, "state" => "UT"),
    "Smith and Morehouse" => array("station_id" => "10128000", "capacity" => 81000, "state" => "UT"),
    "Upper Enterprise" => array("station_id" => "10UTENTU", "capacity" => 10000, "state" => "UT"),
    "Utah Lake" => array("station_id" => "10166500", "capacity" => 870900, "state" => "UT"),
    "Willard Bay" => array("station_id" => "10140800", "capacity" => 215000, "state" => "UT"),
    "Woodruff Creek" => array("station_id" => "10UTWOOD", "capacity" => 4000, "state" => "UT"),
    "Woodruff Narrows" => array("station_id" => "10020200", "capacity" => 57300, "state" => "WY"),
    "Bull Lake" => array("station_id" => "06224500", "capacity" => 151800, "state" => "WY"),
    "Boysen" => array("station_id" => "06258900", "capacity" => 596000, "state" => "WY"),
    "Pilot Butte" => array("station_id" => "06216400", "capacity" => 31600, "state" => "WY"),
    "Buffalo Bill" => array("station_id" => "06281500", "capacity" => 646600, "state" => "WY"),
    "Keyhole" => array("station_id" => "06427000", "capacity" => 193800, "state" => "WY"),
    "Seminoe" => array("station_id" => "06635500", "capacity" => 1016700, "state" => "WY"),
    "Pathfinder" => array("station_id" => "06640500", "capacity" => 1016500, "state" => "WY"),
    "Alcova" => array("station_id" => "06641500", "capacity" => 184300, "state" => "WY"),
    "Glendo" => array("station_id" => "06652700", "capacity" => 506400, "state" => "WY"),
    "Guernsey" => array("station_id" => "06655500", "capacity" => 45600, "state" => "WY"),
    "High Savery" => array("station_id" => "09255450", "capacity" => 22400, "state" => "WY"),
    "Viva Naughton" => array("station_id" => "09223100", "capacity" => 42400, "state" => "WY"),
    "Wheatland #2" => array("station_id" => "06662500", "capacity" => 98900, "state" => "WY"),
    "Adobe Creek" => array("station_id" => "07007010", "capacity" => 62000, "state" => "CO"),
    "Antero" => array("station_id" => "06016010", "capacity" => 16372, "state" => "CO"),
    "Barr Lake" => array("station_id" => "06016020", "capacity" => 30100, "state" => "CO"),
    "Boyd Lake" => array("station_id" => "06016040", "capacity" => 48400, "state" => "CO"),
    "Carter Lake" => array("station_id" => "06016060", "capacity" => 108900, "state" => "CO"),
    "Cheesman" => array("station_id" => "06016080", "capacity" => 79000, "state" => "CO"),
    "Clear Creek" => array("station_id" => "07007020", "capacity" => 11400, "state" => "CO"),
    "Cobb Lake" => array("station_id" => "06016090", "capacity" => 22300, "state" => "CO"),
    "Continental" => array("station_id" => "08008170", "capacity" => 27000, "state" => "CO"),
    "Crawford" => array("station_id" => "09009340", "capacity" => 14000, "state" => "CO"),
    "Cucharas" => array("station_id" => "07007030", "capacity" => 40000, "state" => "CO"),
    "Dillon" => array("station_id" => "09009020", "capacity" => 254000, "state" => "CO"),
    "Eleven Mile" => array("station_id" => "06016100", "capacity" => 98000, "state" => "CO"),
    "Empire" => array("station_id" => "06016110", "capacity" => 36500, "state" => "CO"),
    "Fossil Creek" => array("station_id" => "06016120", "capacity" => 11100, "state" => "CO"),
    "Green Mtn" => array("station_id" => "09009030", "capacity" => 146800, "state" => "CO"),
    "Gross" => array("station_id" => "06016130", "capacity" => 41800, "state" => "CO"),
    "Groundhog" => array("station_id" => "09009170", "capacity" => 22000, "state" => "CO"),
    "Homestake" => array("station_id" => "09009040", "capacity" => 43000, "state" => "CO"),
    "Horse Creek" => array("station_id" => "07007050", "capacity" => 27000, "state" => "CO"),
    "Horsecreek" => array("station_id" => "06016370", "capacity" => 14700, "state" => "CO"),
    "Horsetooth" => array("station_id" => "06016150", "capacity" => 149700, "state" => "CO"),
    "Jackson Gulch Reservoir" => array("station_id" => "09009050", "capacity" => 10000, "state" => "CO"),
    "Jackson Lk" => array("station_id" => "06016160", "capacity" => 26100, "state" => "CO"),
    "John Martin" => array("station_id" => "07007060", "capacity" => 616000, "state" => "CO"),
    "Julesberg" => array("station_id" => "06016170", "capacity" => 20500, "state" => "CO"),
    "Lake Granby" => array("station_id" => "09009060", "capacity" => 465600, "state" => "CO"),
    "Lake Loveland" => array("station_id" => "06016180", "capacity" => 10300, "state" => "CO"),
    "Marshall" => array("station_id" => "06016220", "capacity" => 10000, "state" => "CO"),
    "Marston" => array("station_id" => "06016210", "capacity" => 13000, "state" => "CO"),
    "Meredith Reservoir" => array("station_id" => "07007070", "capacity" => 42000, "state" => "CO"),
    "Milton" => array("station_id" => "06016230", "capacity" => 23500, "state" => "CO"),
    "Mountain Home" => array("station_id" => "MTNRESCO", "capacity" => 18000, "state" => "CO"),
    "Narraguinnep" => array("station_id" => "09009350", "capacity" => 19000, "state" => "CO"),
    "Platoro" => array("station_id" => "08008120", "capacity" => 60000, "state" => "CO"),
    "Point of Rocks" => array("station_id" => "06016240", "capacity" => 70600, "state" => "CO"),
    "Prewitt" => array("station_id" => "06016250", "capacity" => 28200, "state" => "CO"),
    "Pueblo" => array("station_id" => "07007090", "capacity" => 354000, "state" => "CO"),
    "Ralph Price" => array("station_id" => "06016260", "capacity" => 16200, "state" => "CO"),
    "Rio Grande" => array("station_id" => "08008130", "capacity" => 51000, "state" => "CO"),
    "Riverside" => array("station_id" => "06016270", "capacity" => 55800, "state" => "CO"),
    "Ruedi" => array("station_id" => "09009110", "capacity" => 102000, "state" => "CO"),
    "Sanchez" => array("station_id" => "08008140", "capacity" => 103000, "state" => "CO"),
    "Santa Maria" => array("station_id" => "08008150", "capacity" => 45000, "state" => "CO"),
    "Shadow Mountain" => array("station_id" => "09014500", "capacity" => 18400, "state" => "CO"),
    "Spinney Mountain" => array("station_id" => "16016025", "capacity" => 49000, "state" => "CO"),
    "Stagecoach" => array("station_id" => "09237495", "capacity" => 33300, "state" => "CO"),
    "Standley" => array("station_id" => "06016280", "capacity" => 42000, "state" => "CO"),
    "Terrace" => array("station_id" => "08008160", "capacity" => 18000, "state" => "CO"),
    "Trinidad Lake" => array("station_id" => "07007100", "capacity" => 167000, "state" => "CO"),
    "Turquoise Lake" => array("station_id" => "07007110", "capacity" => 127000, "state" => "CO"),
    "Twin Lakes" => array("station_id" => "07007120", "capacity" => 86000, "state" => "CO"),
    "Union" => array("station_id" => "06016300", "capacity" => 13000, "state" => "CO"),
    "Williams Fork" => array("station_id" => "09009150", "capacity" => 97000, "state" => "CO"),
    "Windsor" => array("station_id" => "06016310", "capacity" => 15200, "state" => "CO"),
    "Wolford Mountain" => array("station_id" => "09041395", "capacity" => 65900, "state" => "CO")
);

$current_month = date('m', strtotime('this month'));
$current_year = date('Y', strtotime('this month'));

foreach($reservoirs as $res_name => $res) {
    $url = "http://www.wcc.nrcs.usda.gov/reportGenerator/view_csv/customCalendarYearGroupByMonthReport/monthly/" . $res['station_id'] . ":" . $res['state'] .":BOR|id=%22%22|name/POR_BEGIN,POR_END/RESC::value";
    $res_name_format = preg_replace('/(\s+|\'|#)/', '_', $res_name);
    $file_name = 'raw_data/usda/' . $res['state'] . '_' . $res_name_format . ".csv";
    get_records($url, $file_name, "wb");

    $fh = fopen('data/usda_month/' . $res['state'] . '_' . $res_name_format . ".csv", 'wb');
    fputcsv($fh, array('reservoir','storage','capacity','pct_capacity','date', 'state'));

    if (($handle = fopen($file_name, "r")) !== FALSE) {
        while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
            if(preg_match('/^\d/', $data[0])) {
                $num = count($data);
                for ($c=0; $c < $num; $c++) {
                    if($data[0] < 2000 || !$c || $data[$c] == '' || !preg_match('/\d/', $data[$c])) { continue; }

                    $pct_capacity = round(($data[$c] / $res['capacity']) * 100, 1);
                    $month = ($c < 10) ? '0' . $c : $c;

                    if($month == $current_month && $data[0] == $current_year) continue;
                    fputcsv($fh, array($res_name, $data[$c], $res['capacity'], $pct_capacity, $month . '/' . $data[0], $res['state']));
                }
            }
        }
        fclose($handle);
    }

    fclose($fh);
    echo $res_name . " processed\n";
}