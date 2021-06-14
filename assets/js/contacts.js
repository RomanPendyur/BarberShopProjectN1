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
const btnForm = document.querySelector('.left-container-form-btn');

btnForm.onclick = function(e) {
    e.preventDefault();
    if (!validate(regLetters, inp.value)) {
        notValidName(inp, notValidMess, "Invalid data entry format!!!");
    }
    if (validate(regLetters, inp.value)) { validName(inp, notValidMess, "") }
    if (!validate(regNumbers, inpEmail.value)) {
        notValidEmail(inpEmail, notValidMessEmaill, "Invalid data entry format!!!");
    }
    if (validate(regNumbers, inpEmail.value)) { validEmail(inpEmail, notValidMessEmaill, "") }
    if (!validate(regPhone, inpPhone.value)) {
        notValidPhone(inpPhone, notValidMessPhone, "Invalid data entry format!!!");
    }
    if (validate(regPhone, inpPhone.value)) { validPhone(inpPhone, notValidMessPhone, "") }
    if (!validate(regLetters, inpCountry.value)) {
        notValidCountry(inpCountry, notValidMessCountry, "Invalid data entry format!!!");
    }
    if (validate(regLetters, inpCountry.value)) { validCountry(inpCountry, notValidMessCountry, "") }
    if (!validate(regLetters, inpCity.value)) {
        notValidCity(inpCity, notValidMessCity, "Invalid data entry format!!!");
    }
    if (validate(regLetters, inpCity.value)) { validCity(inpCity, notValidMessCity, "") }
}

function validate(regex, inp) {
    return regex.test(inp);
}

function notValidName(inp, el, mess) {
    notValidMess.classList.add('left-container-form-validation-mess-inValid')
    el.innerHTML = mess;
}

function validName(inp, el, mess) {
    notValidMess.classList.remove('left-container-form-validation-mess-inValid')
    notValidMess.classList.add('left-container-form-validation-mess-valid')
    el.innerHTML = mess;
}

function notValidEmail(inp, el, mess) {
    notValidMessEmaill.classList.add('left-container-form-validation-mess-inValid')
    el.innerHTML = mess;
}

function validEmail(inp, el, mess) {
    notValidMessEmaill.classList.remove('left-container-form-validation-mess-inValid')
    notValidMessEmaill.classList.add('left-container-form-validation-mess-valid')
    el.innerHTML = mess;
}

function notValidPhone(inp, el, mess) {
    notValidMessPhone.classList.add('left-container-form-validation-mess-inValid')
    el.innerHTML = mess;
}

function validPhone(inp, el, mess) {
    notValidMessPhone.classList.remove('left-container-form-validation-mess-inValid')
    notValidMessPhone.classList.add('left-container-form-validation-mess-valid')
    el.innerHTML = mess;
}

function notValidCountry(inp, el, mess) {
    notValidMessCountry.classList.add('left-container-form-validation-mess-inValid')
    el.innerHTML = mess;
}

function validCountry(inp, el, mess) {
    notValidMessCountry.classList.remove('left-container-form-validation-mess-inValid')
    notValidMessCountry.classList.add('left-container-form-validation-mess-valid')
    el.innerHTML = mess;
}

function notValidCity(inp, el, mess) {
    notValidMessCity.classList.add('left-container-form-validation-mess-inValid')
    el.innerHTML = mess;
}

function validCity(inp, el, mess) {
    notValidMessCity.classList.remove('left-container-form-validation-mess-inValid')
    notValidMessCity.classList.add('left-container-form-validation-mess-valid')
    el.innerHTML = mess;
}