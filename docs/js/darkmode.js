const darkmodeToggle = document.getElementsByClassName("fas fa-lightbulb")[0];
let theme = localStorage.getItem("theme");

if (!theme) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches ) {
        theme = "dark";
    } else {
        theme = "light";
    }
}
setTheme();

function switchTheme() {
    if (theme === "light") {
        theme = "dark";
    } else {
        theme = "light";
    }
    localStorage.setItem("theme", theme);
    setTheme();
    console.log(theme);
}

function setTheme() {
    if (theme === "dark") {
        document.body.classList.add('darkmode');
    } else {
        document.body.classList.remove('darkmode');
    }
}

darkmodeToggle.addEventListener('click', switchTheme)
