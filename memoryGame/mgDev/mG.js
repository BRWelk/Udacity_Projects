 // Memory Game Udacity Project
//shuffle cards

let cards = shuffle ([
    {image1: 'earth.jpg'},
    {image2: 'solarSystem.jpg'},
    {image3: 'galaxy1.jpg'},
    {image4: 'galaxy2.jpg'},
    {image5: 'galaxy3.jpg'},
    {image6: 'nebula1.jpg'},
    {image7: 'mebula2.jpg'},
    {image8: 'nebula3.jpg'},
    {image9: 'earth.jpg'},
    {image10: 'solarSystem.jpg'},
    {image11: 'galaxy1.jpg'},
    {image12: 'galaxy2.jpg'},
    {image13: 'galaxy3.jpg'},
    {image14: 'nebula1.jpg'},
    {image15: 'mebula2.jpg'},
    {image16: 'nebula3.jpg'}
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
}

console.log(cards);