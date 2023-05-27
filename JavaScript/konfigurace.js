const clickable1 = document.querySelector(".offer__header--1");
const structure1 = document.querySelector(".offer__structure--1");   

const clickable2 = document.querySelector(".offer__header--2");
const structure2 = document.querySelector(".offer__structure--2");

const clickable3 = document.querySelector(".offer__header--3");
const structure3 = document.querySelector(".offer__structure--3");

const clickable4 = document.querySelector(".offer__header--4");
const structure4 = document.querySelector(".offer__structure--4");

const clickable5 = document.querySelector(".offer__header--5");
const structure5 = document.querySelector(".offer__structure--5");

const clickable6 = document.querySelector(".offer__header--6");
const structure6 = document.querySelector(".offer__structure--6");

const arrow1 = document.querySelector(".offer__header--priceandarrow--arrow1");
const arrow2 = document.querySelector(".offer__header--priceandarrow--arrow2");
const arrow3 = document.querySelector(".offer__header--priceandarrow--arrow3");
const arrow4 = document.querySelector(".offer__header--priceandarrow--arrow4");
const arrow5 = document.querySelector(".offer__header--priceandarrow--arrow5");
const arrow6 = document.querySelector(".offer__header--priceandarrow--arrow6");

function toggleMenu1() {
    if (structure1.classList.contains("showMenu")) {
    structure1.classList.remove("showMenu")
    arrow1.style.transform = "rotate(0deg)";
    }   else {
        structure1.classList.add("showMenu")
        arrow1.style.transform = "rotate(180deg)";
        }
}

clickable1.addEventListener("click", toggleMenu1);

function toggleMenu2() {
    if (structure2.classList.contains("showMenu")) {
    structure2.classList.remove("showMenu")
    arrow2.style.transform = "rotate(0deg)";
    }   else {
        structure2.classList.add("showMenu")
        arrow2.style.transform = "rotate(180deg)";
        }
}

clickable2.addEventListener("click", toggleMenu2);

function toggleMenu3() {
    if (structure3.classList.contains("showMenu")) {
    structure3.classList.remove("showMenu")
    arrow3.style.transform = "rotate(0deg)";
    }   else {
        structure3.classList.add("showMenu")
        arrow3.style.transform = "rotate(180deg)";
        }
}

clickable3.addEventListener("click", toggleMenu3);

function toggleMenu4() {
    if (structure4.classList.contains("showMenu")) {
    structure4.classList.remove("showMenu")
    arrow4.style.transform = "rotate(0deg)";
    }   else {
        structure4.classList.add("showMenu")
        arrow4.style.transform = "rotate(180deg)";
        }
}

clickable4.addEventListener("click", toggleMenu4);

function toggleMenu5() {
    if (structure5.classList.contains("showMenu")) {
    structure5.classList.remove("showMenu")
    arrow5.style.transform = "rotate(0deg)";
    }   else {
        structure5.classList.add("showMenu")
        arrow5.style.transform = "rotate(180deg)";
        }
}

clickable5.addEventListener("click", toggleMenu5);

function toggleMenu6() {
    if (structure6.classList.contains("showMenu")) {
    structure6.classList.remove("showMenu")
    arrow6.style.transform = "rotate(0deg)";
    }   else {
        structure6.classList.add("showMenu")
        arrow6.style.transform = "rotate(180deg)";
        }
}

clickable6.addEventListener("click", toggleMenu6);

var elms1 = document.getElementsByClassName("firstline");
var n = elms1.length;
function changeColor1(color) {
    for(var i = 0; i < n; i ++) {
        elms1[i].style.backgroundColor = color;
    }
}
for(var i = 0; i < n; i ++) {
    elms1[i].onmouseover = function() {
        changeColor1("rgba(255, 255, 255, 0.05)");
    };
    elms1[i].onmouseout = function() {
        changeColor1("#0685AE");
    };
}

var elms2 = document.getElementsByClassName("secondline");
var z = elms2.length;
function changeColor2(color) {
    for(var a = 0; a < n; a ++) {
        elms2[a].style.backgroundColor = color;
    }
}
for(var a = 0; a < n; a ++) {
    elms2[a].onmouseover = function() {
        changeColor2("rgba(255, 255, 255, 0.05)");
    };
    elms2[a].onmouseout = function() {
        changeColor2("#0685AE");
    };
}

var elms3 = document.getElementsByClassName("thirdline");
var y = elms3.length;
function changeColor3(color) {
    for(var b = 0; b < n; b ++) {
        elms3[b].style.backgroundColor = color;
    }
}
for(var b = 0; b < n; b ++) {
    elms3[b].onmouseover = function() {
        changeColor3("rgba(255, 255, 255, 0.05)");
    };
    elms3[b].onmouseout = function() {
        changeColor3("#0685AE");
    };
}

var elms4 = document.getElementsByClassName("forthline");
var x = elms4.length;
function changeColor4(color) {
    for(var c = 0; c < n; c ++) {
        elms4[c].style.backgroundColor = color;
    }
}
for(var c = 0; c < n; c ++) {
    elms4[c].onmouseover = function() {
        changeColor4("rgba(255, 255, 255, 0.05)");
    };
    elms4[c].onmouseout = function() {
        changeColor4("#0685AE");
    };
}

var elms5 = document.getElementsByClassName("fifthline");
var g = elms5.length;
function changeColor5(color) {
    for(var d = 0; d < n; d ++) {
        elms5[d].style.backgroundColor = color;
    }
}
for(var d = 0; d < n; d ++) {
    elms5[d].onmouseover = function() {
        changeColor5("rgba(255, 255, 255, 0.05)");
    };
    elms5[d].onmouseout = function() {
        changeColor5("#0685AE");
    };
}

var elms6 = document.getElementsByClassName("sixthline");
var h = elms6.length;
function changeColor6(color) {
    for(var e = 0; e < n; e ++) {
        elms6[e].style.backgroundColor = color;
    }
}
for(var e = 0; e < n; e ++) {
    elms6[e].onmouseover = function() {
        changeColor6("rgba(255, 255, 255, 0.05)");
    };
    elms6[e].onmouseout = function() {
        changeColor6("#0685AE");
    };
}