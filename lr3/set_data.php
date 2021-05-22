<?php
if (isset($_POST['new_arr'])){
	$new_arr = $_POST['new_arr'];
	$ourData = file_get_contents("otz.json");
	if($ourData != null)
	$array = json_decode($ourData, true);

	$array [] = array ( 'name'  => $new_arr[0]['value'], 'mail'  => $new_arr[1]['value'], 'txt'  => $new_arr[2]['value']);
	
	$json = json_encode($array, JSON_UNESCAPED_UNICODE);
	$file = fopen('otz.json','w');
    fwrite($file, $json);
    fclose($file);
	
	$big_arr = $new_arr;
}else{
    $ourData = file_get_contents("otz.json");
	if($ourData != null)
	$array = json_decode($ourData, true);
	$big_arr = $array;
}


echo json_encode($big_arr, JSON_UNESCAPED_UNICODE);
?>