function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mode-academy").style.width = "0px";
    document.getElementById("swafty").style.width = "0px"; // close swafty page first
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
}

function safty() {
    document.getElementById("swafty").style.width = "250px";
}

function saftyClose() {
    document.getElementById("swafty").style.width = "0px";
}

function academy() {
    document.getElementById("mode-academy").style.width = "250px";
}

function academyClose() {
    document.getElementById("mode-academy").style.width = "0px";
}