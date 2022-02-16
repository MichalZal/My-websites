<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <meta name="description" content="PHP2">
    <meta name="author" content="Michał">
    <title>Zaloguj</title>

    <link rel="stylesheet" href="styles.css">
</head>
<body>

<?php

    SESSION_START();

    if((!isset($_POST['login'])) || (!isset($_POST['haslo'])))
    {
        header('Location: index.php');
        echo $_SESSION['blad'];
        
    }

    require_once "dbconnect.php";

    $connection = @new mysqli($host, $db_user, $db_password, $db_name);
        
    if($connection->connect_errno!=0)
    {
        echo "Error: ".$connection->connect_errno;
    }
    else 
    {
        $login = $_POST["log"];
        $haslo = $_POST["pass"];

        $login = htmlentities($login, ENT_QUOTES, 'UTF-8');
        $haslo = htmlentities($haslo, ENT_QUOTES, 'UTF-8');

        if($rezultat = @$connection->query(
            sprintf("SELECT *  FROM uzytkownicy WHERE user='$login' AND pass='$haslo' ",
            mysqli_real_escape_string($connection, $login),
            mysqli_real_escape_string($connection, $haslo))))
        {
            $ilu_userow = $rezultat->num_rows;
            // $_SESSION['ile_userow'] = $ile_userow;

            if ($ilu_userow>0)
            {
                $_SESSION['zalogowany'] = true;

                $wiersz = $rezultat->fetch_assoc();
                $_SESSION['id'] = $wiersz['id'];
                $_SESSION["user"] = $wiersz['user'];
                $_SESSION['drewno'] = $wiersz['drewno'];
                $_SESSION['kamien'] = $wiersz['kamien'];
                $_SESSION['zboze'] = $wiersz['zboze'];

                $_SESSION['email'] = $wiersz['email'];
                $_SESSION['dnipremium'] = $wiersz['dnipremium'];

                $rezultat->free_result();

                header('Location: gra.php');
            }
            else 
            {
                $_SESSION['blad'] = '<div class="bad"><span style="color: red;">
                nieprawidłowy login lub hasło</span></div>';

                header('Location: index.php');
            }
        }


        $connection->close();
    }
?>
</body>