document.addEventListener("DOMContentLoaded", function () {

    const footer = `
    <div class="footer-inner">
        <p>© Optima Consulting</p>

        <p class="footer-links">
            <a href="privacy.html">Privacy Policy</a>
        </p>

        <p class="footer-meta">
            Environmental Enforcement Consultancy, United Kingdom<br>
            Email: info@optimaconsulting.co.uk
        </p>
    </div>
    `;

    const footerContainer = document.createElement("footer");
    footerContainer.className = "footer";
    footerContainer.innerHTML = footer;

    document.body.appendChild(footerContainer);

});