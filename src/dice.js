
let num = "";
let numInt = "";

function getRandomTwenty() {
    num = Math.random() * (20 - 1) + 1;
    numInt = num.toFixed(0);
    document.getElementById("app").innerHTML = numInt
}

function getRandomTwelve() {
    num = Math.random() * (12 - 1) + 1;
    numInt = num.toFixed(0);
    document.getElementById("app").innerHTML = numInt
}

function getRandomTen() {
    num = Math.random() * (10 - 1) + 1;
    numInt = num.toFixed(0);
    document.getElementById("app").innerHTML = numInt
}

function getRandomEight() {
    num = Math.random() * (8 - 1) + 1;
    numInt = num.toFixed(0);
    document.getElementById("app").innerHTML = numInt
}

function getRandomSix() {
    num = Math.random() * (6 - 1) + 1;
    numInt = num.toFixed(0);
    document.getElementById("app").innerHTML = numInt
}

function getRandomFour() {
    num = Math.random() * (4 - 1) + 1;
    numInt = num.toFixed(0);
    document.getElementById("app").innerHTML = numInt
}



