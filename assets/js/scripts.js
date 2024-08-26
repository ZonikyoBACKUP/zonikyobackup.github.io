document.addEventListener('DOMContentLoaded', function() {
  // Toggle menu functionality
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.getElementById('navbar');
  const menuLinks = document.createElement('div');

  menuLinks.classList.add('menu-links');
  menuLinks.innerHTML = `
    <a href="index.html">🏠 Home</a>
    <a href="category.html">🗂 Categories</a>
    <a href="upload.html">⬆️ Upload a Game</a>
  `;

  menuIcon.addEventListener('click', () => {
    navbar.innerHTML = '';
    navbar.appendChild(menuLinks);
  });

  // Emergency shutdown mechanism
  fetch('config/emergency.json')
    .then(response => response.json())
    .then(data => {
      if (data.enable === true) {
        window.location.href = 'emergency_shutdown.html';
      }
    });
});
