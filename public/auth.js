// Global variable to keep track of the sign-in status
let isSignedIn = false;

function onSignIn(googleUser) {
  // Get user profile information from the GoogleUser object
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId());
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());

  // Update sign-in state
  isSignedIn = true;

  // Hide Google sign-in button and show the sign-out button
  updateButtonVisibility();
}

function signOut() {
  // Sign out the user using the GoogleAuth instance
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');

    // Update sign-in state
    isSignedIn = false;

    // Hide the sign-out button and show the Google sign-in button
    updateButtonVisibility();
  });
}

function updateButtonVisibility() {
  if (isSignedIn) {
    // Hide Google sign-in button
    $('.g-signin2').hide();

    // Show sign-out button
    $('#sign-out-button').show();
  } else {
    // Show Google sign-in button
    $('.g-signin2').show();

    // Hide sign-out button
    $('#sign-out-button').hide();
  }
}

// Load the Google API and initialize the auth2 library
function loadGapiAndInitAuth() {
  gapi.load('auth2', function() {
    // Init auth2 library
    gapi.auth2.init({
      client_id: '914575165867-4h4kcntp0923k63rj5ocf42rpbc4uc8n.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
    }).then(() => {
      // After library is initialized, update button visibility based on the sign-in state
      isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get();
      updateButtonVisibility();
    });
  });
}

// Add a sign-out button to the DOM
function addSignOutButton() {
  const signOutButton = document.createElement('button');
  signOutButton.id = 'sign-out-button';
  signOutButton.innerText = 'Wyloguj się';
  signOutButton.style.display = 'none'; // Start hidden
  signOutButton.onclick = signOut;

  document.body.appendChild(signOutButton); // Append where you see fit
}

// Run the init function when the window loads
window.onload = function() {
  addSignOutButton();
  loadGapiAndInitAuth();
};
