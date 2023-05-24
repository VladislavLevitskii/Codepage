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