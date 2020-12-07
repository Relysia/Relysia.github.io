// ELEMENT VARIABLES
// GRID CONTENT
let htmlLink = document.querySelector('#html')
let cssLink = document.querySelector('#css')
let sassLink = document.querySelector('#sass')
let jsLink = document.querySelector('#js')

// LEFT AND RIGHT ARROW
let leftArrow = document.querySelector('#left-icon')
let rightArrow = document.querySelector('#right-icon')
leftArrow.classList.add('hide')

// BASIC FUNCTIONS
// CHANGE AN ELEMENT CONTENT
function changeContent(element, title, link, idName) {
  element.textContent = title
  setTimeout(function () {
    element.setAttribute('href', link)
  }, 100)
  element.setAttribute('id', idName)
}
// HIDE ONE ELEMENT
function hideElement(element, className) {
  element.classList.add(className)
}
// SHOW ALL ELEMENT

// REMOVE HIDE FROM ONE ELEMENT
function removeHide(element, className) {
  element.classList.remove(className)
}
// REMOVE HIDE FROM EVERY ELEMENT
function removeAll(element1, element2, element3, element4, className) {
  removeHide(element1, className)
  removeHide(element2, className)
  removeHide(element3, className)
  removeHide(element4, className)
}

//FIRST PAGE LAYOUT
function firstPage() {
  changeContent(htmlLink, 'HTML', '#', 'html')
  changeContent(cssLink, 'CSS', '#', 'css')
  changeContent(sassLink, 'SASS', '#', 'sass')
  changeContent(jsLink, 'JAVASCRIPT', '#', 'js')
  changeContent(illustratorLink, 'ILLUSTRATOR', '#', 'illustrator')
  removeAll(htmlLink, cssLink, sassLink, jsLink, 'hide-content')
  hideElement(illustratorLink, 'hide-content')
  leftArrow.className = "fas fa-home"
  hideElement(leftArrow, 'hide')
  removeHide(rightArrow, 'hide')
}
leftArrow.addEventListener('click', firstPage)

// HTML SWITCH LAYOUT
function htmlSwitch() {
  changeContent(htmlLink, 'Plant a Tree', 'html/tree/plantatree.html', 'plant-a-tree')
  changeContent(cssLink, 'Grandmas Recipes', 'html/recipe/index.html', 'grandmas-recipes')
  hideElement(sassLink, 'hide-content')
  hideElement(jsLink, 'hide-content')
  removeHide(leftArrow, 'hide')
  hideElement(rightArrow, 'hide')
}
htmlLink.addEventListener('click', htmlSwitch)

// CSS SWITCH LAYOUT
function cssSwitch() {
  changeContent(htmlLink, 'CSS Layouts', 'css/layouts/index.html', 'css-layouts')
  changeContent(cssLink, 'Super Center Title', 'css/center/index.html', 'center-title')
  changeContent(sassLink, 'Blog Page', 'css/catblog/home.html', 'blog-page')
  changeContent(jsLink, 'Responsive Rainbow', 'css/rainbow/index.html', 'rainbow')
  removeHide(leftArrow, 'hide')
  hideElement(rightArrow, 'hide')
}
cssLink.addEventListener('click', cssSwitch)

// SASS SWITCH
function sassSwitch() {
  changeContent(htmlLink, 'SAS Space', 'sass/sas/index.html', 'sas-space')
  changeContent(cssLink, 'Landing for a Cause', 'sass/landing/index.html', 'landing')
  changeContent(sassLink, 'Travel Agency', 'sass/travel/index.html', 'travel-agency')
  hideElement(jsLink, 'hide-content')
  removeHide(leftArrow, 'hide')
  hideElement(rightArrow, 'hide')
}
sassLink.addEventListener('click', sassSwitch)

// JAVASCRIPT SWITCH
function jsSwitch() {
  changeContent(htmlLink, 'Multi Color Buttons', 'js/buttons/index.html', 'buttons')
  changeContent(cssLink, 'Create Your Character', 'js/character/index.html', 'character')
  changeContent(sassLink, 'Book a Table', 'js/booking/index.html', 'booking')
  hideElement(jsLink, 'hide-content')
  removeHide(leftArrow, 'hide')
  hideElement(rightArrow, 'hide')
}
jsLink.addEventListener('click', jsSwitch)

// SECOND PAGE LAYOUT
let illustratorLink = document.querySelector('#illustrator')

function secondPage() {
  hideElement(htmlLink, 'hide-content')
  hideElement(cssLink, 'hide-content')
  hideElement(sassLink, 'hide-content')
  hideElement(jsLink, 'hide-content')
  leftArrow.className = "fas fa-chevron-circle-left"
  hideElement(rightArrow, 'hide')
  removeHide(illustratorLink, 'hide-content')
}
rightArrow.addEventListener('click', secondPage)

// ILLUSTRATOR SWITCH
function illustratorSwitch() {
  removeAll(htmlLink, cssLink, sassLink, jsLink, 'hide-content')
  hideElement(htmlLink, 'hide-content')
  changeContent(illustratorLink, 'Fancy Fonts', 'illustrator/fancy/index.html', 'fancy')
  changeContent(cssLink, 'Simple Shape', 'illustrator/shape/index.html', 'shape')
  changeContent(sassLink, 'Interactive Logo', 'illustrator/logo/logo.html', 'logo')
  hideElement(jsLink, 'hide-content')
  leftArrow.className = "fas fa-home"
}

illustratorLink.addEventListener('click', illustratorSwitch)