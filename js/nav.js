fetch('includes/nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;
  });

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
            link.style.color = "#00ff9c";
          }
        });
      }
    });
});