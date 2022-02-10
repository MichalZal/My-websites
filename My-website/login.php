<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            text-align: center;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            background-color: rgb(75, 75, 75);
        }
        b{
            color: skyblue;
        }
        h1{
            text-size-adjust: 6rem;
            color: greenyellow;
        }
        h2{
            text-size-adjust: 2em;
            color: lightgreen;
        }
        ul{
            color: white;
            list-style: none;
        }

        .haslo {
            margin-bottom: 50px;
        }

        .a {
            font-size: 5rem;
            color: white;
            text-decoration: none;
            display: none;
        }

        .a:hover {
            color: gray;
        }

        a {
            font-size: 5rem;
            color: white;
            text-decoration: none;
            display: block;
        }

        a:hover {
            color: gray;
        }


    
    </style>

</head>

<body>
    <h1> Podaj hasło </h1>
    <br>
    <input type="text" onkeydown="check_password (this);" class="haslo">
    <br>
    <div id="hidden_div" style="display: none;"> <a href="index.html">Wejdź</a> </div>

    <script>
    function check_password (input_element) {
        
        //get value of input
        var password = input_element.toUpperCase().value;
        
        //check value and show/hide the div
        if (password == 'korzen')
            document.getElementById ('hidden_div').style.display = 'block';
        else
            document.getElementById ('hidden_div').style.display = 'none';

}
    </script>
</body>  

<?php

function getUserIP()
{
    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];

    if(filter_var($client, FILTER_VALIDATE_IP))
    {
        $ip = $client;
    }
    elseif(filter_var($forward, FILTER_VALIDATE_IP))
    {
        $ip = $forward;
    }
    else
    {
        $ip = $remote;
    }

    return $ip;
}


$user_ip = getUserIP();

/*echo $user_ip;*/

$fp = fopen($file, 'a');

fwrite($fp, $user_ip);

fclose($fp);

$line = date('Y-m-d H:i:s') . " - $_SERVER[REMOTE_ADDR]";
file_put_contents('visitors.log', $line . PHP_EOL, FILE_APPEND);

?>

</body>
</html>	