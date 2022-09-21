function Sw() {
    var weight = document.getElementById("root").value;
    var sun = weight * 27.01;
    var sunn = sun.toFixed(3);
    document.getElementById("sun").innerHTML = "Your weight on sun is: " + sunn;
}

function Mw() {
    var weight = document.getElementById("root").value;
    var mercury = weight * 0.38;
    var mer = mercury.toFixed(3);
    document.getElementById("mercury").innerHTML = "Your weight on mercury is: " + mer;
}

function Vw() {
    var weight = document.getElementById("root").value;
    var venus = weight * 0.91;
    var ven = venus.toFixed(3);
    document.getElementById("venus").innerHTML = "Your weight on venus is: " + ven;
}

function Ew() {
    var weight = document.getElementById("root").value;
    var earth = weight * 1;
    var ear = earth.toFixed(3);
    document.getElementById("earth").innerHTML = "Your weight on earth is: " + ear;
}

function Mow() {
    var weight = document.getElementById("root").value;
    var moon = weight * 0.166;
    var moo = moon.toFixed(3);
    document.getElementById("moon").innerHTML = "Your weight on moon is: " + moo;
}

function Maw() {
    var weight = document.getElementById("root").value;
    var mars = weight * 0.38;
    var mar = mars.toFixed(3);
    document.getElementById("mars").innerHTML = "Your weight on mars is: " + mar;
}

function Jw() {
    var weight = document.getElementById("root").value;
    var jupiter = weight * 2.34;
    var jup = jupiter.toFixed(3);
    document.getElementById("jupiter").innerHTML = "Your weight on jupiter is: " + jup;
}

function Saw() {
    var weight = document.getElementById("root").value;
    var saturn = weight * 1.06;
    var sat = saturn.toFixed(3);
    document.getElementById("saturn").innerHTML = "Your weight on saturn is: " + sat;
}

function Uw() {
    var weight = document.getElementById("root").value;
    var uranus = weight * 0.92;
    var ura = uranus.toFixed(3);
    document.getElementById("uranus").innerHTML = "Your weight on uranus is: " + ura;
}

function Nw() {
    var weight = document.getElementById("root").value;
    var neptune = weight * 1.19;
    var nep = neptune.toFixed(3);
    document.getElementById("neptune").innerHTML = "Your weight on neptune is: " + nep;
}

function Pw() {
    var weight = document.getElementById("root").value;
    var pluto = weight * 0.06;
    var plu = pluto.toFixed(3);
    document.getElementById("pluto").innerHTML = "Your weight on pluto is: " + plu;
}