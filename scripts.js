// Check if the user is logged in (using sessionStorage as an example)
const isLoggedIn = sessionStorage.getItem('loggedIn') === 'true';

// Update the button on the Home Page
const homeBtn = document.getElementById('home-btn');

// Function to update the Home button text and link based on login status
function updateHomeButton() {
  if (isLoggedIn) {
    homeBtn.textContent = "Go to Services";  // Change button text
    homeBtn.href = "services.html";  // Redirect to Services page
  } else {
    homeBtn.textContent = "Login or Sign Up";  // Change button text
    homeBtn.href = "login.html";  // Redirect to Login page
  }
}

// Call the function to update the button when the page loads
updateHomeButton();

// ** Login Page Script: When the login form is submitted **
document.getElementById('login-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Assuming login is successful, set the session storage
  sessionStorage.setItem('loggedIn', 'true');
  
  // Redirect to the home page
  window.location.href = "index.html"; 
});

// ** Sign Up Page Script: When the sign-up form is submitted **
document.getElementById('signup-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Assuming sign-up is successful, set the session storage
  sessionStorage.setItem('loggedIn', 'true');
  
  // Redirect to the home page
  window.location.href = "index.html"; 
});

// ** Sign Out Script: On sign-out, remove the session storage and redirect to home **
function signOut() {
  sessionStorage.removeItem('loggedIn');  // Remove the logged-in status
  window.location.href = "index.html";  // Redirect to Home Page after sign out
}

// Add event listener to the sign-out button if present
const signOutButton = document.getElementById('signout-link');
if (signOutButton) {
  signOutButton.addEventListener('click', function(e) {
    e.preventDefault();  // Prevent default behavior of the link
    signOut();  // Call the signOut function
  });
}

// ** Update Navigation Links Based on Login Status **
const loginLink = document.getElementById('login-link');
const signupLink = document.getElementById('signup-link');
const signoutLink = document.getElementById('signout-link');

// Update the visibility of the links based on the login status
if (isLoggedIn) {
  // If logged in, hide the Login and Sign Up links, show Sign Out
  loginLink.style.display = 'none';
  signupLink.style.display = 'none';
  signoutLink.style.display = 'inline-block';  // Show Sign Out link
} else {
  // If not logged in, show Login and Sign Up links, hide Sign Out
  loginLink.style.display = 'inline-block';
  signupLink.style.display = 'inline-block';
  signoutLink.style.display = 'none';  // Hide Sign Out link
}

// ** Pop-up Handling on the Overnight Servicing Page **
document.getElementById('overnight-service-form')?.addEventListener('submit', function(e) {
  e.preventDefault();

  // Create and show the pop-up
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <div class="popup-content">
      <h3>Overnight Service Scheduled!</h3>
      <p>We will contact you when it's time for pickup.</p>
      <button class="close-popup">Close</button>
    </div>
  `;
  document.body.appendChild(popup);

  // Close the pop-up when the button is clicked
  document.querySelector('.close-popup')?.addEventListener('click', function() {
    document.body.removeChild(popup);
  });
});
