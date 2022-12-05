function displayNumber() {

}

function incrementScore() {

}

function incrementIncorrectAnswer() {

}

// When one of the buttons is pressed, than the DOM must check of the number correspond to the correct button.
document.addEventListener("DOMContentLoaded", function() {
	let buttons = document.getElementsByTagName("button");

	for (let button of buttons) {
		button.addEventListener("click", function() {
			if (this.getAttribute("data-type") === "even") {
				checkEvenAnswer();
                runGame(even);
			} else if (this.getAttribute("data-type") === "odd") {
				checkOddAnswer();
                runGame(odd);
            } else if (this.getAttribute("data-type") === "prime") {
				checkPrimeAnswer();
                runGame(prime);
            } 
		});
	}

	document.getElementById("answer-box").addEventListener("keydown", function(event) {
		if (event.key === "Enter") {
			checkAnswer();
		}
	});

});
