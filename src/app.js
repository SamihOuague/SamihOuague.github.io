const humburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
const closeBtn = document.getElementById("close--btn");

function toggleButton() {
    navList.classList.toggle("show");
}

function closeButton() {
    closeBtn.parentNode.classList.toggle("disabled");
}

humburger.addEventListener("click", toggleButton);
closeBtn.addEventListener("click", closeButton);