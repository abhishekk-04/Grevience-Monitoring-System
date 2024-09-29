function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  
  document.addEventListener('DOMContentLoaded',
    function () {
        const navItems = document
            .querySelectorAll('.nav-item');
  
        navItems.forEach(item => {
            item.addEventListener('click',
                function () {
                    navItems.forEach(navItem => navItem
                        .classList.remove('active'));
                    this.classList.add('active');
                });
        });
    });
  
  // login and sign up form
     // Get elements
     const loginPopup = document.getElementById('login-popup');
     const signupPopup = document.getElementById('signup-popup');
     const loginBtn = document.getElementById('login-btn');
     const signupBtn = document.getElementById('signup-btn');
     const loginClose = document.getElementById('login-close');
     const signupClose = document.getElementById('signup-close');
     const content = document.querySelector('.content');
     const switchToLogin = document.getElementById('switch-to-login');
     
     // Show login popup
     loginBtn.addEventListener('click', function() {
         loginPopup.style.display = 'flex';
         signupPopup.style.display = 'none';  // Ensure the signup popup is closed
         content.classList.add('blurred');
     });
     
     // Close login popup
     loginClose.addEventListener('click', function() {
         loginPopup.style.display = 'none';
         content.classList.remove('blurred');
     });
     
     // Show signup popup
     signupBtn.addEventListener('click', function() {
         signupPopup.style.display = 'flex';
         loginPopup.style.display = 'none';  // Ensure the login popup is closed
         content.classList.add('blurred');
     });
     
     // Close signup popup
     signupClose.addEventListener('click', function() {
         signupPopup.style.display = 'none';
         content.classList.remove('blurred');
     });
     
     // Switch to login from signup
     switchToLogin.addEventListener('click', function() {
         signupPopup.style.display = 'none';
         loginPopup.style.display = 'flex';
     });
     
     // Close popup when clicking outside of the form
     window.addEventListener('click', function(event) {
         if (event.target === loginPopup) {
             loginPopup.style.display = 'none';
             content.classList.remove('blurred');
         }
         if (event.target === signupPopup) {
             signupPopup.style.display = 'none';
             content.classList.remove('blurred');
         }
     });
  //Dark mode toggle
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;
  
  // Check for saved preference in localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
      body.classList.add('dark-mode');
  }
  
  // Toggle dark mode on button click
  darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      
      // Save user preference in localStorage
      if (body.classList.contains('dark-mode')) {
          localStorage.setItem('darkMode', 'enabled');
      } else {
          localStorage.setItem('darkMode', 'disabled');
      }
  });
//active class js
  document.querySelectorAll('.topnav a').forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        document.querySelectorAll('.topnav a').forEach(link => {
            link.classList.remove('active');
        });
        // Add active class to the clicked link
        this.classList.add('active');
    });
});
document.getElementById('login-btn2').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    document.getElementById('login-popup').style.display = 'block'; // Show the login popup
});

// JavaScript to close the popup
document.getElementById('login-close').addEventListener('click', function() {
    document.getElementById('login-popup').style.display = 'none'; // Hide the login popup
});

// Optional: Close popup when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('login-popup')) {
        document.getElementById('login-popup').style.display = 'none';
    }
}