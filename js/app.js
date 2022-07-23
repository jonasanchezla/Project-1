const cardArray = [
    {
        name: "baseball",
        img: "images/Baseball.png",
    },
    {
        name: "basketball",
        img: "images/Basketball.png",
    },
    {
        name: "boxing",
        img: "images/Boxing.png",
    },
    {
        name: "football",
        img: "images/Football.png",
    },
    {
        name: "golf",
        img: "images/Golf.png",
    },
    {
        name: "soccer",
        img: "images/Soccer.png",
    },
    {
        name: "tennis",
        img: "images/Tennis.png",
    },
    {
        name: "volleyball",
        img: "images/Volleyball.png",
    },
    {
        name: "baseball",
        img: "images/Baseball.png",
    },
    {
        name: "basketball",
        img: "images/Basketball.png",
    },
    {
        name: "boxing",
        img: "images/Boxing.png",
    },
    {
        name: "football",
        img: "images/Football.png",
    },
    {
        name: "golf",
        img: "images/Golf.png",
    },
    {
        name: "soccer",
        img: "images/Soccer.png",
    },
    {
        name: "tennis",
        img: "images/Tennis.png",
    },
    {
        name: "volleyball",
        img: "images/Volleyball.png",
    }

]
// console.log(cardArray);

//shuffles Array randomly
cardArray.sort(()=> 0.5 - Math.random())
// console.log(cardArray);

//grabbing the whole element with the id of "grid"
const grid= document.querySelector("#grid")
const Player1= document.querySelector("#result1")
const Player2= document.querySelector("#result2")
// console.log(grid);

//create empty arrays
let cardClicked=[]
let cardsMatch=[]
const cardsWon=[]

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        //create an element called image
       const card= document.createElement("img")
       card.setAttribute("src", "images/Background.png")
       card.setAttribute("data-id", i)
       //add event listener to flip the card over, with callback
       card.addEventListener("click", flipCard)
       //append to the "grid" variable
       grid.append(card)
    //    console.log(card, i);
    }
}
createBoard()


function flipCard(){
    // new variable with "this" key to interact with whatever element we click 
    const cardId = this.getAttribute("data-id")
    //push name into new array
    // console.log(cardArray[cardId].name);
    cardClicked.push(cardArray[cardId].name)
    cardsMatch.push(cardId)
    // console.log(cardClicked);
    // console.log(cardsMatch);
    // console.log("flip", cardId);
    // console.log(cardClicked);
    //add image when you click the card
    this.setAttribute("src", cardArray[cardId].img)
        if (cardClicked.length === 2) {
            setTimeout(checkMatch, 500);
        }
}

function checkMatch() {
    const cards= document.querySelectorAll("img")
    // console.log(cards);
    // console.log("do they match?")

   if( cardClicked[0] == cardClicked[1]){
        alert("It's a Match!")
        cards[cardsMatch[0]].setAttribute("src", "images/Blank.png")
        cards[cardsMatch[1]].setAttribute("src", "images/Blank.png")
        cards[cardsMatch[0]].removeEventListener("click", flipCard)
        cards[cardsMatch[1]].removeEventListener("click", flipCard)
        cardsWon.push(cardClicked)
        Player1.textContent= cardsWon.length 
   } else{
        cards[cardsMatch[0]].setAttribute("src", "images/Background.jpeg")
        cards[cardsMatch[1]].setAttribute("src", "images/Background.jpeg")
        alert("Wrong Match, Try Again!")
       
        
   }

  

    Player1.textContent= cardsWon.length 
      
   cardClicked = []
   cardsMatch = []

   if(cardsWon.length == (cardArray.length/2)){
        Player1.textContent= "Congrats, you found them all"
        alert("Mark Down Your Time!!!!!")
        
   }
}



//timer
let seconds=00
let tens= 00
let outputSeconds= document.getElementById("second")
let outputTens= document.getElementById("tens")
let buttonStart= document.getElementById("btn-start")
let buttonStop= document.getElementById("btn-stop")
let buttonReset= document.getElementById("btn-reset")
let Interval

buttonStart.addEventListener("click", ()=>{
    alert("Player with the fastest time is the Winner! Each Player must write down their time.")
    clearInterval(Interval);
    Interval= setInterval(startTime, 1000)
})

buttonStop.addEventListener("click", ()=>{
    clearInterval(Interval)
})

buttonReset.addEventListener("click", ()=>{
    clearInterval(Interval);
    tens= "00"
    seconds="00"
    outputSeconds.innerHTML= seconds
    outputTens.innerHTML= tens
})

function startTime(){
    tens++
    if(tens <=9){
        outputTens.innerHTML="0" + tens
    }

    if(tens > 9){
        outputTens.innerHTML= tens
    }

    if(tens>99){
        seconds++
        outputSeconds.innerHTML="0" + seconds
        tens=0
        outputTens.innerHTML="0" + tens
    }

    if(seconds>9){
        outputSeconds.innerHTML=seconds
    }
}


