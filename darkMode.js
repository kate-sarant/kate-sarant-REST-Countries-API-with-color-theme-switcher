

//////=========================to Dark mode===============////


var toggle = document.getElementById("theme-switcher");
let moon = document.querySelector(".bi.bi-moon")

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)


toggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
        moon.classList.replace("bi-moon","bi-moon-fill")
    }else{
      moon.classList.replace("bi-moon-fill","bi-moon")
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};
