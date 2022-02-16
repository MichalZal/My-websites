<?php 

    session_start();
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
        <a href="index.php">Wróć</a>
        <h1> Utwórz konto: <h2>
        <form action="zarejestruj.php" method="post">
            <div class="pole" id="pole-nick">
                <label for="nick">Nickname: </label>
                <input type="text" name="nick" class="nick" id="nick">
            </div>
            <div class="pole" id="pole-email">
                <label for="email">Email: </label>
                <input type="email" name="email" class="email" id="emial">
            </div>
            <div class="pole" id="pole-haslo1">
                <label for="haslo1">Hasło: </label>
                <input type="password" name="haslo1" class="haslo1" id="haslo1">
            </div>
            <div class="pole" id="pole-haslo2">
                <label for="haslo2">Powtórz hasło: </label>
                <input type="password" name="haslo2" class="haslo2" id="haslo2">
            </div>
            <label>
                <h5>Akceptuje regulamin:</h5><input type="checkbox" name="regulamin" class="regulamin" id="regulamin">
            </label>
            <div>
                <input type="submit" name="potwierdz" value="Zarejestruj!"class="r-btn">
            </div>

        </form>
    </div>  
</body>
</html>