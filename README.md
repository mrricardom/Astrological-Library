# Project Overview

## Project Name

The Astrological Library

## Project Description

Through a simple drop-down menu you too can find out which RuPaul's Drag Race Queen you are based on your Astrological sign. Impress your friends, family, lovers, etc. as you whip out the name of your cosmic soul drag-sister. A picture, a quote, and a decription of your shared attributes will be displayed. Start your engines, because the Astrological Library is OPEN!  

## API and Data Sample
[All Drag Queens API](http://www.nokeynoshade.party/api/queens/all)

```json
 {
        "id": 57,
        "name": "Ivy Winters",
        "winner": false,
        "missCongeniality": true,
        "image_url": "http://www.nokeynoshade.party/images/ivy-winters.jpg",
        "quote": "Hey ladies! Oh my god!"
    },
    {
        "id": 58,
        "name": "Alyssa Edwards",
        "winner": false,
        "missCongeniality": false,
        "image_url": "http://www.nokeynoshade.party/images/alyssa-edwards.jpg",
        "quote": "BACKROLLS?!?!"
    },
    {
        "id": 59,
        "name": "Coco Montrese",
        "winner": false,
        "missCongeniality": false,
        "image_url": "http://www.nokeynoshade.party/images/coco-montrese.jpg",
        "quote": "I'm not joking bitch!"
    }
```

## Wireframes

[Project Ideal display](https://i.imgur.com/a3wSB7V.png)

 #### MVP 
My Project will include the following MVP:

- A fully functional Drop Down Menu
- Every click will result in an assigned Drag Queen based on your astrological sign
- A quote, a picture of the Queen, and a description of similar traits will appear after each choice


#### PostMVP  
Some potential PostMVP goals include:
- After each option, the cache will clear allowing the user to insert a new horoscope sign
- Add a function of choosing Moon and Rising signs
- Add additional CSS to the Drop Down Menu 

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|July 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|July 13| Project Approval | Complete
|July 13| Attach the API and make sure that elements are appended to the DOM; Create basic HTMl and CSS Frame | Complete
|July 14| Major coding day - making sure all of the body is created | Complete
|July 15| MVP | Complete
|July 16| Final CSS touches and PMVP | Complete
|July 17| Presentations | Incomplete

## Priority Matrix

[Priority Matrix](https://imgur.com/a/tDywqDp)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Project Approval | H | .5hrs | .5hrs | .5hrs |
| API Research, reaching API, checking it is functional | H | 2hrs | 2.5hrs | 2.5hrs |
| Making sure API elements append to HTML | H | 3hrs | 3.5 hrs | 3.5hrs |
| Linking JS file and CSS file | H | .5hrs | .45hrs | .45hrs |
| Basic HTML & CSS | M | 2hrs | 1.5 hrs | 1.5hrs |
| Dropdown Research | M | .5hrs | 1hr | 1hr |
| Working on the Dropdown Menu | H | 1.5hrs | 1hr | 1hr |
| Assign each choice with a Queen(result) | H | 3hrs | 3hrs | 3hrs |
| HTML shared astrological traits | H | 2hrs | 3.5hrs | 3.5hrs |
| Make sure the image, quote, and name is displayed with flexbox | H | 3hrs | 3.5hrs | 3.5hrs |
| Work on background image, and GIF and other CSS | H | 3hrs | 3hrs | 3hrs |
| Adding Moon and Rising signs | L | 3hrs| N/A | N/A |
| Adding reset function | L | 1hr| .5hrs | .5hrs |
| CSS and Dropdown editing | L | 2hrs| 3hrs | 3hrs |
| General Debugging | H | 1hr | 3hrs | 3hrs |
| Footer | H | .5hrs | 1hr | 1hr |
| MediaQuery instalation | H | 3hrs | 4hrs | 4hrs |
| Word filter | L | 1hr | .5hrs | .5hrs |

| Total | N/A | 32.5hrs| 35.45hrs | 35.45hrs|

## Code Snippet


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

const dragQueenInfo = (queen, queenIndex) => {
  const name = queen.name
  const image = queen.image_url
  const quote = queen.quote
  const flavorText = starQuotes[queenIndex]
```

## Change Log
I orginally had the Queen's image displaying left and the information to the right of it in column order after the clicking of the drop-down. After some design choices were made, I decided to do it all as a flexbox column. It was more visually enticing. I originally had the gif of RuPaul above the descriptive text, however, the gif looked better above the drop-down menu. After playing around with my code and javascript, I found it very difficult to have 3 seperate functions running at once so I scrapped the ideal of adding the moon and rising signs.
