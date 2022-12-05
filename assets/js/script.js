function displayNumber() {
    let num=Math.floor(Math.random()*25)+1;
    document.getElementById('operand').textContent=num;
}
displayNumber();
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
				runGame("even")
			} else if (this.getAttribute("data-type") === "odd") {
                runGame("odd");
            } else if (this.getAttribute("data-type") === "prime") {
                runGame("prime");
            } 
		});
	}
    

	
	});

    function runGame(gameType) {
        
        if (gameType === "even") {
            checkEvenAnswer(num);
        } else if (gameType === "odd") {
            checkOddAnswer(num);
        } else if (gameType === "prime") {
            checkPrimeAnswer(num);
        }
    }

    function checkEvenAnswer(num) {
        let operand=parseInt(num);
        if (operand%2===0) {
            alert("The number is indeed even");
            incrementScore();
        } else {
            alert("The number is not even");
            incrementIncorrectAnswer();
        }

    }
