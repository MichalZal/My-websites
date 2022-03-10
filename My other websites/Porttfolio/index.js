let odliczanie = (() => {
    var dzisiaj = new Date();

    let hour = dzisiaj.getHours();
    if (hour<10) hour = "0" + hour;

    let minute = dzisiaj.getMinutes();
    if (minute<10) minute = "0" + minute;

    let second = dzisiaj.getSeconds();
    if (second<10) second = "0" + second;

    document.getElementById("zegar").innerHTML = 
    '<span class="czas">' + hour + ':' + minute + ':' + second + '</span>';

    setTimeout("odliczanie()", 1000);

})


let oblicz = (() => 
{
    let a = document.getElementById("a").value;

    if(a < 0)
    {
        document.getElementById("wynik").innerHTML = a + " jest liczbą ujemną";
    }
    else if (a > 0)
    {
        document.getElementById("wynik").innerHTML = a + " jest liczbą dodatnią";
    }
    else if (a == 0)
    {
        document.getElementById("wynik").innerHTML = a + "0";
    }
}) 

