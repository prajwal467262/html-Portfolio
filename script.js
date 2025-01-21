// Function to toggle menu and handle sticky navigation
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  
    // Handle sticky navigation
    const nav = document.getElementById('desktop-nav');
    if (window.scrollY > 0) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  }
  
  // Event listener for menu toggle
  document.querySelector(".hamburger-icon").addEventListener("click", toggleMenu);
  
  // Event listener for scroll to handle sticky navigation
  window.addEventListener('scroll', function() {
    var nav = document.getElementById('desktop-nav');
    if (window.scrollY > 0) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

  