<?php

if(isset($_POST["name"])){

    $data["nama"] = $_POST["name"];
    $data["umur"] = $_POST["age"];
    $data["pesan"] = $_POST["message"];


    echo json_encode($data);
}

?>