const url = 'http://www.nokeynoshade.party/api/queens/all'

const getDragQueen = async () => {
  try {
    const response = await axios.get(url) //getting the data pull
    const select = document.querySelector('#cosmic-choices')// going into the html and grabbing all select options under class cosmic-choices
    const selectedOption = select.selectedOptions[0]// once grabbed, using selectedOptions property to choose the selected options in the dropdown menu, in this case the first and only selected option
    console.log(selectedOption.dataset)
    const queenIndex = selectedOption.dataset.index // here I used data-index in html to assign it an index number; when you put data infront of it you can use the dataset property. Here i am grabbing the assigned number
    const queen = response.data[queenIndex]// here i'm calling the datapull, clicking into the data property, and then using the assigned number out of queenIndex

    removeChoice()
    dragQueenInfo(queen)

  }
  catch (error) {
    console.log(`Your error is ${error}`)
  }
}

getDragQueen()

const dragQueenInfo = (queen) => {
  const name = queen.name
  const image = queen.image_url
  const quote = queen.quote

  const img = document.createElement('img')
  img.setAttribute('src', image)
  img.style.width = '250px'
  img.style.height = '300px'
  document.querySelector('#enter-info-here').append(img)

  const youAre = document.createElement('h1')
  youAre.innerText = `You are: ${name}`
  document.querySelector('#enter-info-here').append(youAre)

  const cosmicQuote = document.createElement('h3')
  cosmicQuote.innerText = `Your Cosmic Quote: "${quote}"`
  document.querySelector('#enter-info-here').append(cosmicQuote)

  const starText = document.createElement('p')
  starText.innerText = 'you are a ram'
  document.querySelector('#enter-info-here').append(starText)


}

const buttonClick = document.querySelector('form')
buttonClick.addEventListener('submit', value)

const result = buttonClick
result.addEventListener('focus', getDragQueen)

function value(e) {
  e.preventDefault()
  const astroValue = document.querySelector('#cosmic-choices').value
  console.log(astroValue)
  getDragQueen(astroValue)
}


function removeChoice() {
  const oldChoice = document.querySelector('#enter-info-here')
  while (oldChoice.lastChild) {
    oldChoice.removeChild(oldChoice.lastChild)
  }
}