document.addEventListener("DOMContentLoaded", function () {

    const consent = localStorage.getItem("cookie_consent");

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

        // Load Google script
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