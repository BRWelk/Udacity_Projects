 // Memory Game Udacity Project
 // Shuffle board

	 function flip(card) {
   var pic;
 	if (card == 0) {
 		pic = "../images/earth.jpg";
 	 } else {
 	 	pic = "../images/solarSystem.jpg";
 	 }
 	 document.getElementById('myImage').src = pic;
 	}
 
