// toggle class active
const navBarnav = document.querySelector(".navbar-nav");
// ketika menu di klik
document.querySelector("#menu").onclick = () => {
    navBarnav.classList.toggle("active");
};

// klik di luar sidebar untuk menutub bar
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !navBarnav.contains(e.target)) {
            navBarnav.classList.remove("active");
        }
    });