/*  JavaScript 7th Edition
    Chapter 1
    Hands-On Project 1-4

    Author: Nischal Joshi
    Date:  01/24/2024

    Filename: project01-04.js
*/

//define variables for home and work addresses

// Variables for home address
let homeStreet = "1 Main St.",
    homeCity = "Sicilia",
    homeState = "MA",
    homeCode = "02103";

// Variables for street address
let workStreet = "15 Oak Ln.",
    workCity = "Central City",
    workState = "MA",
    workCode = "02104";

// A function to manage onclick events for pressing work radio button.
// An alternative approach is to call this method in onclick event for radio button.
// Vice versa for the home radio button with updated values.
function onWorkRadioPressed() {
    document.getElementById('street').value = workStreet;
    document.getElementById('city').value = workCity;
    document.getElementById('state').value = workState;
    document.getElementById('code').value = workCode;

}

