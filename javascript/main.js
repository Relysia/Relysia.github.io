// ELEMENT VARIABLES
// GRID CONTENT
let topLeft = document.querySelector("#html");
let topRight = document.querySelector("#css");
let bottomLeft = document.querySelector("#sass");
let bottomRight = document.querySelector("#js");

// LEFT AND RIGHT ARROW
let leftArrow = document.querySelector("#left-icon");
let rightArrow = document.querySelector("#right-icon");
leftArrow.classList.add("hide");

// BASIC FUNCTIONS
// CHANGE AN ELEMENT CONTENT
function changeContent(element, title, link, idName) {
  element.textContent = title;
  setTimeout(function () {
    element.setAttribute("href", link);
  }, 100);
  element.setAttribute("id", idName);
}
// HIDE ONE ELEMENT
function hideElement(element, className) {
  element.classList.add(className);
}
// SHOW ALL ELEMENT

// REMOVE HIDE FROM ONE ELEMENT
function removeHide(element, className) {
  element.classList.remove(className);
}
// REMOVE HIDE FROM EVERY ELEMENT
function removeAll(element1, element2, element3, element4, className) {
  removeHide(element1, className);
  removeHide(element2, className);
  removeHide(element3, className);
  removeHide(element4, className);
}

//FIRST PAGE LAYOUT
function firstPage() {
  changeContent(topLeft, "HTML", "#", "html");
  changeContent(topRight, "CSS", "#", "css");
  changeContent(bottomLeft, "SASS", "#", "sass");
  changeContent(bottomRight, "JAVASCRIPT", "#", "js");
  changeContent(illustratorLink, "ILLUSTRATOR", "#", "illustrator");
  removeAll(topLeft, topRight, bottomLeft, bottomRight, "hide-content");
  hideElement(illustratorLink, "hide-content");
  leftArrow.className = "fas fa-home";
  hideElement(leftArrow, "hide");
  removeHide(rightArrow, "hide");
}
leftArrow.addEventListener("click", firstPage);

// HTML SWITCH LAYOUT
function htmlSwitch() {
  changeContent(
    topLeft,
    "Plant a Tree",
    "react/search/index.html",
    "plant-a-tree"
  );
  changeContent(
    topRight,
    "Grandmas Recipes",
    "html/recipe/index.html",
    "grandmas-recipes"
  );
  hideElement(bottomLeft, "hide-content");
  hideElement(bottomRight, "hide-content");
  removeHide(leftArrow, "hide");
  hideElement(rightArrow, "hide");
}
topLeft.addEventListener("click", htmlSwitch);

// CSS SWITCH LAYOUT
function cssSwitch() {
  changeContent(
    topLeft,
    "CSS Layouts",
    "css/layouts/index.html",
    "css-layouts"
  );
  changeContent(
    topRight,
    "Super Center Title",
    "css/center/index.html",
    "center-title"
  );
  changeContent(bottomLeft, "Blog Page", "css/catblog/home.html", "blog-page");
  changeContent(
    bottomRight,
    "Responsive Rainbow",
    "css/rainbow/index.html",
    "rainbow"
  );
  removeHide(leftArrow, "hide");
  hideElement(rightArrow, "hide");
}
topRight.addEventListener("click", cssSwitch);

// SASS SWITCH
function sassSwitch() {
  changeContent(topLeft, "SAS Space", "sass/sas/index.html", "sas-space");
  changeContent(
    topRight,
    "Landing for a Cause",
    "sass/landing/index.html",
    "landing"
  );
  changeContent(
    bottomLeft,
    "Travel Agency",
    "sass/travel/index.html",
    "travel-agency"
  );
  hideElement(bottomRight, "hide-content");
  removeHide(leftArrow, "hide");
  hideElement(rightArrow, "hide");
}
bottomLeft.addEventListener("click", sassSwitch);

// JAVASCRIPT SWITCH
function jsSwitch() {
  changeContent(
    topLeft,
    "Multi Color Buttons",
    "js/buttons/index.html",
    "buttons"
  );
  changeContent(
    topRight,
    "Create Your Character",
    "js/character/index.html",
    "character"
  );
  changeContent(bottomLeft, "Book a Table", "js/booking/index.html", "booking");
  hideElement(bottomRight, "hide-content");
  removeHide(leftArrow, "hide");
  hideElement(rightArrow, "hide");
}
bottomRight.addEventListener("click", jsSwitch);

// SECOND PAGE LAYOUT
let illustratorLink = document.querySelector("#illustrator");

function secondPage() {
  hideElement(topLeft, "hide-content");
  hideElement(topRight, "hide-content");
  hideElement(bottomLeft, "hide-content");
  hideElement(bottomRight, "hide-content");
  leftArrow.className = "fas fa-chevron-circle-left";
  hideElement(rightArrow, "hide");
  removeHide(illustratorLink, "hide-content");
}
rightArrow.addEventListener("click", secondPage);

// ILLUSTRATOR SWITCH
function illustratorSwitch() {
  removeAll(topLeft, topRight, bottomLeft, bottomRight, "hide-content");
  hideElement(topLeft, "hide-content");
  changeContent(
    illustratorLink,
    "Fancy Fonts",
    "illustrator/fancy/index.html",
    "fancy"
  );
  changeContent(
    topRight,
    "Simple Shape",
    "illustrator/shape/index.html",
    "shape"
  );
  changeContent(
    bottomLeft,
    "Interactive Logo",
    "illustrator/logo/logo.html",
    "logo"
  );
  hideElement(bottomRight, "hide-content");
  leftArrow.className = "fas fa-home";
}

illustratorLink.addEventListener("click", illustratorSwitch);
