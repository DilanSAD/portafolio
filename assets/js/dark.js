document.addEventListener("DOMContentLoaded", () => {
    const switcher = document.querySelector(".switcher__btn");
    const lightIcon = document.querySelector(".switcher__icon-light");
    const darkIcon = document.querySelector(".switcher__icon-dark");
    const logoMobile = document.querySelector('.menu-mobile__logo');
    const logo = document.querySelector('.navbar__logo-light');

    const updateTheme = (theme) => {
        console.log(`Updating theme to: ${theme}`);
        document.documentElement.classList.toggle("dark", theme === "dark");
        document.documentElement.classList.toggle("light", theme === "light");
        if (theme === "dark") {
            if (lightIcon) lightIcon.style.display = "none";
            if (darkIcon) darkIcon.style.display = "block";
            if (logo) logo.src = "assets/img/logo2.png";
            if (logoMobile) logoMobile.src = "assets/img/logo2.png";
        } else {
            if (darkIcon) darkIcon.style.display = "none";
            if (lightIcon) lightIcon.style.display = "block";
            if (logo) logo.src = "assets/img/logo1.png";
            if (logoMobile) logoMobile.src = "assets/img/logo1.png";
        }
    };

    const storedTheme = localStorage.getItem("theme") || "light";
    console.log(`Stored theme is: ${storedTheme}`);
    updateTheme(storedTheme);

    if (switcher) {
        switcher.addEventListener("click", () => {
            const newTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
            console.log(`Switching to new theme: ${newTheme}`);
            localStorage.setItem("theme", newTheme);
            updateTheme(newTheme);
        });
    }
});
