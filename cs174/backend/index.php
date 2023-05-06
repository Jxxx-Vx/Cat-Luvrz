<?php
$mysqli = new mysqli("localhost", "my_user", "my_password", "my_db");

if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
    exit();
} else {
    if (count($_POST) == 8) { // if user is trying to make a new account
        $user = $_POST['user'];
        $pass = $_POST['pass'];
        $fName = $_POST['fName'];
        $lName = $_POST['lName'];
        $age = $_POST['age'];
        $country = $_POST['country'];
        $petPref = $_POST['petPref'];
        $petChar = $_POST['petChar'];

        // if username exists in the database, don't allow creation of account with that username
        if (mysqli_num_rows(mysqli_query($mysqli, "SELECT 1 FROM Users WHERE user = '$user'")) > 0) {
            echo "Please pick another username";
        }
        // else create the account
        else {
            $sql = "INSERT INTO profiles(user,pass,fName,lName,age,country,petPref,petChar) VALUES('$user','$pass','$fName','$lName','$age','$country','$petPref','$petChar')";
            $res = mysqli_query($mysqli, $sql);

            if ($res) {
                echo "Success!";
            } else {
                echo "Error!";
            }
        }
        $mysqli->close();
    } else { // if user is trying to login to existing account
        $user = $_POST['user'];
        $pass = $_POST['pass'];

        $sql = "SELECT 1 FROM Users WHERE user = '$user' AND pass = '$pass'";
        $res = mysqli_query($mysqli, $sql);
        if ($res) {
            if (mysqli_num_rows($res) > 0) {
                // send request back to frontend to login to account
            } else {
                echo "Incorrect username or password";
            }
            echo "Success!";
        } else {
            echo "Error!";
        }
        $mysqli->close();
    }
}
?>