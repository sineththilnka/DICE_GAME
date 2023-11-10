const dise = document.getElementById('button_1');

function diseGame(){
    //player 1

	var random_1 = Math.floor((Math.random()* 6) + 1);
	
    var diceLocation = "r-"+ random_1 + ".png";
	var img1 = document.querySelectorAll("img")[0];
	img1.setAttribute("src", diceLocation);

    //player 2
	var random_2 = Math.floor((Math.random() * 6) + 1);
	var diceLocation2 = "r-" + random_2 + ".png";
	var img2 = document.querySelectorAll("img")[1];
	img2.setAttribute("src", diceLocation2);

	if (random_1 > random_2) {
		document.querySelector("h2").innerHTML = " &#128681; Player 1 Win !";
	}
	else if (random_1 < random_2) {
		document.querySelector("h2").innerHTML = "Player 2 Win ! &#128681; ";
	}
	else if (random_1 = random_2) {
		document.querySelector("h2").innerHTML = "&#128681; Draw! &#128681;";
	}
	else {
		document.querySelector("h2").innerHTML = "Something Error!"
	}
	  dice.innerHTML = "Play Again"

}

