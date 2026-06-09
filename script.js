// =========================
// CAMBIO DE TEMA
// =========================
console.log("JavaScript cargado");

const themeToggle = document.getElementById("theme-toggle");
const icon = themeToggle.querySelector("i");

// Comprobar tema guardado al cargar la página
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    if (icon) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
} else {
    // Por defecto o si es dark, nos aseguramos de que tenga la luna
    document.body.classList.remove("light-theme");
    if (icon) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    if (isLight) {
        localStorage.setItem("theme", "light");
        if (icon) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
    } else {
        localStorage.setItem("theme", "dark");
        if (icon) {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    }
});


// =========================
// ANIMACIÓN AL HACER SCROLL
// =========================
const hiddenElements = document.querySelectorAll(
    ".about, .skills, .projects, .contact"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

hiddenElements.forEach((element) => {
    observer.observe(element);
});