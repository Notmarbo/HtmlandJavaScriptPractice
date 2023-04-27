"use strict"

const greeting = document.getElementById("greeting");
const nameTextBox = document.getElementById("nameTextBox");
const pressMeButton = document.getElementById("pressMeButton");



function init() {
    pressMeButton.onclick = onPressMeButtonClicked;

}
window.onload = init;


function onPressMeButtonClicked() {
    let username = nameTextBox.value;
    messagePara.innerHTML= `Hello to ` + username;
 
}