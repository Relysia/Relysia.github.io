window.onload = function () {
// Change Button Position
  var changePosition = document.querySelector('#flip-flop')
  changePosition.addEventListener('click', switchPosition)

  function switchPosition() {
    if (this.parentNode.style.textAlign != "right") {
      this.parentNode.style.textAlign = "right"
      this.innerHTML = "Go Left!"
    }
    else {
      this.parentNode.style.textAlign = "left"
      this.innerHTML = "Go Right!"
    }
  }

// Change Button Color
  var changeColor = document.querySelector('#change-color')
  changeColor.addEventListener('click', switchColor)

  function switchColor() {
    if (this.style.backgroundColor != "red") {
      this.style.backgroundColor = "red"
    }
    else {
      this.style.backgroundColor = ""
    }
  }

// Change Neighbour Color
  var changeSibling = document.querySelector('#change-neighbour-color')
  changeSibling.addEventListener('click', setSiblingColor)

  function setSiblingColor() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16)
    this.nextElementSibling.style.backgroundColor = "#" + randomColor
    console.log(randomColor)
  }

// Click Counter
  var counter = document.querySelector('#count')
  counter.addEventListener('click', clickCount)

  function clickCount() {
    this.innerHTML++
  }
}