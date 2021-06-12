'use strict'

const regPhone = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
const regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
const regNumbers = /[0-9]/;
const regLetters = /[A-Za-zA-Яа-яЁё]/;
const inp = document.querySelector('.left-container-form-input-name');
const notValidMess = document.querySelector('.left-container-form-validation-mess-name');
const inpEmail = document.querySelector('.left-container-form-input-email');
const notValidMessEmaill = document.querySelector('.left-container-form-validation-mess-email');
const inpPhone = document.querySelector('.left-container-form-input-phone');
const notValidMessPhone = document.querySelector('.left-container-form-validation-mess-phone');
const inpCountry = document.querySelector('.left-container-form-input-country');
const notValidMessCountry = document.querySelector('.left-container-form-validation-mess-country');
const inpCity = document.querySelector('.left-container-form-input-city');
const notValidMessCity = document.querySelector('.lleft-container-form-validation-mess-city');
const inpStreet = document.querySelector('.left-container-form-input-street');
const notValidMessStreet = document.querySelector('.left-container-form-validation-mess-street');
const inpHouse = document.querySelector('.left-container-form-input-house');
const notValidMessHouse = document.querySelector('.left-container-form-validation-mess-house');
const inpApart = document.querySelector('.left-container-form-input-apart');
const notValidMessApart = document.querySelector('.left-container-form-validation-mess-apart');

document.querySelector('.left-container-form-btn').onclick = function(e) {
    e.preventDefault();
    if (!validate(regLetters, inp.value)) {
        notValid(inp, notValidMess, "Enter your data!!!");
    } else { valid(inp, notValidMess, "") }
}

function validate(regex, inp) {
    return regex.test(inp);
}

function notValid(inp, el, mess) {
    notValidMess.classList.add('left-container-form-validation-mess-inValid')
    el.innerHTML = mess;
}

function valid(inp, el, mess) {
    notValidMess.classList.remove('left-container-form-validation-mess-inValid')
    notValidMess.classList.add('left-container-form-validation-mess-valid')
    el.innerHTML = mess;
}
document.querySelector('.left-container-form-btn').onclick = function(e) {
    e.preventDefault();
    if (!validate(regNumbers, inpEmail.value)) {
        notValid(inpEmail, notValidMessEmaill, "Enter your data!!!");
    } else { valid(inpEmail, notValidMessEmaill, "") }
}

function notValid(inp, el, mess) {
    notValidMessEmaill.classList.add('left-container-form-validation-mess-inValid')
    el.innerHTML = mess;
}

function valid(inp, el, mess) {
    notValidMessEmaill.classList.remove('left-container-form-validation-mess-inValid')
    notValidMessEmaill.classList.add('left-container-form-validation-mess-valid')
    el.innerHTML = mess;
}
document.querySelector('.left-container-form-btn').onclick = function(e) {
    e.preventDefault();
    if (!validate(regPhone, inpPhone.value)) {
        notValid(inpPhone, notValidMessPhone, "Enter your data!!!");
    } else { valid(inpPhone, notValidMessPhone, "") }
}

function notValid(inp, el, mess) {
    notValidMessPhone.classList.add('left-container-form-validation-mess-inValid')
    el.innerHTML = mess;
}

function valid(inp, el, mess) {
    notValidMessPhone.classList.remove('left-container-form-validation-mess-inValid')
    notValidMessPhone.classList.add('left-container-form-validation-mess-valid')
    el.innerHTML = mess;
}

document.querySelector('.left-container-form-btn').onclick = function(e) {
    e.preventDefault();
    if (!validate(regLetters, inpCountry.value)) {
        notValid(inpCountry, notValidMessCountry, "Enter your data!!!");
    } else { valid(inpCountry, notValidMessCountry, "") }
}

function notValid(inp, el, mess) {
    notValidMessCountry.classList.add('left-container-form-validation-mess-inValid')
    el.innerHTML = mess;
}

function valid(inp, el, mess) {
    notValidMessCountry.classList.remove('left-container-form-validation-mess-inValid')
    notValidMessCountry.classList.add('left-container-form-validation-mess-valid')
    el.innerHTML = mess;
}
document.querySelector('.left-container-form-btn').onclick = function(e) {
    e.preventDefault();
    if (!validate(regLetters, inpCity.value)) {
        notValid(inpCity, notValidMessCity, "Enter your data!!!");
    } else { valid(inpCity, notValidMessCity, "") }
}

function notValid(inp, el, mess) {
    notValidMessCity.classList.add('left-container-form-validation-mess-inValid')
    el.innerHTML = mess;
}

function valid(inp, el, mess) {
    notValidMessCity.classList.remove('left-container-form-validation-mess-inValid')
    notValidMessCity.classList.add('left-container-form-validation-mess-valid')
    el.innerHTML = mess;
}
document.querySelector('.left-container-form-btn').onclick = function(e) {
    e.preventDefault();
    if (!validate(regLetters, inpStreet.value)) {
        notValid(inpStreet, notValidMessStreet, "Enter your data!!!");
    } else { valid(inpStreet, notValidMessStreet, "") }
}

function notValid(inp, el, mess) {
    notValidMessStreet.classList.add('left-container-form-validation-mess-inValid')
    el.innerHTML = mess;
}

function valid(inp, el, mess) {
    notValidMessStreet.classList.remove('left-container-form-validation-mess-inValid')
    notValidMessStreet.classList.add('left-container-form-validation-mess-valid')
    el.innerHTML = mess;
}
document.querySelector('.left-container-form-btn').onclick = function(e) {
    e.preventDefault();
    if (!validate(regLetters, inpHouse.value)) {
        notValid(inpHouse, notValidMessHouse, "Enter your data!!!");
    } else { valid(inpHouse, notValidMessHouse, "") }
}

function notValid(inp, el, mess) {
    notValidMessHouse.classList.add('left-container-form-validation-mess-inValid')
    el.innerHTML = mess;
}

function valid(inp, el, mess) {
    notValidMessHouse.classList.remove('left-container-form-validation-mess-inValid')
    notValidMessHouse.classList.add('left-container-form-validation-mess-valid')
    el.innerHTML = mess;
}
document.querySelector('.left-container-form-btn').onclick = function(e) {
    e.preventDefault();
    if (!validate(regLetters, inpApart.value)) {
        notValid(inpApart, notValidMessApart, "Enter your data!!!");
    } else { valid(inpApart, notValidMessApart, "") }
}

function notValid(inp, el, mess) {
    notValidMessApart.classList.add('left-container-form-validation-mess-inValid')
    el.innerHTML = mess;
}

function valid(inp, el, mess) {
    notValidMessApart.classList.remove('left-container-form-validation-mess-inValid')
    notValidMessApart.classList.add('left-container-form-validation-mess-valid')
    el.innerHTML = mess;
}