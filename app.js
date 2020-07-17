const url = 'http://www.nokeynoshade.party/api/queens/all'
const starQuotes = {
  124: 'As an Aries, you are represented by the ram. You love to be number 1. As a passionate person, you are known for your bold and ambitious nature. Your legendary short temper is a result of your hatred towards exhaustive details and unnecessary nuisances. Be careful of your "think-after-you-leap" mentality as it could land you in hot water.  Like Miss Vanjie, you too are known to be carefree and someone who lives life to their fullest when not in rage mode. Get these cookies!',
  109: 'As a Taurus, you are represented by the bull. Your hedonistic ways mean you are not one to skimp on comfort and luxury. But your taste for the finer things doesn’t mean you aren’t willing to put in the work to get them. Like Peppermint, you too have put in so much work to get where you are in life just to reach some stability. You are also known for your stubborn antics. Be careful not to let your bullheaded determination make you linger in unhealthy and unnecessary situations just to prove a point. No one is going to take this result from your cold, dead, manicured hands.',
  106: 'As a Gemini, you are represented by the cosmic twins. Much like Valentina, your natural duality can falsely be misinterpreted as two-faced. Most Geminis don’t have hidden agendas and are instead playful and inquisitive. Known as the social butterflies of the zodiac, Gemini are most happy when they are busy and running around. Communication is necessary for this sign. Be careful as your need for change may make you seem flighty and you might not have time to learn from your mistakes. ¡Escandalo!',
  73: 'As a Cancer, you are represented by the crab. You are very intuitive and sensitive to your environment. Much like Bianca Del Rio, you’re shielded by a hard, external shell. After some time, it is revealed Cancers are actually tender and emotional.  Cancers are nurturers. Take note that your attentive nurturing could be abused or blur the line with controlling behavior. Cancers tend to avoid conflict, but when necessary, they can pinch harshly right back. Be weary of their wrath. Not today Satan! Not today!',
  54: 'As a Leo, you are represented by the lion. Vivacious, theatrical, and passionate, you are known to celebrate being in the spotlight. Your diva-energy leads you to a dramatic life filled with the finer things. Your loyalty and consistency knows no bounds. Don’t let your ego, jealousy, or pride get in the way when you are feeling eclipsed by someone else. Like Alyssa Edwards, you are a fearless optimist who refuses to accept failure. You are also a lovely fourth alternate in the order of the astrological signs.',
  31: "As a Virgo, you are represented by the goddess of wheat and agriculture.  You are known for your practical, logical, and  systematic approach to life, and are a true perfectionist at heart. Much like Manila Luzon, you're known for your well put together image that has had every detail planned out. Be careful in letting that meticulousness get in the way of yourself and how you perceive others. Don’t be a Sprepper!",
  111: 'As a Libra, you are represented by the scales.  You are obsessed with balance and harmony. Much like Sasha Velour, you are also known for admiration of high art, intellectualism, and connoisseurship. As a natural people’s person, be weary of your sense of self and seeking attention from the wrong people. Trust your gut more often as Libras are also known for their indecisiveness. Be the strange you wish to see in the world!',
  139: 'As a Scorpio, you are represented by the scorpion. Wow, are you misunderstood. Just like Yvie Oddly, you are seen as a dark and brooding figure with no heart. Since you are a water sign, this is not the case. Life is a game of chess for Scorpios as these signs plot tirelessly to always stay one step ahead. Your enigma and sex appeal make you mysterious and irresistible. Be careful not to let your power-hungry side take advantage of your actions are you can be seen as manipulative and controlling. HUEHUEHUEHUE.',
  82: 'As a Sagittarius, you are represented by the archer.  Your quench for life cannot be satisfied. Your wanderlust makes you naturally magnetic. Much like Trixie Mattel, your infectious laughter mixed with your wit are alluring to all.  It’s no wonder Sagittarius are known as the comedian of the zodiac. Though you may know a lot, be careful not to come across as pretentious or arrogant. Don’t let your desire for change also get in the way of your personal relationships. Hopefully you’ll be a winner winner, chicken… dinner.',
  44: 'As a Capricorn, you are represented by the mythical sea goat. If someone were to look into a dictionary and look up “work-horse” they would find a picture of Chad Micheals – and you! Be careful not to let your unwavering inner fortitude and focus be confused for being cold and unemotional. At least your close friends and family know you truly love to party! Your natural leader tendencies will lead to much success, just like Chad Micheals. Do you believe in life after love?',
  99: 'As an Aquarius, you are represented by the water bearer. You are the most humanitarian of the signs. With “power to the people” resonating in your head, you aspire to change the world for the best. You’re known for your despise of authority and everything conventional (looking at you Lucian Piane). Like Bob the Drag Queen, you are seen as a big thinker; however, take care not to become so focused on implementing widespread reform that you neglect your friends and family. Walk into your life purse first!',
  58: "As a Pisces, you are represented by two fish swimming in opposite directions. Those fish represent the constant division of Pisces's attention between fantasy and reality. Much like Alaska, your emotions can swallow you if you aren’t careful. You can slay the competition, but one bad day and you turn into a brat. Your imagination knows no bounds. You are artistic, kind, and gentle. Be careful not to run away from your problems as you tend to do. Willful ignorance won't make your problems disappear. Put on your trash-bag gown and say “Hieeeeeeeeeeee” to the world!"
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
  document.querySelector('#enter-info-here').append(img)

  const youAre = document.createElement('h1')
  youAre.innerText = `You are: ${name}`
  document.querySelector('#enter-info-here').append(youAre)

  const cosmicQuote = document.createElement('h3')
  cosmicQuote.innerText = `Your Cosmic Quote: "${quote.replace("fucking", "f***ing")}"`
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