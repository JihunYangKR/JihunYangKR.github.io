/* =========================
   Language
   ========================= */

let currentLanguage =
    localStorage.getItem("language") || "ko";


function updateLanguage() {

    const elements =
        document.querySelectorAll("[data-ko]");

    elements.forEach(function(element) {

        const value =
            element.getAttribute(
                "data-" + currentLanguage
            );

        if (value !== null) {
            element.innerHTML = value;
        }
    });

    document.documentElement.lang =
        currentLanguage;

    const button =
        document.getElementById(
            "language-button"
        );

    if (button) {
        button.textContent =
            currentLanguage === "ko"
                ? "EN"
                : "KR";
    }

    localStorage.setItem(
        "language",
        currentLanguage
    );
}


function toggleLanguage() {

    currentLanguage =
        currentLanguage === "ko"
            ? "en"
            : "ko";

    updateLanguage();
}


/* =========================
   Theme
   ========================= */

let currentTheme =
    localStorage.getItem("theme");


if (!currentTheme) {

    currentTheme =
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches
            ? "dark"
            : "light";
}


function updateTheme() {

    document.documentElement.setAttribute(
        "data-theme",
        currentTheme
    );

    const button =
        document.getElementById(
            "theme-button"
        );

    if (button) {

        button.textContent =
            currentTheme === "dark"
                ? "☀️"
                : "🌙";
    }

    localStorage.setItem(
        "theme",
        currentTheme
    );
}


function toggleTheme() {

    currentTheme =
        currentTheme === "dark"
            ? "light"
            : "dark";

    updateTheme();
}


/* =========================
   Mobile Navigation
   ========================= */

function toggleMobileMenu() {

    const menu =
        document.getElementById(
            "mobile-menu"
        );

    const button =
        document.getElementById(
            "mobile-menu-button"
        );

    if (!menu || !button) {
        return;
    }

    const isOpen =
        menu.classList.toggle("open");

    button.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
    );

    button.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );

    button.textContent =
        isOpen
            ? "✕"
            : "☰";
}


function closeMobileMenu() {

    const menu =
        document.getElementById(
            "mobile-menu"
        );

    const button =
        document.getElementById(
            "mobile-menu-button"
        );

    if (!menu || !button) {
        return;
    }

    menu.classList.remove("open");

    button.setAttribute(
        "aria-expanded",
        "false"
    );

    button.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

    button.textContent = "☰";
}


/* =========================
   Initialize
   ========================= */

updateLanguage();
updateTheme();


/* =========================
   Mobile Menu Events
   ========================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const menu =
            document.getElementById(
                "mobile-menu"
            );

        if (!menu) {
            return;
        }

        const links =
            menu.querySelectorAll("a");

        links.forEach(function(link) {

            link.addEventListener(
                "click",
                closeMobileMenu
            );
        });
    }
);
