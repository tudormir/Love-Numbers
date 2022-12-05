function displayNumber() {
    let num=Math.floor(Math.random()*25)+1;
    document.getElementById('operand').textContent=num;
}
displayNumber();


// When one of the buttons is pressed, than the DOM must check of the button correspond to the correct number.
document.addEventListener("DOMContentLoaded", function() {
	let buttons = document.getElementsByTagName("button");

	for (let button of buttons) {
		button.addEventListener("click", function() {
			if (this.getAttribute("data-type") === "even") {
				
                //alert("You've clicked Even button");
                runGame("even");
			} else if (this.getAttribute("data-type") === "odd") {
                //alert("You've clicked odd button");
                runGame("odd");
            } else if (this.getAttribute("data-type") === "prime") {
                //alert("You've clicked Prime button");
                runGame("prime");
            } 
		});
	}
    

	
	});

    function runGame(gameType) {
        let num=parseInt(document.getElementById("operand").textContent);
        if (gameType === "even") {
            checkEvenAnswer(num);
            displayNumber();
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
    function incrementScore() {

        // Gets the current score from the DOM and increments it
    
        let oldScore = parseInt(document.getElementById("score").innerText);
        document.getElementById("score").innerText = ++oldScore;
    
    }
    
    function incrementIncorrectAnswer() {
    
        // Gets the current tally of incorrect answers from the DOM and increments it
    
        let oldScore = parseInt(document.getElementById("incorrect").innerText);
        document.getElementById("incorrect").innerText = ++oldScore;
    
    }
    