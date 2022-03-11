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
    $("#container").fadeOut(500);
})


let zmienslajd = (() => {
    numer++; if(numer>5) numer=1;

    let plik = "<img class=\"foto\" src=\"img/s" + numer + ".jpg\" />";

    let wynik = document.querySelector(".wynik").innerHTML = numer;


    document.getElementById("container").innerHTML = plik;
    
    $("#container").fadeIn(500);
    timer1 = setTimeout("zmienslajd()", 5000);
    timer2 = setTimeout("schowaj()", 4500);
})