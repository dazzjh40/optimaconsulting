(function () {
    const storageKey = "optima_cookie_consent";

    function updateConsent(value) {
        if (typeof window.gtag === "function") {
            window.gtag("consent", "update", {
                analytics_storage: value === "accepted" ? "granted" : "denied",
                ad_storage: "denied",
                functionality_storage: "granted",
                security_storage: "granted"
            });

            if (value === "accepted") {
                window.gtag("config", "G-P6N0KNTGHP", { anonymize_ip: true });
            }
        }
    }

    function remember(value) {
        localStorage.setItem(storageKey, value);
        updateConsent(value);
    }

    function createBanner() {
        if (localStorage.getItem(storageKey)) {
            updateConsent(localStorage.getItem(storageKey));
            return;
        }

        const banner = document.createElement("section");
        banner.className = "cookie-banner";
        banner.setAttribute("aria-label", "Cookie consent");
        banner.innerHTML = `
            <h2>Cookie Preferences</h2>
            <p>We use essential cookies to run this website and, with your permission, analytics cookies to understand how the site is used.</p>
            <div class="cookie-actions">
                <button type="button" class="cookie-accept">Accept analytics</button>
                <button type="button" class="cookie-reject">Reject analytics</button>
            </div>
        `;

        banner.querySelector(".cookie-accept").addEventListener("click", function () {
            remember("accepted");
            banner.hidden = true;
        });

        banner.querySelector(".cookie-reject").addEventListener("click", function () {
            remember("rejected");
            banner.hidden = true;
        });

        document.body.appendChild(banner);
    }

    document.addEventListener("DOMContentLoaded", createBanner);
}());
