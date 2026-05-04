// Existing fetch logic to load nav.html
document.addEventListener("DOMContentLoaded", function () {
  fetch('./includes/nav.html')
    .then(res => res.text())
    .then(data => {
      const el = document.getElementById('nav-placeholder');
      if (el) {
        el.innerHTML = data;

        const links = document.querySelectorAll('.nav-links a');
        const current = window.location.pathname.split("/").pop();

        links.forEach(link => {
          if (link.getAttribute("href") === current) {
            link.style.color = "#00ff9c"; // Highlight active link
          }
        });
        
        // Hamburger menu toggle logic
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        
        hamburger.addEventListener('click', () => {
          navMenu.classList.toggle('show'); // Toggle menu visibility
        });
      }
    });
});