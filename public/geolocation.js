// Function to get the user's current location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
        var selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';

        var message = selectedLanguage === 'pl'
                    ? "Geolokalizacja nie jest dostępna w tej przeglądarce."
                    : "Geolocation is not supported by this browser.";
        alert(message);
    }
}

// Function to show the position in an alert
function showPosition(position) {
    // Retrieve the selected language from localStorage
    var selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';

    // Determine the message based on the selected language
    var message = selectedLanguage === 'pl' 
                  ? "Twoja aktualna geolokalizacja.\nSzerokość geograficzna: " + position.coords.latitude + 
                    ", Długość geograficzna: " + position.coords.longitude
                  : "Your current geolocation.\nLatitude: " + position.coords.latitude + 
                    ", Longitude: " + position.coords.longitude;

    alert(message);
}

// Function to handle error
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            var selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';

            var message = selectedLanguage === 'pl'
                        ? "Użytkownik odrzucił żądanie geolokalizacji."
                        : "User denied the request for Geolocation.";
            alert(message);
            break;
        case error.POSITION_UNAVAILABLE:
            var selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';

            var message = selectedLanguage === 'pl'
                        ? "Informacje o lokalizacji są niedostępne."
                        : "Location information is unavailable.";
            alert(message);
            break;
        case error.TIMEOUT:
            var selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';

            var message = selectedLanguage === 'pl'
                        ? "Upłynął limit czasu żądania lokalizacji użytkownika."
                        : "The request to get user location timed out.";
            alert(message);
            break;
        case error.UNKNOWN_ERROR:
            var selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';

            var message = selectedLanguage === 'pl'
                        ? "Wystąpił nieznany błąd."
                        : "An unknown error occurred.";
            alert(message);
            break;
    }
}