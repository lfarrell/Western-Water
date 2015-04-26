<?php
$reservoirs = array(
    "Lake Coeur d'Alene" => array("capacity" => 238500, "state" => "ID"),
    "Lake Pend Oreille" => array("capacity" => 1561300, "state" => "ID"),
    "Priest Lake" => array("capacity" => 119300, "state" => "ID"),
    "Dworshak" => array("capacity" => 346800, "state" => "ID"),
    "Conconully" => array("capacity" => 13000, "state" => "WA"),
    "Lake Chelan" => array("station_id" => 12452000, "capacity" => 676100, "state" => "WA"),
    "Keechelus" => array("capacity" => 157800, "state" => "WA"),
    "Kachess" => array("capacity" => 239000, "state" => "WA"),
    "Cle Elum" => array("capacity" => 436900, "state" => "WA"),
    "Bumping Lake" => array("capacity" => 33700, "state" => "WA"),
    "Rimrock" => array("capacity" => 198000, "state" => "WA"),
    "Ross" => array("capacity" => 1404100, "state" => "WA"),
    "Diablo" => array("capacity" => 90600, "state" => "WA"),
    "Wallowa Lake" => array("capacity" => 37500, "state" => "OR"),
    "Wolf Creek" => array("capacity" => 10400, "state" => "OR"),
    "Willow Creek" => array("capacity" => 13900, "state" => "OR"),
    "Clear Lake" => array("capacity" => 11900, "state" => "OR"),
    "Blue River" => array("capacity" => 85500, "state" => "OR"),
    "Cottage Grove" => array("capacity" => 29800, "state" => "OR"),
    "Cougar" => array("capacity" => 155200, "state" => "OR"),
    "Detroit" => array("capacity" => 300700, "state" => "OR"),
    "Dorena" => array("capacity" => 70500, "state" => "OR"),
    "Fall Creek" => array("capacity" => 115500, "state" => "OR"),
    "Fern Ridge" => array("capacity" => 109600, "state" => "OR"),
    "Foster" => array("capacity" => 29700, "state" => "OR"),
);

$url = "http://www.wcc.nrcs.usda.gov/reportGenerator/view/customCalendarYearGroupByMonthReport/monthly/12435599:WA:BOR|name=%22Lake%20Chelan%22%20AND%20state=%22Washington%22%20AND%20network=%22BOR%22%20AND%20element=%22RESC%22%20AND%20outServiceDate=%222100-01-01%22|name/2005-01-01,2015-03-31/RESC::value";
$url2 = "http://www.wcc.nrcs.usda.gov/reportGenerator/view_csv/customCalendarYearGroupByMonthReport/monthly/12435599:WA:BOR|name=%22Lake%20Chelan%22%20AND%20state=%22Washington%22%20AND%20network=%22BOR%22%20AND%20element=%22RESC%22%20AND%20outServiceDate=%222100-01-01%22|name/2005-01-01,2015-03-31/RESC::value";
