<?php
header('Access-Control-Allow-Origin: https://ornate-praline-4660dc.netlify.app/');
$servername = "cos-cs106.science.sjsu.edu";
$username = "catluvrsuser";
$password = "xW#Z53T#Wx";
$dbname = "catluvrsdb";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$user = $_POST['username'];
$first = $_POST['firstName'];
$last = $_POST['lastName'];
$age = $_POST['age'];
$country = $_POST['country'];
$pass = $_POST['password'];
$dog = $_POST['dogs'];
if ($dog == "on") {
    $dog = 1;
} else {
    $dog = 0;
}
$cat = $_POST['cats'];
if ($cat == "on") {
    $cat = 1;
} else {
    $cat = 0;
}
$bunnie = $_POST['bunnies'];
if ($bunnie == "on") {
    $bunnie = 1;
} else {
    $bunnie = 0;
}
$fish = $_POST['fish'];
if ($fish == "on") {
    $fish = 1;
} else {
    $fish = 0;
}
$gerbal = $_POST['gerbal'];
if ($gerbal == "on") {
    $gerbal = 1;
} else {
    $gerbal = 0;
}
$bird = $_POST['bird'];
if ($bird == "on") {
    $bird = 1;
} else {
    $bird = 0;
}
$reptile = $_POST['reptiles'];
if ($reptile == "on") {
    $reptile = 1;
} else {
    $reptile = 0;
}
$clever = $_POST['clever'];
if ($clever == "on") {
    $clever = 1;
} else {
    $clever = 0;
}
$cute = $_POST['cute'];
if ($cute == "on") {
    $cute = 1;
} else {
    $cute = 0;
}
$independent = $_POST['independent'];
if ($independent == "on") {
    $independent = 1;
} else {
    $independent = 0;
}
$potty = $_POST['pottyTrained'];
if ($potty == "on") {
    $potty = 1;
} else {
    $potty = 0;
}
$kid = $_POST['kidFriendly'];
if ($kid == "on") {
    $kid = 1;
} else {
    $kid = 0;
}
$quiet = $_POST['quiet'];
if ($quiet == "on") {
    $quiet = 1;
} else {
    $quiet = 0;
}
$energetic = $_POST['energetic'];
if ($energetic == "on") {
    $energetic = 1;
} else {
    $energetic = 0;
}


// If none are selected, set all to true
if ($dog === 0 && $cat === 0 && $bunnie === 0 && $fish === 0 && $gerbal === 0 && $bird === 0 && $reptile === 0) {
    $dog = 1;
    $cat = 1;
    $bunnie = 1;
    $fish = 1;
    $gerbal = 1;
    $bird = 1;
    $reptile = 1;
}

//If no characteristics are selected, set all to true
if ($clever === 0 && $cute === 0 && $independent === 0 && $potty === 0 && $kid === 0 && $quiet === 0 && $energetic === 0) {
    $clever = 1;
    $cute = 1;
    $independent = 1;
    $potty = 1;
    $kid = 1;
    $quiet = 1;
    $energetic = 1;
}


$sql = "INSERT INTO catluvrsdb.users
            (username, firstName, lastName, age, country, password, dog, cat, bunnies, fish, gerbal, bird, reptile, clever, cute, independent, potty, kid, quiet, energetic) 
            VALUES ('$user', '$first', '$last', '$age', '$country', '$pass', $dog, $cat, $bunnie, $fish, $gerbal, $bird, $reptile, $clever, $cute, $independent, $potty, $kid, $quiet, $energetic)";


if ($conn->query($sql) === TRUE) {
    $url = 'https://ornate-praline-4660dc.netlify.app';
    header("Location: $url");
} else {
    echo '<script type="text/javascript">';
    echo "alert(" . "Error: " . $sql . "<br>" . $conn->error . ")";
    echo '</script>';
    echo "Error: " . $sql . "<br>" . $conn->error;
}

?>