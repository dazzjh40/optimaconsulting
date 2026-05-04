document.addEventListener("DOMContentLoaded", function () {
    console.log("cookie.js loaded");
    const consent = localStorage.getItem("cookie_consent");
    console.log("cookie consent:", consent);

    if (!consent) {
        showBanner();
    } else if (consent === "accepted") {
        loadAnalytics();
    }

    function showBanner() {
        const banner = document.createElement("div");
        banner.className = "cookie-banner";
        banner.innerHTML = `
            <div class="cookie-inner">
                <p>We use cookies to analyze website traffic and improve our services.</p>
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
        if (window.gtag) return;  // If analytics is already loaded
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        window.gtag = gtag;
        console.log('loading Google Analytics');
        
        // Insert GTM or Google Analytics Script here:
        const script = document.createElement("script");
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-P6N0KNTGHP";  // Replace with your GTM or GA ID
        script.onload = function () {
            console.log("GA script loaded");
            gtag('js', new Date());
            gtag('config', 'G-P6N0KNTGHP');  // Replace with your GA ID
        };
        document.head.appendChild(script);
    }
});