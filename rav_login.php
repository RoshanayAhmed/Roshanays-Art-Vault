<?php
session_start();
include "rav_db_connectivity.php";

if(isset($_POST['uname']) && isset($_POST['password'])) {

    function validate($date) {
        $data = trim(($data);
        $data = stripsplashes($data);
        $data = htmlspecialchars($data);
        return data;


    }
}
$uname = validate($_POST['uname']);
$pass = validate($_POST['password']);

if(empty($uname)) {
    header("Location: rav_login_index.php?error= User Name is required" );
    exit();
}
else if(empty($pass)) {
    header("Location: rav_login_index.php?error= Password is required");
    exit();
}

$sql= "SELECT * FROM users WHERE email or phone no= '$uname' AND password= '$pass' ";

$result = mysqli_query($conn,$sql);

if(mysqli_num_rows($result)===1){
    $row= mysqli_fetch_assoc($result);
    if($row['email or phone no']===$uname&&$row['password']===$pass) {
        echo "logged in";
        $_SESSION['email or phone no']=$row['email or phone no'];
        $_SESSION['name']=$row['name'];
        $_SESSION['id']=$row['id'];
        header("Location: rav_login_index.php");
        exit();
        
    }

}