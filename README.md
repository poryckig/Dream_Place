Final project in Programming mobile and web applications at Warsaw University of Technology.  

**1. Introduction**  
The application is intended to support the customer during his trip planning. It enables the selection of a suitable hotel room that meets the user's needs. The user selects the accommodation criteria that are important from his perspective, and is then presented with a list of options according to his filtering.

**2. Functional description and analysis**
- the customer can see the home page of the travel agency and go to two sub-pages (About Us
and Contact Us), where they can find out more information about the agency.
- the customer can search for a room by the name of the continent, country and city, as well as the room capacity and date of availability.
room capacity and availability date.
- the customer has the option to enter the number of days of potential room reservation.
- the system displays a list of available rooms that meet the requirements set by the customer (selected by the customer in the category filter stage) together with relevant information such as:  
name of the hotel, number of stars of the hotel, country and city where the hotel is located, room capacity
of the room, the price per night per person (the base price that each room in the database has) and the total price calculated from the formula: 𝑐𝑒𝑛𝑎 𝑧𝑎 𝑑𝑜𝑏𝑒 𝑜𝑑 𝑜𝑠𝑜𝑏𝑦(𝑐𝑒𝑛𝑎 𝑏𝑎𝑧𝑜𝑤𝑎) ∗ 𝑙𝑖𝑐𝑧𝑏𝑎 𝑑𝑛𝑖 ∗ 𝑙𝑖𝑐𝑧𝑏𝑎 𝑜𝑠𝑜𝑏. The application assumes that the price is expressed in PLN.
- the client has the possibility to book the room of their choice by clicking on the button next to each item on the list.
- the client, while on the Contact Us subpage, has the option of sending a message to the travel agency after
the customer, in the Contact Us subpage, has the option of sending a message to the travel agent after completing all the fields on the form.
- the customer can change the language of the application display between English and Polish.
- the customer can change the interface theme between light and dark.
- the customer has the option to display his/her current geolocation
- the customer can log in or register via Google

**3. Technical architecture**  
The travel agency is an application which is mainly written in HTML,
CSS (responsible for visual issues) and JavaScript (for event handling). In the backend layer, the Node.js framework is used together with npm(Node Package Manager - for managing dependencies in the project) and the nodemon tool(for automatically restarting the application server as soon as changes are detected in the project). The server is handled by Express.js. The database is written in
MySQL. I have also used the Boostrap frontend framework.

Index.js is responsible for handling the server, database connection, database queries and handling the
endpoints.
client.js is responsible for capturing, managing and displaying the client's selections
geolocation.js provides access to the user's current geolocation
auth.js responsible for logging in and registering via Google
relevant results and messages.
index.html - home page.
book.html - subpage where the customer can select the room of interest.
about.html, contact.html - sub-pages where the customer can find out more about the
travel agency.
styles.css - manages the visual aspect of the application.
The images directory, in turn, stores the images used.

There is visual consistency throughout the project: uniform colours, fonts and buttons throughout the ecosystem.

In general, the application is web-based, although it can be run as a desktop application using Electron and as a mobile application using PWA.
