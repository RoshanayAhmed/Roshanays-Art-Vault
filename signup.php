<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $emailOrPhone = $_POST["email_or_phone"];
    $password = $_POST["password"];

   
    echo "Name: $name<br>";
    echo "Email or Phone: $emailOrPhone<br>";
    echo "Password: $password<br>";
}
?>
