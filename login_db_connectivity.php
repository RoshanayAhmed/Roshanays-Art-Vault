<?php
$server = "localhost";
$username = "root";
$password = "";
$database = "rav_db";

$conn = mysqli_connect($server, $username, $password, $database);
if (!$conn){
    echo "Connection Failed";

}

?>