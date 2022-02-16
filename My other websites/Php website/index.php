<?php
    session_start();

    if (isset($_SESSION['zalogowany']) && ($_SESSION['zalogowany']) == true)
    {
        header('Location: gra.php');
        exit();
    }
?>
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
    <div class="container">
        <h1> Zaloguj się do gry Osadnicy <h2>
        <form action="zaloguj.php" method="post">
            <label for="log">Login:</label><br>             
            <input type="text" name="log" id="log">

            <br><br>

            <label for="pass">Hasło:</label><br>               
            <input type="password" name="pass" id="pass">

            <br><br>
            <div><input type="submit" value="Zaloguj" class="btn"></div>

            <div class="signup">Nie masz konta? <a href="rejestracja.php">Zarejestruj się</a></div>
            <div class="srodek">
<?php

            if (isset($_SESSION['blad']))
            {
                echo '<div class="blad">'.$_SESSION['blad']."</div>";
            }
    
?>
            </div>
        </form>
    </div>  
</body>
</html>