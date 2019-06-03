<?php
    //LOGOUT

    session_destroy();
    header('Location: http://localhost/homework/login.php');
    exit;
?>

