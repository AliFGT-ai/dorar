const side = document.getElementById("side");
const aside = document.getElementById("asidee");
const logo = document.getElementById("logo");
const body = document.getElementById("body")
const links = document.getElementById("links")
const image = document.getElementById("title")

side.onclick = function () {
    aside.style.transition = "var(--main-transition)";
    aside.style.visibility = "visible"
    aside.style.width = "100%"
    aside.style.height = "100%"
    body.style.overflow = "hidden"
    links.style.display = "block"
    side.style.transition = "var(--main-transition)"
    side.style.transform = "rotate(90deg)"
    logo.style.display = "none"
}

const back = document.getElementById("back")

back.onclick = function () {
    side.style.transform = "rotate(0deg)"
    aside.style.position = "absolute";
    aside.style.visibility = "hidden"
    logo.style.display = "none"
    aside.style.height = "0"
    aside.style.width = "100"
    aside.style.top = "0"
    body.style.overflow = "visible"
    aside.style.transition = "var(--main-transition)"
    links.style.display = "none"
}


const shia = document.getElementById("shia")
const menu = document.getElementById("menu")
const ulClass = document.getElementById("ulClass")

shia.onclick = function () {
    menu.style.transition = "var(--main-transition)";
    menu.style.visibility = "visible"
    menu.style.top = "125px"
    menu.style.display = "block"
    ulClass.style.visibility = "visible"
}

body.onmousedown = function () {
    menu.style.top = "100px"
    ulClass.style.visibility = "hidden"
    menu.style.visibility = "hidden"
}


const asidem = document.getElementById("asidem")
const asideMenu = document.getElementById("asideMenu")
const faw = document.getElementById("faw")

asidem.onclick = function () {
    if (asideMenu.style.visibility === "visible") {
        asideMenu.style.visibility = "hidden"
        asideMenu.style.display = "none"
        faw.style.transform = "rotate(360deg)"
    } else {
        asideMenu.style.display = "block"
        asideMenu.style.transition = "var(--main-transition)"
        asideMenu.style.visibility = "visible"
        asideMenu.style.height = "100%"
        faw.style.transform = "rotate(180deg)"
    }
}
