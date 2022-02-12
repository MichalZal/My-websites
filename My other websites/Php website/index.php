<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Pierwsza strona w PHP </title>
    <meta name="author" content="Michał">
    <meta name="description" content="PHP moja strona">
    <meta name="keywords" content="xd">

    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <form action="index.php" method="post">    
        <label>
            Podaj nazwę klasy: <input type="text" name="klasa">
        </label>
        <input type="submit" value="Pokaż oceny" class="btn">
    </form>

<?php

    if(isset($_POST["klasa"]))
    {
        if (empty($_POST["klasa"]))
        {
            echo '<span style="color: yellow;">Nie podano nazwy klasy!</span>';
        }
        else if ($_POST["klasa"] == "1")
        {
            echo '<span style="color: red;">Ale to musi być klasa</span>';
        }
        else
        {
            require_once "config.php";
            $connection = mysqli_connect($host, $user, $password, $db) or die("Błąd połączenia");
            
            mysqli_set_charset($connection, "utf8");
            
            // if(!$connection)
            // {
            //     echo "Błąd połączenia!";
            // }
            // else 
            // {
            //     echo "Hurra!";
            // }
    
            $klasa = $_POST["klasa"];    
            $q = "SELECT imie, Nazwisko, Srednia_ocen FROM  uczen, klasa WHERE nazwa = '$klasa' and klasa.id = uczen.id_klasy";
            
            $result = mysqli_query($connection, $q) or die("Problem z odczytem danych");
            $ile = mysqli_num_rows($result);
            
            if ($ile == 0)
            {
                echo '<span style="color: red;">Nie ma takiej klasy w szkole!</span>';
            }
            else
            {

echo <<< END
    <table>
        <thead>
            <tr>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Srednia Ocen</th>
            </tr>
        </thead>
        <tbody>
END;
                $suma = 0;

                while($row = mysqli_fetch_assoc($result))
                {
                    echo "\n\t\t\t<tr>";
                    
                    foreach($row as $col)
                    {
                        echo "<td>$col</td>";
                    }
                    
                    echo "</tr>";
                    $suma += $row["Srednia_ocen"];

                    // echo "\r\n\t\t\t<tr><td>".$row["imie"]."</td><td>".$row["Nazwisko"]."</td><td>".
                    // $row["Srednia_ocen"]."</td></tr>";
                }
echo <<< END
\n
        </tbody>
    </table>
END;

                echo "<p>Średnia klasy: ".round($suma / $ile, 2)."</p>";
            }

            mysqli_close($connection);
        }
    }
?>    
</body>
</html>
