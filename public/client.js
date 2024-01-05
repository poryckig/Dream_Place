let wybranaDataRozpoczecia = '';
let wybranaLiczbaDni = '';
let selectedLanguage = localStorage.getItem('selectedLanguage') || 'en'; // Pobranie zapisanego języka lub ustawienie domyślnego

const texts = {
    en: {
      // index.html
      aboutUs: "About Us" ,
      contactUs: "Contact Us",
      lightMode: "Light mode",
      darkMode: "Dark mode",
      title: "Travel with Us!",
      welcomeText: "Welcome to our Dream Place travel agency! Thanks to our services, you will have your dream vacation at a low price.",
      bookAHotelButton: "Book a hotel",
      whyUs: "Why Us",
      professionalism: "Professionalism",
      professionalismText: "Our team is trained to prioritize efficiency, organization, and attention to detail. We understand that your trip is more than just time in another place - it is a reflection of your life, memories, and experiences. That's why we take extra care to ensure that everything is good and you are happy.",
      wideRange: "Wide range",
      wideRangeText: "We offer a range of services to suit your individual needs, whether you're across the country or abroad. Thanks to our offer you will travel wherever you want not only alone but also with your friends or family.",
      lowPrices: "Low prices",
      lowPricesText: "We guarantee competitive prices in all services we have. Even if your budget is small you will find something interesting without a doubt. Moreover we offer favourable promotion of some our services. Please contact us to know details.",
      section: "Section",
      home: "Home",

      // about.html
      titleAboutUs: "About Dream Place Travel Agency",
      welcomeTextAboutUs: "Welcome to Dream Place, your ultimate travel partner. We are dedicated to creating unforgettable journeys that reflect our passion for travel, attention to detail, and the pursuit of unique experiences. Our team of travel experts is committed to providing personalized service to fulfill your travel dreams.",
      ourMission: "Our Mission",
      ourMissionText: "To make travel accessible to all, offering a seamless and personalized experience that opens the world for exploration and discovery.",
      ourVision: "Our Vision",
      ourVisionText: "To be the leading travel agency in providing tailored travel experiences that create lasting memories.",
      ourValues: "Our Values",
      ourValuesText: "The travel agency offers unforgettable experiences, personalised travel and full customer service, creating the perfect holiday.",
      ourValuesList: ["Customer Satisfaction", "Integrity and Honesty", "Innovation in Travel", "Responsible Tourism"],
    
      // contact.html
      titleContactUs: "Contact Dream Place Travel Agency",
      welcomeTextContactUs: "Have questions or need to plan your next adventure? Get in touch with us, and let's make your dream trip a reality.",
      getInTouch: "Get in Touch",
      getInTouchText: "Whether you're ready to book your trip or need some travel advice, our team is here to help.",
      getInTouchList: ["Email: contact@dreamplacetravel.com", "Phone: +123 456 7890", "Address: 123 Dream Street, Travel City, TP 456"],
      officeHours: "Office Hours",
      officeHoursText: "To be the leading travel agency in providing tailored travel experiences that create lasting memories.",
      officeHoursList: ["Monday to Friday: 9 am - 6 pm", "Saturday: 10 am - 4 pm", "Sunday: Closed"],
      contactForm: {
        title: "Send Us a Message",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        messagePlaceholder: "Your Message",
        submitButton: "Submit"
      },
      sendMessageInfo: "The message has been sent!",
      
      // book.html
      continents: "Continents",
      countries: "Countries",
      cities: "Cities",
      numberOfPeople: "Number of people",
      startDateOfStay: "Start date",
      numberOfDays: "Number of days",
      search: "Search",
      roomInfo: {
        stars: "stars",
        pricePerNightPerPerson: "Price per night per person",
        totalPrice: "Total price",
        bookButton: "Book",
        bookingSuccess: "Room booked successfully!",
      },
      roomSizes: {
        "1 osobowy": "1 person",
        "2 osobowy": "2 persons",
        "3 osobowy" : "3 persons",
        "4 osobowy" : "4 persons",
      },
    },

    pl: {
      // index.html  
      aboutUs: "O nas" ,
      contactUs: "Kontakt",
      lightMode: "Tryb jasny",
      darkMode: "Tryb ciemny",
      title: "Podróżuj z nami!",
      welcomeText: "Witamy w naszym biurze podróży Dream Place! Dzięki naszym usługom będziesz miał wymarzone wakacje w niskiej cenie.",
      bookAHotelButton: "Zarezerwuj pokój",
      whyUs: "Dlaczego my",
      professionalism: "Profesjonalizm",
      professionalismText: "Nasz zespół jest szkolony, aby priorytetowo traktować efektywność, organizację i dbałość o szczegóły. Rozumiemy, że Twoja podróż to coś więcej niż czas spędzony w innym miejscu - to odzwierciedlenie Twojego życia, wspomnień i doświadczeń. Dlatego dokładamy wszelkich starań, aby wszystko było dobrze i abyś był szczęśliwy.",
      wideRange: "Szeroki zakres",
      wideRangeText: "Oferujemy szereg usług dostosowanych do indywidualnych potrzeb, niezależnie od tego, czy podróżujesz po kraju, czy za granicą. Dzięki naszej ofercie będziesz podróżować, gdzie tylko chcesz, nie tylko sam, ale także z przyjaciółmi lub rodziną.",
      lowPrices: "Niskie ceny",
      lowPricesText: "Gwarantujemy konkurencyjne ceny we wszystkich usługach, które oferujemy. Nawet jeśli Twój budżet jest mały, z pewnością znajdziesz coś interesującego. Ponadto oferujemy korzystne promocje niektórych naszych usług. Prosimy o kontakt w celu uzyskania szczegółów.",
      section: "Sekcja",
      home: "Strona główna",

      // about.html
      titleAboutUs: "O biurze podróży Dream Place",
      welcomeTextAboutUs: "Witamy w Dream Place, najlepszym partnerze w podróży. Naszym celem jest tworzenie niezapomnianych podróży, które odzwierciedlają naszą pasję do podróżowania, dbałość o szczegóły i dążenie do wyjątkowych doświadczeń. Nasz zespół ekspertów ds. podróży zapewnia spersonalizowaną obsługę, aby spełnić Twoje podróżnicze marzenia.",
      ourMission: "Nasza Misja",
      ourMissionText: "Aby uczynić podróże dostępnymi dla wszystkich, oferując płynne i spersonalizowane doświadczenie, które otwiera świat na eksplorację i odkrywanie.",
      ourVision: "Nasza Wizja",
      ourVisionText: "Być wiodącym biurem podróży w dostarczaniu dostosowanych do potrzeb doświadczeń turystycznych, które tworzą trwałe wspomnienia.",
      ourValues: "Nasze Wartości",
      ourValuesText: "Biuro podróży oferuje niezapomniane doświadczenia, personalizowane podróże i pełną obsługę klienta, tworząc idealne wakacje.",
      ourValuesList: ["Zadowolenie Klienta", "Integralność i Uczciwość", "Innowacje w Podróży", "Odpowiedzialny Turystyk"],
    
      // contact.html
      titleContactUs: "Kontakt z biurem podróży Dream Place",
      welcomeTextContactUs: "Masz pytania lub chcesz zaplanować kolejną przygodę? Skontaktuj się z nami, a Twoja wymarzona podróż stanie się rzeczywistością.",
      getInTouch: "Skontaktuj się z nami",
      getInTouchText: "Niezależnie od tego, czy chcesz zarezerwować podróż, czy potrzebujesz porady, nasz zespół jest tutaj, aby Ci pomóc.",
      getInTouchList: ["E-mail: contact@dreamplacetravel.com", "Telefon: +123 456 7890", "Adres: 123 Dream Street, Travel City, TP 456"],
      officeHours: "Godziny pracy",
      officeHoursText: "Chcemy być wiodącym biurem podróży w dostarczaniu dostosowanych do potrzeb doświadczeń turystycznych, które tworzą trwałe wspomnienia.",
      officeHoursList: ["Od poniedziałku do piątku: 9:00 - 18:00", "Sobota: 10:00 - 16:00", "Niedziela: Zamknięte"],
      contactForm: {
        title: "Wyślij do nas wiadomość",
        namePlaceholder: "Twoje imię",
        emailPlaceholder: "Twój email",
        messagePlaceholder: "Twoja wiadomość",
        submitButton: "Wyślij"
      },
      sendMessageInfo: "Wiadomość została wysłana!",

      // book.html
      continents: "Kontynenty",
      countries: "Kraje",
      cities: "Miasta",
      numberOfPeople: "Liczba osób",
      startDateOfStay: "Data rozpoczęcia pobutu",
      numberOfDays: "Liczba dni pobytu",
      search: "Wyszukaj",
      roomInfo: {
        stars: "gwiazdki",
        pricePerNightPerPerson: "Cena za dobę od osoby",
        totalPrice: "Cena całkowita",
        bookButton: "Rezerwuj",
        bookingSuccess: "Pokój został poprawnie zarezerwowany!",
      },
      roomSizes: {
        "1 osobowy": "1 osobowy",
        "2 osobowy": "2 osobowy",
        "3 osobowy" : "3 osobowy",
        "4 osobowy" : "4 osobowy",
      },  
    }
};

document.addEventListener('DOMContentLoaded', function() {
    function fetchDataAndUpdateUI(endpoint, collapseId) {
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                const listElement = document.querySelector(`${collapseId} .btn-toggle-nav`);
                listElement.innerHTML = ''; // Wyczyść aktualne elementy
                data.forEach((item, index) => {
                    const listItem = `
                        <li>
                            <input type="checkbox" id="${collapseId.replace('#', '')}-${index}" name="${item.nazwa}">
                            <label for="${collapseId.replace('#', '')}-${index}" class="link-body-emphasis d-inline-flex text-decoration-none rounded">${item.nazwa}</label>
                        </li>`;
                    listElement.innerHTML += listItem; // Dodaj elementy do listy
                });
            })
            .catch(error => console.error('Error:', error));
    }

    // Kontynenty
    const kontynentyButton = document.getElementById('btnKontynenty');
    if (kontynentyButton) {
        kontynentyButton.addEventListener('click', () => {
            fetchDataAndUpdateUI('/kontynenty', '#home-collapse');
        });
    }

    // Kraje
    const krajeButton = document.getElementById('btnKraje');
    if (krajeButton) {
        krajeButton.addEventListener('click', () => {
            fetchDataAndUpdateUI('/kraje', '#dashboard-collapse');
        });
    }

    // Miasta
    const miastaButton = document.getElementById('btnMiasta');
    if (miastaButton) {
        miastaButton.addEventListener('click', () => {
            fetchDataAndUpdateUI('/miasta', '#orders-collapse');
        });
    }

    const liczbaOsobButton = document.getElementById('btnLiczbaOsob');
    if (liczbaOsobButton) {
        liczbaOsobButton.addEventListener('click', () => {
            fetch('/rozmiary-pokoju')
            .then(response => response.json())
            .then(data => {
                const listElement = document.querySelector('#people-collapse .btn-toggle-nav');
                listElement.innerHTML = '';
                data.forEach((item, index) => {
                    const listItem = `<li><input type="checkbox" id="people-${index}"><label for="people-${index}">${item.liczba_osob}</label></li>`;
                    listElement.innerHTML += listItem;
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    }

    // Event listener dla inputa z datą
    const dataRozpoczeciaInput = document.getElementById('start');
    if (dataRozpoczeciaInput) {
        dataRozpoczeciaInput.addEventListener('change', (e) => {
            wybranaDataRozpoczecia = e.target.value;
            console.log('Wybrana data rozpoczęcia pobytu:', wybranaDataRozpoczecia);
        });
    }

    // Event listener dla inputa z liczbą dni
    const liczbaDniPobytuInput = document.getElementById('liczbaDniPobytu');
    if (liczbaDniPobytuInput) {
        liczbaDniPobytuInput.addEventListener('change', (e) => {
        wybranaLiczbaDni = e.target.value;
        console.log('Wybrana liczba dni pobytu:', wybranaLiczbaDni);
        });
    }

    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        themeToggleButton.textContent = currentTheme === 'dark-mode' ? 'Tryb jasny' : 'Tryb ciemny';
    }

    updateThemeButtonText(); // Aktualizuj tekst na przycisku podczas ładowania strony

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const theme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', theme);
        updateThemeButtonText(); // Aktualizuj tekst na przycisku po zmianie motywu
    });

    
    switchLanguage(selectedLanguage); // Ustawienie języka na podstawie wartości z localStorage

    // Zaktualizuj teksty na stronie book.html podczas ładowania strony
    if (window.location.pathname.includes('book.html')) {
        updateBookTexts(selectedLanguage);
    }

    // Event listener dla przycisku zmiany języka
    document.getElementById('language-toggle').addEventListener('click', () => {
        const currentLanguage = selectedLanguage;
        const newLanguage = currentLanguage === 'en' ? 'pl' : 'en';
        selectedLanguage = newLanguage; // Aktualizuj zmienną selectedLanguage
        switchLanguage(newLanguage);
    });

    // Funkcja do zmiany języka
    function switchLanguage(lang) {
        console.log('Language before switch: ', localStorage.getItem('selectedLanguage')); // Wyświetla aktualny język w konsoli
        
        updateLanguageButton(lang);
        updateTexts(lang);
        localStorage.setItem('selectedLanguage', lang);
        updateThemeButtonText();

        // Uaktualnij teksty na stronie book.html
        if (window.location.pathname.includes('book.html')) {
            updateBookTexts(lang);
            wyszukajPokoje();
        }

        console.log('Language after switch:', lang); // Wyświetla język po zmianie w konsoli
    }
  
    // Funkcja do aktualizacji przycisku i flagi w zależności od wybranego języka
    function updateLanguageButton(lang) {
        const flagImage = document.getElementById('language-flag');
        if (lang === 'pl') {
            flagImage.src = './assets/images/uk_flag.png'; // Ścieżka do flagi UK
            flagImage.alt = 'English';
            document.getElementById('language-toggle').title = 'Zmień na Angielski';
        } else {
            flagImage.src = './assets/images/poland_flag.png'; // Ścieżka do flagi Polski
            flagImage.alt = 'Polski';
            document.getElementById('language-toggle').title = 'Change to Polish';
        }
    }

    function updateTexts(lang) {
        // index.html
        if (document.querySelector('.about-us')) {
            document.querySelector('.about-us').textContent = texts[lang].aboutUs;
        }
        if (document.querySelector('.contact-us')) {
            document.querySelector('.contact-us').textContent = texts[lang].contactUs;
        }
        if (document.getElementById('theme-toggle')) {
            const themeButton = document.getElementById('theme-toggle');
            themeButton.textContent = texts[lang].themeButton;
        }
        if (document.querySelector('.title')) {
            document.querySelector('.title').textContent = texts[lang].title;
        }
        if (document.querySelector('.welcome-text')) {
            document.querySelector('.welcome-text').textContent = texts[lang].welcomeText;
        }
        if (document.querySelector('.book-a-hotel-button')) {
            document.querySelector('.book-a-hotel-button').textContent = texts[lang].bookAHotelButton;
        }
        if (document.querySelector('.why-us')) {
            document.querySelector('.why-us').textContent = texts[lang].whyUs;
        }
        if (document.querySelector('.professionalism')) {
            document.querySelector('.professionalism').textContent = texts[lang].professionalism;
        }
        if (document.querySelector('.professionalism-text')) {
            document.querySelector('.professionalism-text').textContent = texts[lang].professionalismText;
        }
        if (document.querySelector('.wide-range')) {
            document.querySelector('.wide-range').textContent = texts[lang].wideRange;
        }
        if (document.querySelector('.wide-range-text')) {
            document.querySelector('.wide-range-text').textContent = texts[lang].wideRangeText;
        }
        if (document.querySelector('.low-prices')) {
            document.querySelector('.low-prices').textContent = texts[lang].lowPrices;
        }
        if (document.querySelector('.low-prices-text')) {
            document.querySelector('.low-prices-text').textContent = texts[lang].lowPricesText;
        }
        if (document.querySelector('.section')) {
            document.querySelector('.section').textContent = texts[lang].section;
        }
        if (document.querySelector('.home')) {
            document.querySelector('.home').textContent = texts[lang].home;
        }
        if (document.querySelector('.about-us-section')) {
            document.querySelector('.about-us-section').textContent = texts[lang].aboutUs;
        }
        if (document.querySelector('.contact-us-section')) {
            document.querySelector('.contact-us-section').textContent = texts[lang].contactUs;
        }


        // about.html
        if (document.querySelector('.title-about-us')) {
            document.querySelector('.title-about-us').textContent = texts[lang].titleAboutUs;
        }
        if (document.querySelector('.welcome-text-about-us')) {
            document.querySelector('.welcome-text-about-us').textContent = texts[lang].welcomeTextAboutUs;
        }
        if (document.querySelector('.our-mission')) {
            document.querySelector('.our-mission').textContent = texts[lang].ourMission;
        }
        if (document.querySelector('.our-mission-text')) {
            document.querySelector('.our-mission-text').textContent = texts[lang].ourMissionText;
        }
        if (document.querySelector('.our-vision')) {
            document.querySelector('.our-vision').textContent = texts[lang].ourVision;
        }
        if (document.querySelector('.our-vision-text')) {
            document.querySelector('.our-vision-text').textContent = texts[lang].ourVisionText;
        }
        if (document.querySelector('.our-values')) {
            document.querySelector('.our-values').textContent = texts[lang].ourValues;
        }
        if (document.querySelector('.our-values-text')) {
            document.querySelector('.our-values-text').textContent = texts[lang].ourValuesText;
        }
        if (document.querySelector('.our-values-text + ul')) {
            const valuesList = document.querySelector('.our-values-text + ul');
            valuesList.innerHTML = ''; // Czyści listę
            texts[lang].ourValuesList.forEach(value => {
            const listItem = document.createElement('li');
                listItem.textContent = value;
                valuesList.appendChild(listItem);
            });
        }

        // contact.html
        if (document.querySelector('.title-contact-us')) {
            document.querySelector('.title-contact-us').textContent = texts[lang].titleContactUs;
        }
        if (document.querySelector('.welcome-text-contact-us')) {
            document.querySelector('.welcome-text-contact-us').textContent = texts[lang].welcomeTextContactUs;
        }
        if (document.querySelector('.get-in-touch')) {
            document.querySelector('.get-in-touch').textContent = texts[lang].getInTouch;
        }
        if (document.querySelector('.get-in-touch-text')) {
            document.querySelector('.get-in-touch-text').textContent = texts[lang].getInTouchText;
        }
        if (document.querySelector('.get-in-touch-text + ul')) {
            const valuesList = document.querySelector('.get-in-touch-text + ul');
            valuesList.innerHTML = ''; // Czyści listę
            texts[lang].getInTouchList.forEach(value => {
            const listItem = document.createElement('li');
                listItem.textContent = value;
                valuesList.appendChild(listItem);
            });
        }
        if (document.querySelector('.office-hours')) {
            document.querySelector('.office-hours').textContent = texts[lang].officeHours;
        }
        if (document.querySelector('.office-hours-text')) {
            document.querySelector('.office-hours-text').textContent = texts[lang].officeHoursText;
        }
        if (document.querySelector('.office-hours-text + ul')) {
            const valuesList = document.querySelector('.office-hours-text + ul');
            valuesList.innerHTML = ''; // Czyści listę
            texts[lang].officeHoursList.forEach(value => {
            const listItem = document.createElement('li');
                listItem.textContent = value;
                valuesList.appendChild(listItem);
            });
        }
        if (document.querySelector('.contact-form')) {
            document.querySelector('.contact-form .send-us-a-message').textContent = texts[lang].contactForm.title;
            document.getElementById('name').setAttribute('placeholder', texts[lang].contactForm.namePlaceholder);
            document.getElementById('email').setAttribute('placeholder', texts[lang].contactForm.emailPlaceholder);
            document.getElementById('message').setAttribute('placeholder', texts[lang].contactForm.messagePlaceholder);
            document.querySelector('#contact-form button').textContent = texts[lang].contactForm.submitButton;
        }
    }

    // dla book.html
    function updateBookTexts(lang) {
        // Aktualizacja elementów statycznych na stronie
        document.getElementById('btnKontynenty').textContent = texts[lang].continents;
        document.getElementById('btnKraje').textContent = texts[lang].countries;
        document.getElementById('btnMiasta').textContent = texts[lang].cities;
        document.getElementById('btnLiczbaOsob').textContent = texts[lang].numberOfPeople;
        document.querySelector('label[for="start"]').textContent = texts[lang].startDateOfStay;
        document.querySelector('label[for="liczbaDniPobytu"]').textContent = texts[lang].numberOfDays;
      
        // Aktualizacja przycisku wyszukiwania
        document.getElementById('btnWyszukaj').textContent = texts[lang].search;
    }  

    function updateThemeButtonText() {
        const currentLanguage = localStorage.getItem('selectedLanguage') || 'en';
        const themeToggleButton = document.getElementById('theme-toggle');
        if (document.body.classList.contains('dark-mode')) {
          themeToggleButton.textContent = texts[currentLanguage].lightMode;
        } else {
          themeToggleButton.textContent = texts[currentLanguage].darkMode;
        }
    }
});

// Dodaj obsługę zdarzeń dla przycisku submit formularza kontaktowego
const submitButton = document.getElementById('submit-button');
if (submitButton) {
    submitButton.addEventListener('click', (e) => {
        e.preventDefault(); // Zapobiegaj domyślnej akcji przycisku submit
        const message = selectedLanguage === 'en' ? 'The message has been sent!' : 'Wiadomość została wysłana!';
        alert(message);
    });
}

// Przykład sprawdzenia, czy element istnieje, przed dodaniem event listenera
const wyszukajButton = document.getElementById('btnWyszukaj');
if (wyszukajButton) {
    wyszukajButton.addEventListener('click', () => {
        wyszukajPokoje();
    });
}

function wyszukajPokoje() {
    // Pobierz zaznaczone kontynenty, kraje, miasta i liczbę osób
    const zaznaczoneKontynenty = Array.from(document.querySelectorAll('#home-collapse input[type="checkbox"]:checked')).map(el => el.name);
    const zaznaczoneKraje = Array.from(document.querySelectorAll('#dashboard-collapse input[type="checkbox"]:checked')).map(el => el.name);
    const zaznaczoneMiasta = Array.from(document.querySelectorAll('#orders-collapse input[type="checkbox"]:checked')).map(el => el.name);
    const zaznaczoneLiczbyOsob = Array.from(document.querySelectorAll('#people-collapse input[type="checkbox"]:checked')).map(el => el.nextSibling.textContent.trim());

    const dataRozpoczecia = document.getElementById('start').value;
    const liczbaDni = parseInt(document.getElementById('liczbaDniPobytu').value);
    if (isNaN(liczbaDni) || liczbaDni <= 0) {
        console.error('Liczba dni pobytu nie jest prawidłowa liczba');
        return; // Zakończ funkcję, jeśli liczba dni nie jest prawidłowa
    }

    // Przygotuj dane do wysłania
    const wyszukiwanieDanych = {
        kontynenty: zaznaczoneKontynenty,
        kraje: zaznaczoneKraje,
        miasta: zaznaczoneMiasta,
        liczbyOsob: zaznaczoneLiczbyOsob,
        dataRozpoczecia: dataRozpoczecia,
        liczbaDni: liczbaDni
    };

    // Wyślij żądanie POST z danymi do serwera
    fetch('/wyszukaj-pokoje', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(wyszukiwanieDanych)
    })
    .then(response => response.json())
    .then(pokoje => {
        // Przetłumacz pokoje przed wyświetleniem
        translateAndDisplayRooms(pokoje, selectedLanguage);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


  
function translateAndDisplayRooms(roomsData, lang) {
    // Sortuj pokoje według ceny całkowitej malejąco
    roomsData.sort((a, b) => {
      const cenaCalkowitaA = parseInt(a.cena_za_dobe_od_osoby) * wybranaLiczbaDni * parseInt(a.liczba_osob);
      const cenaCalkowitaB = parseInt(b.cena_za_dobe_od_osoby) * wybranaLiczbaDni * parseInt(b.liczba_osob);
      return cenaCalkowitaB - cenaCalkowitaA; // Sortowanie malejące
    });
  
    // Wyświetl posortowane i przetłumaczone pokoje
    const wynikiElement = document.getElementById('wynikiWyszukiwania');
    wynikiElement.innerHTML = ''; // Wyczyść poprzednie wyniki
  
    roomsData.forEach(room => {
        const cenaCalkowita = parseInt(room.cena_za_dobe_od_osoby) * wybranaLiczbaDni * parseInt(room.liczba_osob);
        const roomSizeKey = room.liczba_osob.toString() + ' osobowy'; // Make sure this key matches the key in the texts object
        const roomSizeText = texts[lang].roomSizes[roomSizeKey] || room.liczba_osob + ' osobowy'; // Fallback to 'X osobowy' if not found
        const roomElement = document.createElement('div');
        roomElement.className = 'pokoj-item';
        roomElement.innerHTML = `
            <div class="pokoj-content">
                <div class="pokoj-info">
                    <h5>${room.nazwa_hotelu} (${room.liczba_gwiazdek} ${texts[lang].roomInfo.stars})</h5>
                    <p>${room.nazwa_kraju}, ${room.nazwa_miasta}</p>
                    <p>${roomSizeText}</p> <!-- This line is updated with the correct translation -->
                    <p>${texts[lang].roomInfo.pricePerNightPerPerson}: ${room.cena_za_dobe_od_osoby}</p>
                    <p><strong>${texts[lang].roomInfo.totalPrice}: ${cenaCalkowita}</strong></p>
                </div>
                <button class="btn-rezerwuj">${texts[lang].roomInfo.bookButton}</button>
            </div>
        `;

        // Dodanie obsługi zdarzenia dla przycisku rezerwacji
        const bookButton = roomElement.querySelector('.btn-rezerwuj');
        bookButton.addEventListener('click', () => {
            alert(texts[lang].roomInfo.bookingSuccess);
        }); 
        
        wynikiElement.appendChild(roomElement);
    });
}
