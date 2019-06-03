<?php
    require_once("sess.php");
    if($_SESSION['logged_in']==false){
        header('Location: http://localhost/homework/login.php');
        exit;
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <a href="products.php">Products </a> &nbsp; 
    <a href="Customers.php">Customers </a> &emsp;&emsp;&emsp;
    <a href="logout.php">Logout </a>
    <h1>Welcome <?php echo $_SESSION['logged_user'];?> !</h1>


    <br><br><br><br><br><br>
    <p>Copyright 2019. Parkjisu Systems.</p>
</body>
</html>