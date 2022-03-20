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

let ham_menu = document.getElementById("ham")
let navbar_links = document.querySelector(".navbar-links")
let article = document.querySelector("article")

ham_menu.addEventListener('click', () => {
    navbar_links.classList.toggle('active')
    article.classList.toggle('con');
    ham_menu.classList.toggle('ham-menu-active')
})
  


//=====================================================

let numer = Math.floor(Math.random()*5 + 1)

let timer1 = 0;
let timer2 = 0;

let ustawslajd = ((nrslajdu) => {
    clearTimeout(timer1);
    clearTimeout(timer2);
    numer = nrslajdu - 1;

    schowaj()
    setTimeout("zmienslajd()", 500)
})

let schowaj = (() => {
    $("#p").fadeOut(500);
    $("#p2").fadeOut(500);
    $("#p3").fadeOut(500);
})

let zmienslajd = (() => {
    numer++;
    if (numer > 5) numer = 1;

    let plik = "<img src=\"img/work" + numer + ".jpg\" />";

    document.getElementById("p").innerHTML = plik;
    document.getElementById("p2").innerHTML = plik;
    document.getElementById("p3").innerHTML = plik;

    $("#p").fadeIn(500);
    $("#p2").fadeIn(500);
    $("#p3").fadeIn(500);
    timer1 = setTimeout("zmienslajd()", 3000);
    timer2 = setTimeout("schowaj()", 2500);
})

let hello = document.querySelector(".hello");

hello.addEventListener('click', () => {
    hello.style = "color: blue;";
    setTimeout(() => {
        hello.style = "color: white;"
    }, 400);
})
