//SHORTER VALIDATION FUNCTION
// Name Testing
var regName = /^[a-zA-Z ]{2,30}$/
validation('#name', '#nameError', regName, 'Wrong name format!')

// Email Testing
var regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
validation('#email', '#emailError', regEmail, 'Wrong email format!')

// Validation function
function validation(inputId, errorId, testing, errorText) {
    var inputElement = document.querySelector(inputId)
    var errorElement = document.querySelector(errorId)

    function validInputFormat() {
        if (inputElement.value.match(testing)) {
            inputElement.setAttribute = ("style", "background-color: ''; border-color: #37e44e; color: black;")
            errorElement.textContent = ""
        }
        else {
            inputElement.setAttribute = ("style", "background-color: #d43434de; border-color: ''; color: white;")
            inputElement.value = ""
            errorElement.textContent = errorText
        }
    }

    inputElement.addEventListener('blur', validInputFormat)    
}

// Get the Current Date
var today = new Date();

var year = today.getFullYear()
var month = today.getMonth() + 1
month = ("0" + month).slice(-2)
var day = today.getDate()
day = ("0" + day).slice(-2)
var currentDate = year + '-' + month + '-' + day

// Get the Current Time
var hours = today.getHours() + 1
hours = ("0" + hours).slice(-2)
var minutes = today.getMinutes()
minutes = ("0" + minutes).slice(-2)
var currentTime = hours + ":" + minutes

var timeNumber = parseInt(currentTime)

// Date Validation
var dateInput = document.querySelector("input[type='date']")
dateInput.setAttribute("min", currentDate)
var dateError = document.querySelector('#dateError')

function validDate() {
    if (dateInput.value >= currentDate) {
        dateInput.style.cssText = "background-color: ''; border-color: #37e44e; color: black;"
        dateError.textContent = ""
    }
    else {
        dateInput.style.cssText = "background-color: #d43434de; border-color: ''; color: white;"
        dateError.textContent = "Date can't be earlier than today!"
    }
}

dateInput.addEventListener('blur', validDate)

// Time Validation
var timeInput = document.querySelector("input[type='time']")
var timeError = document.querySelector('#timeError')

function timeChange() {
    if (dateInput.value == currentDate) {
        timeInput.setAttribute("min", currentTime)
    }
    else {
        timeInput.setAttribute("min", "09:00")
    }
}

dateInput.addEventListener("change", timeChange)

function validTime() {
    if (parseInt(timeInput.value) >= parseInt(timeInput.attributes.min.value)) {
        timeInput.style.cssText = "background-color: ''; border-color: #37e44e; color: black;"
        timeError.textContent = ""
    }
    else {
        timeInput.style.cssText = "background-color: #d43434de; border-color: ''; color: white;"
        timeError.textContent = "Time must be 1 hour later, than current hour"
    }
}

timeInput.addEventListener('blur', validTime)

// Number Validation
var numberInput = document.querySelector("input[type='number']")
var numberError = document.querySelector('#numberError')

function validNumber() {
    if (parseInt(numberInput.value) > 1 && parseInt(numberInput.value) < 11) {
        numberInput.style.cssText = "background-color: ''; border-color: #37e44e; color: black;"
        numberError.textContent = ""
    }
    else {
        numberInput.style.cssText = "background-color: #d43434de; border-color: ''; color: white;"
        numberError.textContent = "Choose a number between 2-10"
    }
}

numberInput.addEventListener('blur', validNumber)

// Reset Form after 5 Minutes
setTimeout(function () {
    document.querySelector('#form').reset();
}, 300000);