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
// The function runGame checks if the correct button has been chosen and displays another number.
    function runGame(gameType) {
        let num=parseInt(document.getElementById("operand").textContent);
        if (gameType === "even") {
            checkEvenAnswer(num);
            displayNumber();
        } else if (gameType === "odd") {
            checkOddAnswer(num);
            displayNumber();
        } else if (gameType === "prime") {
            checkPrimeAnswer(num);
            displayNumber();
        }
    }
// The function checkEvenAnswer checks when the button "Even" has been pushed if the number an even number is.
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
    /**De functie num_is_prime checks is a number is prime. For example: the number 15 is divided by all the number from 2 until 15 divided by 2. 
    *There is a local variable num_prime that increases if 15 is divided by 3 of 5. In that situationb is the answer
    * of the division 0. Then if num_prime is not zero than the number 15 is not prime.*/

    function num_is_prime(num){
        operand=parseInt(num);
        let num_prime=0;
        for (i=2; i<parseInt(operand/2); i++){

        if (operand%i===0) {
            num_prime++;
        } 
        }
        if (num_prime!==0) {
            alert("The number is not prime");
            return false;
        } else {
            alert("The number is indeed prime");
            return true;
        }
    
    }
    // The function checkOddAnswer checks when the button "Odd" has been pushed if the number an ood number is.
    function checkOddAnswer(num) {
        let operand=parseInt(num);
     
        if (operand%2!==0)  {
            alert("The number is indeed odd");
            incrementScore();
        
        } else {
            alert("The number is not odd");
            incrementIncorrectAnswer();
        }

    }
// The function checkPrimeAnswer checks when the button "Prime" has been pushed if the number a prime number is.
    function checkPrimeAnswer(num) {
            let operand=parseInt(num);
            let num_prime=0;
            for (i=2; i<parseInt(operand/2); i++){

            if (operand%i===0) {
                num_prime++;
            } 
            }
            if (num_prime!==0) {
                alert("The number is not prime");
                incrementIncorrectAnswer();
            } else {
                alert("The number is indeed prime");
                incrementScore();
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
    