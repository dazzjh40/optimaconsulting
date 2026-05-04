document.addEventListener("DOMContentLoaded", function () {

    console.log("cookie.js loaded");

    const consent = localStorage.getItem("cookie_consent");
    console.log("Consent value:", consent);

    if (!consent) {
        showBanner();
    }

    if (consent === "accepted") {
        loadAnalytics();
    }

    function showBanner() {
        console.log("Showing cookie banner");

        const banner = document.createElement("div");
        banner.className = "cookie-banner";

        banner.innerHTML = `
            <div class="cookie-inner">
                <p>
                    We use cookies to analyse website traffic and improve our services.
                </p>
                <div class="cookie-buttons">
                    <button id="acceptCookies">Accept</button>
                    <button id="rejectCookies">Reject</button>
                </div>
            </div>
        `;

        document.body.appendChild(banner);

        document.getElementById("acceptCookies").onclick = function () {
            localStorage.setItem("cookie_consent", "accepted");
            banner.remove();
            loadAnalytics();
        };

        document.getElementById("rejectCookies").onclick = function () {
            localStorage.setItem("cookie_consent", "rejected");
            banner.remove();
        };
    }

    function loadAnalytics() {

        if (window.gaLoaded) return;
        window.gaLoaded = true;

        console.log("Loading Google Analytics");

        const script = document.createElement("script");
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-69V22F8BZN";
        script.async = true;
        document.head.appendChild(script);

        script.onload = function () {

            console.log("GA script loaded");

            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            // Initialise GA
            gtag('js', new Date());

            // Configure property (CRITICAL)
            gtag('config', 'G-69V22F8BZN', {
                anonymize_ip: true,
                debug_mode: true
            });

            // Force a page view AFTER config
            gtag('event', 'page_view', {
                debug_mode: true
            });

            console.log("GA fully initialised");
        };
    }

});

/* -------------------------------------------------- */
/* OPTIONAL: RESET CONSENT (FOR TESTING OR SETTINGS)  */
/* -------------------------------------------------- */

window.resetCookieConsent = function () {
    localStorage.removeItem("cookie_consent");
    location.reload();
};