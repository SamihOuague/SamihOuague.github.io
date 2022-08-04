const humburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

function toggleButton() {
    navList.classList.toggle("show");
}

humburger.addEventListener("click", toggleButton);