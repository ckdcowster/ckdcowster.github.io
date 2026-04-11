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

    /* ================================
       SIDEBAR ACTIVE LINK
    ================================= */
    const path = window.location.pathname.split("/").pop();
    document.querySelectorAll(".sidebar a").forEach(a => {
        if (a.getAttribute("href") === path) {
            a.classList.add("active");
        }
    });
});

/* ================================
   SINGLE TOGGLE: EXPAND / COLLAPSE ALL
================================ */
const toggleAllBtn = document.getElementById("toggle-all");

if (toggleAllBtn) {
    toggleAllBtn.addEventListener("click", () => {
        const lists = document.querySelectorAll(".collapsible-list");
        const icons = document.querySelectorAll(".list-header .icon");

        // Determine current state
        const allOpen = [...lists].every(list => list.classList.contains("open"));

        if (allOpen) {
            // Collapse all
            lists.forEach(list => list.classList.remove("open"));
            icons.forEach(icon => icon.textContent = "▸");
            toggleAllBtn.textContent = "Expand All";
        } else {
            // Expand all
            lists.forEach(list => list.classList.add("open"));
            icons.forEach(icon => icon.textContent = "▾");
            toggleAllBtn.textContent = "Collapse All";
        }
    });
}
