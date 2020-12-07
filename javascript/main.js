let htmlLink = document.querySelector('#html')
let cssLink = document.querySelector('#css')
let sassLink = document.querySelector('#sass')
let jsLink = document.querySelector('#js')

let leftArrow = document.querySelector('#left-icon')
let rightArrow = document.querySelector('#right-icon')
leftArrow.classList.add('hide')
rightArrow.classList.add('hide')

//DEFAULT LAYOUT
function defaultLayout() {
  htmlLink.textContent = 'HTML'
  setTimeout(function () {
    htmlLink.setAttribute('href', '#')
  }, 100)
  htmlLink.setAttribute('id', 'html')
  cssLink.textContent = 'CSS'
  setTimeout(function () {
    cssLink.setAttribute('href', '#')
  }, 100)
  cssLink.setAttribute('id', 'css')
  sassLink.textContent = 'SASS'
  setTimeout(function () {
    sassLink.setAttribute('href', '#')
  }, 100)
  sassLink.setAttribute('id', 'sass')
  jsLink.textContent = 'JAVASCRIPT'
  setTimeout(function () {
    jsLink.setAttribute('href', '#')
  }, 100)
  jsLink.setAttribute('id', 'js')
  htmlLink.classList.remove('hide-content')
  cssLink.classList.remove('hide-content')
  sassLink.classList.remove('hide-content')
  jsLink.classList.remove('hide-content')
  leftArrow.classList.add('hide')
  rightArrow.classList.add('hide')
}

leftArrow.addEventListener('click', defaultLayout)

// HTML SWITCH LAYOUT
function htmlSwitch() {
  htmlLink.textContent = 'Plant a Tree'
  setTimeout(function () {
    htmlLink.setAttribute('href', 'html/tree/plantatree.html')
  }, 100);
  htmlLink.setAttribute('id', 'plant-a-tree')
  cssLink.textContent = 'Grandmas Recipes'
  setTimeout(function () {
    cssLink.setAttribute('href', 'html/recipe/index.html')
  }, 100)
  cssLink.setAttribute('id', 'grandmas-recipes')
  sassLink.classList.add('hide-content')
  jsLink.classList.add('hide-content')
  leftArrow.classList.remove('hide')
}

htmlLink.addEventListener('click', htmlSwitch)

// CSS SWITCH LAYOUT
function cssSwitch() {
  htmlLink.textContent = 'CSS Layouts'
  setTimeout(function () {
    htmlLink.setAttribute('href', 'css/layouts/index.html')
  }, 100)
  htmlLink.setAttribute('id', 'css-layouts')
  cssLink.textContent = 'Super Center Title'
  setTimeout(function () {
    cssLink.setAttribute('href', 'css/center/index.html')
  }, 100)
  cssLink.setAttribute('id', 'center-title')
  sassLink.textContent = 'Blog Page'
  setTimeout(function () {
    sassLink.setAttribute('href', 'css/catblog/home.html')
  }, 100)
  sassLink.setAttribute('id', 'blog-page')
  jsLink.textContent = 'Responsive Rainbow'
  setTimeout(function () {
    jsLink.setAttribute('href', 'css/rainbow/index.html')
  }, 100)
  jsLink.setAttribute('id', 'rainbow')
  leftArrow.classList.remove('hide')
}

cssLink.addEventListener('click', cssSwitch)

// SASS SWITCH
function sassSwitch() {
  htmlLink.textContent = 'SAS Space'
  setTimeout(function () {
    htmlLink.setAttribute('href', 'sass/sas/index.html')
  }, 100)
  htmlLink.setAttribute('id', 'sas-space')
  cssLink.textContent = 'Landing for a Cause'
  setTimeout(function () {
    cssLink.setAttribute('href', 'sass/landing/index.html')
  }, 100)
  cssLink.setAttribute('id', 'landing')
  sassLink.textContent = 'Travel Agency'
  setTimeout(function () {
    sassLink.setAttribute('href', 'sass/travel/index.html')
  }, 100)
  sassLink.setAttribute('id', 'travel-agency')
  jsLink.classList.add('hide-content')
  leftArrow.classList.remove('hide')
}

sassLink.addEventListener('click', sassSwitch)

// JAVASCRIPT SWITCH
function jsSwitch() {
  htmlLink.textContent = 'Multi Color Buttons'
  setTimeout(function () {
    htmlLink.setAttribute('href', 'js/buttons/index.html')
  }, 100)
  htmlLink.setAttribute('id', 'buttons')
  cssLink.textContent = 'Create Your Character'
  setTimeout(function () {
    cssLink.setAttribute('href', 'js/character/index.html')
  }, 100)
  cssLink.setAttribute('id', 'character')
  sassLink.textContent = 'Book a Table'
  setTimeout(function () {
    sassLink.setAttribute('href', 'js/booking/index.html')
  }, 100)
  sassLink.setAttribute('id', 'booking')
  jsLink.classList.add('hide-content')
  leftArrow.classList.remove('hide')
}

jsLink.addEventListener('click', jsSwitch)