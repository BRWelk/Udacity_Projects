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

let back = ['images/blackHole.jpg'];



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

function deal () {
    document.querySelectorAll('img');
    const images = document.querySelectorAll('img');
    images.forEach((currentValue, currentIndex) =>{
    
    let card = cards[currentIndex];
    currentValue.setAttribute('src', `images/${card.image}`);     
    });
}

window.onload = deal();

//implement front/back card class with JS



function flipCard() {
    let x = document.getElementById('img');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
