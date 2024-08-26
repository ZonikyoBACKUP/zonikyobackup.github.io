document.addEventListener('DOMContentLoaded', function() {
  // Add toggle menu functionality
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.getElementById('navbar');
  menuIcon.addEventListener('click', () => {
    // Example: toggle classes for mobile menu
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
