document.addEventListener("DOMContentLoaded", function () {

    console.log("cookie.js loaded");

    // Default consent state (GDPR best practice)
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;

    gtag('consent', 'default', {
        analytics_storage: 'denied'
    });

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
                    We use cookies to analyse traffic and improve our services. Analytics cookies are only set with your consent. 
                    See our <a href="/privacy.html">Privacy Policy</a> for details.
                </p>
                <div class="cookie-buttons">
                    <button id="acceptCookies">Accept</button>
                    <button id="rejectCookies">Reject</button>
                </div>
            </div>
        `;

        document.body.appendChild(banner);

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

            // Update consent state AFTER accept
            gtag('consent', 'update', {
                analytics_storage: 'granted'
            });

            gtag('config', 'G-69V22F8BZN', {
                anonymize_ip: true
            });
        };
    }

});


// ✅ Global reset function (OUTSIDE DOMContentLoaded)
window.resetCookieConsent = function () {
    localStorage.removeItem("cookie_consent");
    location.reload();
};

function trackCTA(eventName) {
    if (window.gtag && localStorage.getItem("cookie_consent") === "accepted") {
        gtag('event', eventName, {
            event_category: 'engagement',
            event_label: 'CTA Click'
        });
    }
}