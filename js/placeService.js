'use strict'

var gPlaces = []

const PLACE_INFO = 'placeInfo'

function setPlaceToLocalStorage(placeInfo) {
    saveToStorage(PLACE_INFO, placeInfo);
}

function loadColorsFromStorage() {
    var userPrefs = loadFromStorage(PLACE_INFO);
    return placeInfo;
}


function getPlaces() {
    return gPlaces;
}
function addPlace(place){
    gPlaces.unshift(place)
} 
// removePlace

