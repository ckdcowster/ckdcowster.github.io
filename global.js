document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       COLLAPSIBLE SECTIONS
    ================================= */
    const headers = document.querySelectorAll(".list-header");

    headers.forEach(header => {
        const icon = document.createElement("span");
        icon.classList.add("icon");
        icon.textContent = "▸";
        header.prepend(icon);

        header.addEventListener("click", () => {
            const list = header.nextElementSibling;
            if (!list || !list.classList.contains("collapsible-list")) return;

            list.classList.toggle("open");
            icon.textContent = list.classList.contains("open") ? "▾" : "▸";
        });
    });

    /* ================================
       DARK/LIGHT MODE TOGGLE
    ================================= */
    const toggleBtn = document.querySelector(".theme-toggle");
    toggleBtn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
    });

    const saved = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", saved);
});
