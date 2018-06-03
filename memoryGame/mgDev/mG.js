 // Memory Game Udacity Project
//shuffle cards

let cards = shuffle ([
    {image: 'earth.jpg'},
    {image: 'solarSystem.jpg'},
    {image: 'galaxy1.jpg'},
    {image: 'galaxy2.jpg'},
    {image: 'galaxy3.jpg'},
    {image: 'nebula1.jpg'},
    {image: 'nebula2.jpg'},
    {image: 'nebula3.jpg'},
    {image: 'earth.jpg'},
    {image: 'solarSystem.jpg'},
    {image: 'galaxy1.jpg'},
    {image: 'galaxy2.jpg'},
    {image: 'galaxy3.jpg'},
    {image: 'nebula1.jpg'},
    {image: 'nebula2.jpg'},
    {image: 'nebula3.jpg'}
     ]);




//Shuffling card
function shuffle(cards) {
    let i = cards.length, j = 0, card;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));
        
        card = cards[i];
        cards[i] = cards[j];
        cards[j] = card;
    }

    return cards;
};
//Placing cards in grid
function deal () {    
    const images = document.querySelectorAll('img');
    images.forEach((currentValue, currentIndex) =>{
    
    let card = cards[currentIndex];
    currentValue.setAttribute('src', `images/${card.image}`);    
    
    });    
}
//deal();
//Flipping cards
function flipCard() {
    const img1 = 'images/blackHole.jpg';
          img2 = deal();
    const imgElement = document.getElementsByClassName('test');
    imgElement.src = (imgElement.src === img1) ? img1 : img2;
}



