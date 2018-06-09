/*
 * Create a list that holds all of your cards
 */
 // Shuffle function from http://stackoverflow.com/a/2450976


 // grabbing icons for cards from HTML class "card"
let cards = ['fa fa-diamond', 'fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-bolt', 'fa fa-cube', 'fa fa-cube',  'fa fa-leaf', 'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bicycle', 'fa fa-bomb', 'fa fa-bomb'];

function shuffle(cards) {
    let i = cards.length, j = 0, card;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        card = cards[i];
        cards[i] = cards[j];
        cards[j] = card;
    }

    return card;
};

let minutes = document.createElement("li");


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
      card.classList.add("open", "show", "disable");        //adding class to HTML that works with .open .show css
      flippedCards.push(this);                     //this refers to card.addEventListener("click", Function())

     //looking for match
     compare(secondCard, firstCard);
     //Fixed more than two cards flipping issue
    } else if(flippedCards < 2) {
    //else no opened cards
      card.classList.add("open", "show", "disable");//adding class to HTML that works with .open .show css
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
           alert("Game over");
        }, 750);
   }
  }

  //add moves
  const movesContainer = document.querySelector(".moves");
  let moves = 0;
  movesContainer.innerHTML = 0;
  function addMove() {
    moves++;
    movesContainer.innerHTML = 'moves';
    //set rating

  }

/*
*star rating
*/
const starRating = document.querySelector(".stars");
function rating() {
    if(moves < 12) {
        starRating.innerHTML = `<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>`;
    } else if  ( moves < 18) { starRating.innerHTML = `<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li> `;
    } else  {
        starRating.innerHTML = `<li><i class="fa fa-star"></i></li>`;
    }
};

//restart button
const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click", function(){
    //CLear cards
    cardTable.innerHTML = "";
    // call to create more cards
    startGame(shuffle(cards));
    // Reset related variables
    matchedCards = [];
    moves = 0;
    movesContainer.innerHTML = 0;
    starRating.innerHTML = `<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>`;
});
  //start game
  startGame(shuffle(cards));
   starRating.innerHTML = `<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>`;





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
