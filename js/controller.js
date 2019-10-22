'use strict'

function initMain() {
    setUserPrefs()
}


function onSetColors() {
    var elBgcTxt=document.querySelector('.txtColor').value;
    var elBgcColor=document.querySelector('.bgcColor').value;
    var userPrefs = {
        colorBgc: elBgcColor,
        colorTxt: elBgcTxt,    
    }
    console.log('text:',elBgcTxt, 'bgc:',elBgcColor);
    
    setColorsToLocalStorage(userPrefs)
}


function onSubmitForm(ev) {
    ev.preventDefault();
}

function onColorsChanged() {
    document.querySelector('.set-colors').value;
}

function setUserPrefs() {
    var userPrefs = loadColorsFromStorage();
    var elHome = document.querySelector('.home');
    elHome.style.backgroundColor = userPrefs.colorBgc;
    elHome.style.color = userPrefs.colorTxt;
}


function handleInfoSubmit() {
    var elBrthDate=document.querySelector('.tob').value;
    var elBrthTime=document.querySelector('.dob').value;
    var userData = {
        birthDate: elBrthDate,
        birthTime: elBrthTime,    
    }
    setDataToLocalStorage(userData);
}