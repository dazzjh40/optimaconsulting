function createNavbar() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const links = [
        ["index.html", "Home"],
        ["about.html", "About"],
        ["services.html", "Services"],
        ["contact.html", "Contact"]
    ];

    const navbarHTML = `
        <nav class="navbar" aria-label="Main navigation">
            <div class="navbar-inner">
                <a class="navbar-brand" href="/">
                    <img src="/images/logo.png" alt="Optima Environmental Consulting" class="navbar-logo">
                    <span>Optima Environmental Consulting</span>
                </a>
                <button class="navbar-toggle" type="button" aria-expanded="false" aria-controls="main-menu">
                    <span class="sr-only">Open menu</span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </button>
                <ul class="navbar-list" id="main-menu">
                    ${links.map(([href, label]) => `
                        <li><a href="${href}"${href === currentPage ? ' aria-current="page"' : ""}>${label}</a></li>
                    `).join("")}
                </ul>
            </div>
        </nav>
    `;

    document.body.insertAdjacentHTML("afterbegin", navbarHTML);

    const navbar = document.querySelector(".navbar");
    const toggle = document.querySelector(".navbar-toggle");
    const menu = document.getElementById("main-menu");

    if (!navbar || !toggle || !menu) {
        return;
    }

    toggle.addEventListener("click", function () {
        const isOpen = navbar.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.querySelector(".sr-only").textContent = isOpen ? "Close menu" : "Open menu";
    });

    menu.addEventListener("click", function (event) {
        if (event.target.closest("a")) {
            navbar.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.querySelector(".sr-only").textContent = "Open menu";
        }
    });
}

document.addEventListener("DOMContentLoaded", createNavbar);
