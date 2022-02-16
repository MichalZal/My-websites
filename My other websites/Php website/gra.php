<?php

    session_start();

    if(!isset($_SESSION['zalogowany']))
    {
        header('Location: gra.php');
        
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

<?php

    $user = $_SESSION['user'];
    $kamien = $_SESSION['kamien'];
    $drewno = $_SESSION['drewno'];
    $zboze = $_SESSION['zboze'];

    $email = $_SESSION['email'];
    $dnipremium = $_SESSION['dnipremium'];
    

echo <<< END

    <div class="container">
        <div class="info" id="user"> Witaj $user </div>
        <div class="info" id="kamien"> <b> Posiadasz: $kamien Kamienia </b> </div>
        <div class="info" id="drewno"> <b> Posiadasz: $drewno Drewna </b> </div>
        <div class="info" id="zboze"> <b> Posiadasz: $zboze  Zboza </b> </div>
        <div class="info" id="email"> Twoj emial: $email </div>
        <div class="info" id="premium"> Posiadasz: $dnipremium dni premium </div>
        <div class="logout" id="logout"><a href="logout.php">Wyloguj się</a></div>   
    </div>
    
END;


?>


</body>
</html>