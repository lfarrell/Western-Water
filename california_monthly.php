<?php
//http://cdec.water.ca.gov/misc/monthly_res.html
date_default_timezone_set('America/Los_Angeles');
include 'simple_html_dom.php';

$reservoirs = array(
"KLM" => 486800,
"GBR" => 94300,
"CLK" => 451000,
"DWN" => 50000,
"CLE" => 2447700,
"LEW" => 14700,
"PLL" => 80500,
"MNC" => 122400,
"WRS" => 381000,
"SLJ" => 10700,
"NCA" => 22400,
"KNT" => 32900,
"APN" =>8900,
"HNN" => 31000,
"BIO" => 67500,
"USL" => 38000,
"CHB" => 10300,
"DLV" => 77100,
"SAT" => 50500,
"CVE" => 100000,
"LNG" => 21400,
"LRA" => 89100,
"CYC" => 23700,
"CRY" => 57900,
"SPB" => 43200,
"SNN" => 19000,
"ATN" => 50500,
"WHR" => 39000,
"SLN" => 23843,
"NCM" => 350000,
"JNN" => 9800,
"TWT" => 225000,
"CCH" => 190000,
"GBL" => 10000,
"MAT" => 1800,
"CSI" => 254000,
"PYM" => 180000,
"BQC" => 36500,
"CAS" => 325000,
"PRU" => 83200,
"CGS" => 9000,
"SGB" => 44200,
"MHW" => 179300,
"PRR" => 131500,
"HMT" => 14000,
"BRV" => 74000,
"SGC" => 25000,
"RLC" => 11600,
"DMV" => 800000,
"VIL" => 51000,
"STD" => 29700,
"HDG" => 30300,
"SKN" => 43800,
"HNS" => 50000,
"CUY" => 11700,
"SVT" => 242000,
"MMR" => 7200,
"ELC" => 112800,
"MRR" => 4800,
"MOR" => 50200,
"BRT" => 37900,
"LVD" => 25400,
"SW3" => 27700,
"LOT" => 49500,
"SHA" => 4552000,
"KES" => 23800,
"WHI" => 241100,
"MCO" => 35300,
"IRC" => 24300,
"BIT" => 34600,
"PIT6" => 15700,
"PIT7" => 34000,
"BLB" => 143700,
"STG" => 50400,
"EPK" => 51000,
"MMW" => 24800,
"ALM" => 1308000,
"BTV" => 49800,
"ANT" => 22600,
"BCL" => 103000,
"DAV" => 83000,
"FRD" => 55500,
"LGV" => 93000,
"SLC" => 65000,
"ORO" => 3537600,
"TMT" => 81300,
//"JCK" => 52500, Errors OUt
"BWN" => 64000,
"BWS" => 144600,
"FRL" => 12500,
"BUL" => 969600,
"SFL" => 49000,
"ENG" => 70000,
"RLL" => 66000,
"CFW" => 104500,
"FMD" => 136400,
"HHL" => 208400,
"LON" => 76500,
"UNV" => 23000,
"ICH" => 37100,
"SLB" => 16600,
"CPL" => 21600,
"FOL" => 977000,
"NAT" => 9000,
"INV" => 300000,
"CLA" => 315000,
"BER" => 1602000,
"LVQ" => 160000,
"JNK" => 41000,
"LWB" => 48800,
"SLS" => 141900,
"PAR" => 210000,
"CMN" => 417100,
"NHG" => 317000,
"SPM" => 190000,
"DON" => 56900,
"RLF" => 15100,
"BRD" => 77600,
"SWB" => 18300,
"NML" => 2400000,
"TUL" => 68400,
"CHY" => 268000,
"ENR" => 28600,
"HTH" => 360000,
"DNP" => 2030000,
"MDO" => 29000,
"TLC" => 45600,
"MCR" => 1024600,
"BUC" => 150000,
"HID" => 90000,
"TAE" => 125000,
"MPL" => 123000,
"CNV" => 45400,
"FLR" => 64400,
"HNT" => 89800,
"SHV" => 135300,
"RDN" => 35000,
"MIL" => 520500,
"SNL" => 2041000,
"ONF" => 56400,
"LSB" => 34600,
"CTG" => 123300,
"WSN" => 118000,
"PNF" => 1000000,
"TRM" => 185600,
"SCC" => 82300,
"ISB" => 568000,
"STP" => 226500,
"BOC" => 41100,
"PRS" => 28800,
"TAH" => 732000,
"BDP" => 44100,
"SDB" => 9800,
"GNT" => 47500,
"GLK" => 17200,
"CRW" => 183500,
"SLK" => 12900,
"TNM" => 16499,
"HWE" => 46600,
"SLW" => 78000
);

$last_month = date("m/Y", strtotime("first day of previous month"));

foreach($reservoirs as $key => $reservoir) {
    $full_link = "http://cdec.water.ca.gov/cgi-progs/queryMonthly?$key";
    try {
        $html = new simple_html_dom();
        $html->load_file($full_link);

        $res_name = $html->find('h1');
        $name = ucwords(strtolower(preg_replace('/\(.+$/', '', trim($res_name[0]->plaintext))));
        $file_name = preg_replace('/\s+/', '_', strtolower($name));

        $fh = fopen("data/ca_month/$file_name.csv", "a");
    //    fputcsv($fh, array("reservoir", "storage", "capacity", "pct_capacity", "date"));

        $rows = $html->find('tr');
        foreach($rows as $row) {
            $date = $row->find('td',0);
            $d = $date->plaintext;

            $volume = $row->find('td',2);
            $vol = trim($volume->plaintext);

            $regx = '/^\d/';
            if($d == $last_month && preg_match($regx, $vol)) {
                $pct = round(($vol / $reservoir) * 100, 1);
                fputcsv($fh, array(trim($name), $vol, $reservoir, $pct, $d));
            }
        }
        fclose($fh);
        echo $key . " processed\n";
    } catch(Exception $e) {

    }
}