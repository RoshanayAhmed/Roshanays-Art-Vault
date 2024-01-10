<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "rav_db";


$conn = new mysqli($servername, $username, $password, $database);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$userID = 1; 
$sql = "SELECT * FROM users WHERE id = $userID";
$result = $conn->query($sql);


if ($result->num_rows > 0) {
    // Output data of each row
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . "<br>";
        echo "First Name: " . $row["first_name"] . "<br>";
        echo "Last Name: " . $row["last_name"] . "<br>";
        echo "Email: " . $row["email"] . "<br>";
        
    }
} else {
    echo "0 results";
}


$conn->close();
?>
