// Function to create the navbar
function createNavbar() {
    const navbarHTML = `
        <nav class="navbar">
            <ul class="navbar-list">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    `;
    
    // Insert the navbar at the top of the page (before body content)
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}

// Call the function to insert the navbar when the page loads
window.onload = createNavbar;