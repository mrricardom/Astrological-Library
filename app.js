const url = 'http://www.nokeynoshade.party/api/queens/all'

const getDragQueen = async () => {
  try {
    const response = await axios.get(url)

    const ariesQ = response.data[30]
    const taurusQ = response.data[109]
    const geminiQ = response.data[106]
    const cancerQ = response.data[73]
    const leoQ = response.data[54]
    const virgoQ = response.data[31]
    const libraQ = response.data[111]
    const scorpioQ = response.data[139]
    const sagittariusQ = response.data[82]
    const capricornQ = response.data[44]
    const aquariusQ = response.data[99]
    const piscesQ = response.data[58]

    dragQueenInfo(piscesQ)

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


function value(e) {
  e.preventDefault()
  const astroValue = document.querySelector('#cosmic-choices').value
  console.log(astroValue)
}


function removeChoice() {
  const oldChoice = document.querySelector('#enter-info-here')
  while (oldChoice.lastChild) {
    oldChoice.removeChild(oldChoice.lastChild)
  }
}