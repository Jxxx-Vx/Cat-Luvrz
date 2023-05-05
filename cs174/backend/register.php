<?php
    header('Access-Control-Allow-Origin: http://localhost:3000/register');
    $servername = "cos-cs106.science.sjsu.edu";
    $username = "catluvrsuser";
    $password = "xW#Z53T#Wx";
    $dbname = "catluvrsdb";
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);}

    $user = $_POST['username'];
    $first = $_POST['firstName'];
    $last = $_POST['lastName'];
    $age = $_POST['age'];
    $country = $_POST['country'];
    $pass = $_POST['password'];
    $dog = $_POST['dogs'];
    if ($dog == "on"){
        $dog=1;
    } else{
        $dog=0;
    }
    $cat = $_POST['cats'];
    if ($cat == "on"){
        $cat=1;
    } else{
        $cat=0;
    }
    $bunnie = $_POST['bunnies'];
    if ($bunnie == "on"){
        $bunnie=1;
    } else{
        $bunnie=0;
    }
    $fish = $_POST['fish'];
    if ($fish == "on"){
        $fish=1;
    } else{
        $fish=0;
    }
    $gerbal = $_POST['gerbal'];
    if ($gerbal == "on"){
        $gerbal=1;
    } else{
        $gerbal=0;
    }
    $bird = $_POST['bird'];
    if ($bird == "on"){
        $bird=1;
    } else{
        $bird=0;
    }
    $reptile = $_POST['reptiles'];
    if ($reptile == "on"){
        $reptile=1;
    } else{
        $reptile=0;
    }
    $clever = $_POST['clever'];
    if ($clever == "on"){
        $clever=1;
    } else{
        $clever=0;
    }
    $cute = $_POST['cute'];
    if ($cute == "on"){
        $cute=1;
    } else{
        $cute=0;
    }
    $independent = $_POST['independent'];
    if ($independent == "on"){
        $independent=1;
    } else{
        $independent=0;
    }
    $potty = $_POST['pottyTrained'];
    if ($potty == "on"){
        $potty=1;
    } else{
        $potty=0;
    }
    $kid = $_POST['kidFriendly'];
    if ($kid == "on"){
        $kid=1;
    } else{
        $kid=0;
    }
    $quiet = $_POST['quiet'];
    if ($quiet == "on"){
        $quiet=1;
    } else{
        $quiet=0;
    }
    $energetic = $_POST['energetic'];
    if ($energetic == "on"){
        $energetic=1;
    } else{
        $energetic=0;
    }

    $sql = "INSERT INTO catluvrsdb.users
            (username, firstName, lastName, age, country, password, dog, cat, bunnies, fish, gerbal, bird, reptile, clever, cute, independent, potty, kid, quiet, energetic) 
            VALUES ('$user', '$first', '$last', '$age', '$country', '$pass', $dog, $cat, $bunnie, $fish, $gerbal, $bird, $reptile, $clever, $cute, $independent, $potty, $kid, $quiet, $energetic)";
    
    
    if ($conn->query($sql) === TRUE) {

    } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
    }

?>