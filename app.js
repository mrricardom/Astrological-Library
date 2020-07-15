const url = 'http://www.nokeynoshade.party/api/queens/all'
const starQuotes = {
  30: 'blah',
  109: 'blah',
  106: 'blah',
  73: 'blah',
  54: 'blah',
  31: 'blah',
  111: 'blah',
  139: 'As a Scorpio you are represented by the scorpion. Wow are you misunderstood. Much like Yvie Oddly, you are seen as a dark and brooding figure with no heart. Since you are a water sign that is not the case. Life is a game of chess for Scorpio as these calculating signs are plotting to get one step ahead of everyone else. Your enigma and sex appeal make you mysterious and irresistible. Be careful not to let your power-hungry side take advantage of your actions are you can be seen as manipulative and controlling. HUEHUEHUEHUE.',
  82: 'As a Sagittarius you are represented by the archer.  Your quench for life cannot be satisfied. Your wanderlust makes you naturally magnetic. Much like Trixie Mattel, your infectious laughter mixed with your wit are alluring to all.  It’s no wonder Sagittarius are known as the comedian of the zodiac. Though you may know a lot, be careful not to come across as pretentious or arrogant. Don’t let your desire for change also get in the way of your personal relationships. Hopefully you’ll be a winner winner, chicken… dinner.',
  44: 'As a Capricorn you are represented by the mythical sea goat. If someone were to look into a dictionary and searched up “work-horse” they would find a picture of Chad Micheals and you. Be careful not to let your unwavering inner fortitude and focus be confused for being cold and unemotional. At least your close friends and family know you truly love to party! Your natural leader tendencies will lead to success much like Chad Micheals. Do you believe in life after love?',
  99: 'As an Aquarius you are represented by the water bearer. You are the most humanitarian of the signs. With “power to the people” resonating in your head, you aspire to change the world for the best. You’re known for your despise towards authority and everything that represents conventionality (looking at you Lucian Piane). Like Bob the Drag Queen, you are seen as a big thinker; however, you can also become so focused on implementing widespread reform that you can neglect your family and friends, gaining a reputation for being aloof and distant in relationships. Walk into your life purse first!',
  58: "As a Pisces you are represented by two fish swimming in opposite directions. Those fish represent the constant division of Pisces's attention between fantasy and reality. Much like Alaska, your emotions can swallow you if you aren’t careful. You could slay the competition, but one bad day and you turn into a brat. Your imagination knows no bounds. You are artistic, kind, and gentle. Be careful not to run away from your problems as you tend to do. Willful ignorance won't make your problems disappear. Put on your trash-bag gown and say “Hieeeeeeeeeeee” to the world!"
}

const getDragQueen = async () => {
  try {
    const response = await axios.get(url) //getting the data pull
    const select = document.querySelector('#cosmic-choices')// going into the html and grabbing all select options under class cosmic-choices
    const selectedOption = select.selectedOptions[0]// once grabbed, using selectedOptions property to choose the selected options in the dropdown menu, in this case the first and only selected option
    console.log(selectedOption.dataset)
    const queenIndex = selectedOption.dataset.index // here I used data-index in html to assign it an index number; when you put data infront of it you can use the dataset property. Here i am grabbing the assigned number
    const queen = response.data[queenIndex]// here i'm calling the datapull, clicking into the data property, and then using the assigned number out of queenIndex

    removeChoice()
    dragQueenInfo(queen, queenIndex)

  }
  catch (error) {
    console.log(`Your error is ${error}`)
  }
}

getDragQueen()

const dragQueenInfo = (queen, queenIndex) => {
  const name = queen.name
  const image = queen.image_url
  const quote = queen.quote
  const flavorText = starQuotes[queenIndex]


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
  starText.innerText = 'Shared Attributes: ' + flavorText
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