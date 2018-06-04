/*
 * Create a list that holds all of your cards
 */
 // grabbing icons for cards from HTML class "card"
let cards = ['fa fa-diamond', 'fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-bolt', 'fa fa-cube', 'fa fa-cube',  'fa fa-leaf', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bicycle', 'fa fa-bomb', 'fa fa-bomb'];

const cardTable = document.querySelector(".deck");
let flippedCards = [];
let matchedCards = [];
//creating card table
function startGame(){
    for (let i = 0; i < cards.length; i++) {
    const card = document.createElement("li");
    card.classList.add("card");
    card.innerHTML = `<i class="${cards[i]}"></i>`;
    cardTable.appendChild(card);
    //Click Event for each card
    click(card);
}
}

    // click to flip card
function click(card) {
card.addEventListener("click", function() {
 
    const secondCard = this;
    const firstCard = flippedCards[0];

     //existing flipped cards
    if(flippedCards.length === 1) {

      card.classList.add("open", "show");          //adding class to HTML that works with .open .show css
      flippedCards.push(this);                     //this refers to card.addEventListener("click", Function())

     //looking for match
     compare(secondCard, firstCard);

    
    } else {
    //else no opened cards
      card.classList.add("open", "show");//adding class to HTML that works with .open .show css
      flippedCards.push(this);//this refers to card.addEventListener("click", Function())
    }

  });
}

function compare(secondCard, firstCard) {
        if(secondCard.innerHTML === firstCard.innerHTML) {
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
          secondCard.classList.remove("open", "show");
          firstCard.classList.remove("open", "show");
          flippedCards = [];
        }, 750);
}
}

  function gameOver() {
   if (matchedCards.length === cards.length) {
    setTimeout(function() {
          flippedCards = [];
           alert("Game over");
        }, 750);
   }
  }

  //start game 
  startGame();

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
