let currentLanguage =
    localStorage.getItem("language") || "ko";

let currentTheme =
    localStorage.getItem("theme");

if (!currentTheme) {
    currentTheme =
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches ? "dark" : "light";
}


// ==============================
// Language
// ==============================

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


// ==============================
// Theme
// ==============================

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


// ==============================
// Initialize
// ==============================

updateLanguage();
updateTheme();

function toggleMobileMenu() {
    const menu =
        document.getElementById("mobile-menu");

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
        isOpen ? "✕" : "☰";
}
