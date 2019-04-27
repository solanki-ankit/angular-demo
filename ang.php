<?php
header("Access-Control-Allow-Origin: *");
var_dump($_REQUEST);
var_dump($_FILES);
foreach ($_FILES['userpic']['tmp_name'] as $key => $value) {
    move_uploaded_file($value,$_FILES['userpic']['name'][$key]);
}
exit;
?>
