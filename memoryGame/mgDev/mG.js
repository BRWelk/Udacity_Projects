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



function shuffle(deal) {
    let i = deal.length, j = 0, card;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));
        
        card = deal[i];
        deal[i] = deal[j];
        deal[j] = card;
    }

    return deal;
};

function placeImg () {
    document.querySelectorAll('img');
    const images = document.querySelectorAll('img');
    images.forEach((currentValue, currentIndex) =>{
    
    let card = cards[currentIndex];
    currentValue.setAttribute('src', `images/${card.image}`);     
    });
}

// placeImg();

 const checkMatch = function (imgId) {
     if (image[imgId] === image[imageId + 8]) {
        console.log('Match'); {
            else {
                console.log('try again')
            }
        }
        const flipCard = function (cardId) {
            document.getElementById(elementId: DOMString)
        }
     }
 }