/* const tryout = [
    {
      'position': topLeft,
      'title': 'HTML',
      'href': '#',
      'idName': 'html',
      'subCategory': [
        {
          'position': topLeft,
          'title': 'Plant a Tree',
          'href': 'html/tree/plantatree.html',
          'idName': 'plant-a-tree'
        }
      ]
    }
  ] */
var topLeft = document.querySelector('#html')
var topRight = document.querySelector('#css')
var bottomLeft = document.querySelector('#sass')
var bottomRight = document.querySelector('#js')
var gridContainer = document.querySelector('.grid-container')

for (var data in dataCard) {
  element.textContent = title
  setTimeout(function () {
    element.setAttribute('href', link)
  }, 100)
  element.setAttribute('id', idName)
}


const dataCard = [
    {
      "title": "topLeft",
      "year": 1975,
      "director": "Sidney Lumet",
      "duration": "2h 5min",
      "genre": [
        "Biography",
        "Crime",
        "Drama",
        "Thriller"
      ],
      "rate": 8
    },
    {
      "title": "Dead Poets Society",
      "year": 1989,
      "director": "Peter Weir",
      "duration": "2h 8min",
      "genre": [
        "Comedy",
        "Drama"
      ],
      "rate": 8
    }
  ]

  // VARIABLES
  // function createCard(element, title, link, idName) {
  //   let gridContainer = document.querySelector('.grid-container')
  //   let create = document.createElement('a')
  //   gridContainer.insertAdjacentElement('beforebegin', create)

  //   element.textContent = dataCard[title]
  //   setTimeout(function () {
  //     element.setAttribute('href', link)
  //   }, 100)
  //   element.setAttribute('id', idName)
  // }