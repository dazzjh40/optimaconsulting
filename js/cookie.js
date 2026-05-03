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
                    We use cookies to analyse traffic and improve our services. 
                    See our <a href="/privacy.html" style="color:#00e0a4;">Privacy Policy</a>.
                </p>
                <div class="cookie-buttons">
                    <button id="acceptCookies">Accept</button>
                    <button id="rejectCookies">Reject</button>
                </div>
            </div>
        `;

        document.body.appendChild(banner);

        // Attach events AFTER element exists
        const acceptBtn = document.getElementById("acceptCookies");
        const rejectBtn = document.getElementById("rejectCookies");

        if (acceptBtn) {
            acceptBtn.onclick = function () {
                localStorage.setItem("cookie_consent", "accepted");
                banner.remove();
                loadAnalytics();
            };
        }

        if (rejectBtn) {
            rejectBtn.onclick = function () {
                localStorage.setItem("cookie_consent", "rejected");
                banner.remove();
            };
        }
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
            window.dataLayer = window.dataLayer || [];

            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            gtag('js', new Date());

            gtag('config', 'G-69V22F8BZN', {
                anonymize_ip: true
            });
        };
    }

});