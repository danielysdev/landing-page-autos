const header_nav = document.getElementById("header-nav");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");


abrir.addEventListener("click", () => {
    header_nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    header_nav.classList.remove("visible");
})

/*
const nav = document.getElementById("nav");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
*/
