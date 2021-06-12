'use strict'

const regPhone = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
const regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
const regNumbers = /[0-9]/;
const regLetters = /[A-Za-zA-Яа-яЁё]/;

const inp = document.querySelector('.left-container-form-input');
const notValidMess = document.querySelector('.left-container-form-validation-mess');



document.querySelector('.left-container-form-btn').onclick = function(e) {
    e.preventDefault();
    if (!validate(regNumbers, inp.value)) {
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

left - container - form - validation - mess - inValid