var cmsDate = new Date(2019, 11, 25);
var now = new Date();
var diff = new Date(cmsDate - now);
const tDay = document.getElementById("tDay");
const tHour = document.getElementById("tHour");
const tMin = document.getElementById("tMin");
const tSec = document.getElementById("tSec");
const txDay = document.getElementById("txDay");
const txHour = document.getElementById("txHour");
const txMin = document.getElementById("txMin");
const txSec = document.getElementById("txSec");
const backgrounds = ["3pqb1p0mnbn21.gif", "c9v4sixo3re21.gif", "tumblr_o1u2j5ULjs1uqr9h0o1_1280.gif", "ktwya8tae0521.gif"];

function updateDiff() {
    now = new Date(Date.now());
    diff = new Date(cmsDate - now);
}

var interv = setInterval(update, 1000);

function update() {
    updateDiff();
    setNum();
    updateTx();
}

function setNum() {
    tDay.innerText = diff.getUTCDate() - 1;
    tHour.innerText = diff.getUTCHours();
    tMin.innerText = diff.getUTCMinutes();
    tSec.innerText = diff.getUTCSeconds();
}

function updateTx() {
    if (diff.getUTCDate() === 1) { txDay.innerText = "päev" } 
    else { txDay.innerText = "päeva" }
    if (diff.getUTCHours() === 1) { txHour.innerText = "tund" }
    else { txHour.innerText = "tundi" }
    if (diff.getUTCMinutes() === 1) { txMin.innerText = "minut" }
    else { txMin.innerText = "minutit" }
    if (diff.getUTCSeconds() === 1) { txSec.innerText = "sekund" }
    else { txSec.innerText = "sekundit" }
    if (cmsDate.getTime() < now.getTime()) {
        clearInterval(interv);
        tDay.innerText = "0";
        tHour.innerText = "0";
        tMin.innerText = "0";
        tSec.innerText = "0";
        document.getElementById("merry").innerText = "Häid jõule!"
    }
}

function getRandomBG() {
    var rand = Math.floor(Math.random() * backgrounds.length + 1) - 1;
    document.getElementById("bg").style.backgroundImage = "url(../img/" + backgrounds[rand] + ")"
}

getRandomBG();
update();