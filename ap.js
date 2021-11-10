const navBtn = document.getElementById("nav-btn");
const navBar = document.getElementById("nav_bar");
const navClose = document.getElementById("nav-close");

navBtn.addEventListener("click", () => {
    navBar.classList.add("showNav");
});
navBar.addEventListener("click", () => {
    navBar.classList.remove("showNav");
});