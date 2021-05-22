<?php
$tek = intval($_POST['tek']);
$kol = $tek + 5;

$ourData = file_get_contents("datalist.json");
$array = json_decode($ourData, true);
for ($i = $tek; $i < $kol; $i++) {
    $c_arr[] = $array["world"][$i]["country"];
    $f_arr[] = $array["world"][$i]["foto"];
    $i_arr[] = $array["world"][$i]["info"];
}

$big_arr = array ( 'country'  => $c_arr, 'foto'  => $f_arr, 'info'  => $i_arr);
echo json_encode($big_arr, JSON_UNESCAPED_UNICODE);
?>