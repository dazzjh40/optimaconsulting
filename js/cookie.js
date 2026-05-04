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

        window.dataLayer = window.dataLayer || [];
        window.gtag = function(){ dataLayer.push(arguments); };

        const script = document.createElement("script");
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-P6N0KNTGHP";
        script.async = true;

        script.onload = function () {

            console.log("GA script loaded");

            gtag('js', new Date());

            gtag('config', 'G-P6N0KNTGHP', {
                anonymize_ip: true,
                debug_mode: true
            });

            console.log("GA configured");

            gtag('event', 'page_view', {
                debug_mode: true
            });
        };

        document.head.appendChild(script);
    }

}); // ✅ THIS LINE IS CRITICAL

// ✅ MUST be outside the DOMContentLoaded block
window.resetCookieConsent = function () {
    localStorage.removeItem("cookie_consent");
    location.reload();
};