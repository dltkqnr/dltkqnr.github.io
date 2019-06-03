<?php 
        require_once("sess.php");
        if($_POST){
                $user = $_POST['username'];
                $pass = $_POST['password'];
            if($user == "admin" && $pass=="admin123"){
                $_SESSION['logged_in'] = true;
                $_SESSION['logged_user'] = $user;
                header('Location: http://localhost/homework/welcomeadmin.php');
                exit;
            }

            if($user == "clerk" && $pass=="clerk123"){
                $_SESSION['logged_in'] = true;
                $_SESSION['logged_user'] = $user;
                header('Location: http://localhost/homework/welcomeclerk.php');
                exit;
            }

            else{
                header('Location: http://localhost/homework/login.php');
                exit;
            }      
        }     
    ?>