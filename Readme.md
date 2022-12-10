# Love Numbers
### This webside is a game about even, odd and prime numbers.
#### The game tests the knowlegde of the player about even, odd and prime numbers.
This is my first webside that uses javascript. I am quite proud of my first game in html.

In this game an positive integer number is tested whether the given number is even, odd of prime.

I have been inpired by the Love Maths game that I have seen during the course at Code Institute.

The game has the followings element:
   - head: hier I have added the language, title, fonds, link to the style.css file.
   - body consists of the followings element:
      - a heading that shows a logo and a title;
      - three different div's and an unordered list:
         - the first div is for the general instructions, how the game works;
         - the unodered list shows a list with explanations about how do we know if a number is even, odd of prime;
         - the second div is showing three button that we need to press to play the game: do we press even number means that we think the number displayed is even;
         - the third div contains two paragraphs each containing a span that wil show the number of correct and incorrect answers;
     - the body ends with a html element script that wil load the javascript file script.js. This element has to be at the end the the body element in order to be easly loaded.

Copy writes:
I have used the structure of the index.html from the project Love Maths presented at the Code Institute lessons. 
Inside of the script.js file I have use the names of the followings functions: runGame(), incrementScore(), increment IncorrectAnswer() instead of incrementWrongAnswers().
Hier I would like to add that except the function  incrementScore(), incrementIncorrectAnswer and the code about event listener when a button is pressed, the rest of the code has been created by me.
The game works in the following fashion:
- a number is displayed with the function displayNumber;
- the player must press one of the buttons
- a message is showned als alert message saying if the number indeed a even, odd of prime number is;
- then another number is showned.  
- if the correct button has been pressed then the number of correct answers increases by 1, othewise the number of incorrect answers is increased by 1.








