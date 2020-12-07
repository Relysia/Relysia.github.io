window.onload = function () {
  // CHANGE CHARACTER NAME
  var inputName = document.querySelector('#name')
  var resultName = document.querySelector('#name-result')

  function updateName() {
    if (this.value == "") {
      resultName.innerHTML = "Choose name"
    }
    else {
      resultName.innerHTML = this.value;
    }
  }

  inputName.addEventListener('input', updateName)

  // CHANGE GENDER
  var selectGender = document.querySelector('#gender-select')
  var resultGender = document.querySelector('#gender-result')
  var imageGender = document.querySelector('#gender-image')

  function updateGender() {
    if (this.value == "male") {
      resultGender.innerHTML = this.value
      imageGender.className = "fas fa-male"
    }
    else {
      resultGender.innerHTML = this.value
      imageGender.className = "fas fa-female"
    }
  }

  selectGender.addEventListener('change', updateGender)

  // CHANGE RACE
  var selectRace = document.querySelector('#race-select')
  var resultRace = document.querySelector('#race-result')
  var imageRace = document.querySelector('#race-image')
  // RACE IMAGE ARRAY
  var raceArray = ['img/race/human.png', 'img/race/elf.png', 'img/race/dwarf.png', 'img/race/orc.png']

  function updateRace() {
    if (this.value == "human") {
      resultRace.innerHTML = this.value
      imageRace.src = raceArray[0]
    }
    else if (this.value == "elf") {
      resultRace.innerHTML = this.value
      imageRace.src = raceArray[1]
    }
    else if (this.value == "dwarf") {
      resultRace.innerHTML = this.value
      imageRace.src = raceArray[2]
    }
    else {
      resultRace.innerHTML = this.value
      imageRace.src = raceArray[3]
    }
  }

  selectRace.addEventListener('change', updateRace)

  // CHANGE CLASS
  var selectClass = document.querySelector('#class-select')
  var resultClass = document.querySelector('#class-result')
  var imageClass = document.querySelector('#class-image')
  // CLASS IMAGE ARRAY
  var classArray = ['img/class/warrior.png', 'img/class/mage.png', 'img/class/assassin.png', 'img/class/druid.png']

  function updateClass() {
    if (this.value == "warrior") {
      resultClass.innerHTML = this.value
      imageClass.src = classArray[0]
    }
    else if (this.value == "sorcerer") {
      resultClass.innerHTML = this.value
      imageClass.src = classArray[1]
    }
    else if (this.value == "assassin") {
      resultClass.innerHTML = this.value
      imageClass.src = classArray[2]
    }
    else {
      resultClass.innerHTML = this.value
      imageClass.src = classArray[3]
    }
  }

  selectClass.addEventListener('change', updateClass)
}