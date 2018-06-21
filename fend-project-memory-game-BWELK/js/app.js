/* Create a list that holds all of your cards */
// Shuffle function from http://stackoverflow.com/a/2450976

// grabbing icons for cards from HTML class "card"
let cards = [
  'fa fa-diamond',
  'fa fa-diamond',
  'fa fa-paper-plane-o',
  'fa fa-paper-plane-o',
  'fa fa-anchor',
  'fa fa-anchor',
  'fa fa-bolt',
  'fa fa-bolt',
  'fa fa-cube',
  'fa fa-cube',
  'fa fa-leaf',
  'fa fa-leaf',
  'fa fa-bicycle',
  'fa fa-bicycle',
  'fa fa-bomb',
  'fa fa-bomb'
];
//function to shuffle cards. This takes the let cards [array] and loops through the cards. It assigns a random number to each card throug Math.random().
function shuffle(cards) {
  let i = cards.length,
    j = 0,
    card;

  while (i--) {

    j = Math.floor(Math.random() * (i + 1));

    card = cards[i];
    cards[i] = cards[j];
    cards[j] = card;
  }

  return card;
};



const cardTable = document.querySelector("#deck");
let flippedCards = [];
let matchedCards = [];
//creating card table
function startGame() {
  for (let i = 0; i < cards.length; i++) {
    const card = document.createElement("li");
    card.classList.add("card");

    card.innerHTML = `<i class="${cards[i]}"></i>`;
    cardTable.appendChild(card);
    //Click Event for each card
    click(card);
  }
}

const minutesLabel = document.getElementById("minutes"); //Sets the minutes field
const secondsLabel = document.getElementById("seconds"); //Sets the seconds field
let totalSeconds = 0; //sets totalSeconds counter to zero
function pad(val) { //Defines the pad function to have a signle peramter of val
  let valString = val + ""; //before val = 0; after valString = "0"
  if (valString.length < 2) {
    return "0" + valString; //before valString = "0"; after valString = "00"
  } else {
    return valString; // only if valString.length > 1 valString = "10"
  }
}
let winTime = '';
function setTime() {
  ++totalSeconds; //Increment total seconds by 1
  let seconds = pad(totalSeconds % 60); //performs modulo (remainder) on totalSeconds to get the seconds count and formats it
  let minutes = pad(Math.floor(totalSeconds / 60)); //Divides totalSeconds to yeild minute count and rounds down the value to nearest whole integer
  winTime = (minutes + ":" + seconds);
  secondsLabel.innerHTML = seconds;
  minutesLabel.innerHTML = minutes;
}

let endTime = '';
let timesCalled = 0;
//existing flipped cards
// click to flip card
function click(card) {
  card.addEventListener("click", function() {
    const secondCard = this;
    const firstCard = flippedCards[0];
    if (timesCalled === 0) {
      //^^^^^^^^^^^^do i need endTime or setTime here?**************
      endTime = setInterval(setTime, 1000); //Calls setTime() once per second; setInterval is a method in the JS standard library}
      timesCalled += 1;
    }

    if (flippedCards.length === 1) {
      card.classList.add("open", "show", "disable"); //adding class to HTML that works with .open .show css
      flippedCards.push(this); //this refers to card.addEventListener("click", Function())
      //looking for match
      compare(secondCard, firstCard);
      //Fixed more than two cards flipping issue
    } else if (flippedCards < 2) {
      //else no opened cards
      card.classList.add("open", "show", "disable"); //adding class to HTML that works with .open .show css
      flippedCards.push(this); //this refers to card.addEventListener("click", Function())
    }

  });
}

function compare(secondCard, firstCard) {
  if (secondCard.innerHTML === firstCard.innerHTML) {
    //matched cards
    secondCard.classList.add("match");
    firstCard.classList.add("match");
    matchedCards.push(secondCard, firstCard);
    flippedCards = [];
    // check game over
    gameOver();
  } else {
    //setting timer for second card to show
    setTimeout(function() {
      secondCard.classList.remove("open", "show", "disable");
      firstCard.classList.remove("open", "show", "disable");
      flippedCards = [];
    }, 750);
  }
  addMove();

}

//Checking if game is over
function gameOver() {

  if (matchedCards.length === cards.length) {
    setTimeout(function() {
      flippedCards = [];
      clearInterval(endTime);
      alert(`You won!!! You had ${moves} moves and a star rating of ${starNum}
 You completed the Match Game in ${winTime} seconds.
 Would you like to play again?`);
    }, 750);
  }
}


//add moves
const movesContainer = document.querySelector(".moves");
let moves = 0; //settig moves to 0
movesContainer.innerHTML = 0; //creating 0 in the html for user to see

function addMove() {
  moves++; //adding moves every two click and putting it in HTML for user to see
  movesContainer.innerHTML = moves;

  //set rating
  rating();
}
/*
 *star rating
 */
let starNum = 3;//game starts at a rating of 3 stars
const starRating = document.querySelector(".stars");

function rating() {
  if (moves < 14) {
    starRating.innerHTML = `<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>`;
  } else if (moves < 20) {
    starRating.innerHTML = `<i class="fa fa-star"></i><i class="fa fa-star"></i> `;
    starNum = 2;//after user has more then 14, but less then 20 moves, rating moves to 2 stars
  } else {
    starRating.innerHTML = `<i class="fa fa-star"></i>`;
    starNum = 1;//rating goes to one star after 20+ moves
  }
};

//restart button
const restartBtn = document.querySelector(".restart");
// Reset related variables

restartBtn.addEventListener("click", function() {
  matchedCards = [];//creating open array so matched cards can be stored
  flippedCards = [];//creating open array so flipped cards can be stored
  movesContainer.innerHTML = 0; //resetting 0 in HTML for moves
  starRating.innerHTML = `<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>`;//resetting 3 stars in HTML
  moves = 0;
  clearInterval(endTime);//Stopping clock and using endTime to record user time
  totalSeconds = -1;//subtracting 1 to bring the timer to 0
  timesCalled = 0;
  setTime();//resetting timer
  //CLear cards
  cardTable.innerHTML = "";//creating new board

  // call to create more cards
  startGame(shuffle(cards));

});
//start game
startGame(shuffle(cards));

/* set up the event listener for a card. If a card is clicked:  - display the card's symbol (put this functionality in another function that you call from this one)  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)  - if the list already has another card, check to see if the two cards match    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one) */
