'use strict'

const USER_PREF = 'user-prefs'

function setColorsToLocalStorage(userPrefs) {
    saveToStorage(USER_PREF, userPrefs);
}

function loadColorsFromStorage() {
    var userPrefs = loadFromStorage(USER_PREF);
    return userPrefs;
}


function setDataToLocalStorage(userData) {
    saveToStorage('User-Data', userData)
}


// function loadUserDataFromStorage() {
//     var userPrefs = loadFromStorage(USER_PREF);
//     return userPrefs
// }
