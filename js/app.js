/***********  Kushal Sinha Roy  **********************
This is a guessing game about me (Kushal Sinha Roy). 
User is given some simple questions to answer, and at
the end user is given how many they scored correct.
*******************************************************/
"use-strict";

//Get User first and last name
var firstName = prompt("What is your First name?");
var lastName = prompt("What is your Last Name?");

//variables for number of questions and correct answers.
var numberOfQuestion = 0;
var correctAnswers = 0;

//greet the user and check if interested in playing the game.
if(firstName && lastName) {
    alert('Greetings ' + firstName + ' ' + lastName + '!!! ' + 'Welcome to my small guessing game!!!!');

    //Check if user wants to play the game
    var guessingGameFlag = prompt("Ready to play a guesssing game about me?");
}

//main entry
if(guessingGameFlag.toUpperCase() === 'Y' || guessingGameFlag.toUpperCase() === 'YES') {
    alert("Lets Rock and Roll!!!!!");

    //1st question
    var homeCountry = prompt('Is my home country India?');
    numberOfQuestion++;
    console.log('Home Country:', homeCountry);

    if(homeCountry.toUpperCase() === 'Y' || homeCountry.toUpperCase() === 'YES') {
        //Increment correct answer counter 
        correctAnswers++;
        alert("Correct Answer!!!");

        //2nd Question
        var homeCountryCity = prompt("Guess my home city - Kolkata, Delhi, Mumbai, Goa ?");
        numberOfQuestion++;
        console.log('Home City:', homeCountryCity);

        if (homeCountryCity.toUpperCase() === "KOLKATA") {
            correctAnswers++;
            alert("Correct Answer!!!");
        }
    }

    //3rd Question
    var favoritePastTime = prompt('Is playing video games my favorite past time?');
    numberOfQuestion++;
    console.log('Favorite Past Time', favoritePastTime);

    if(favoritePastTime.toUpperCase() === 'YES' || favoritePastTime.toUpperCase() === 'Y') {
        correctAnswers++;
        alert("Correct Answer!!!");

        //4th Question
        var favoriteVideoGame = prompt('Is FIFA my favorite video game?');
        numberOfQuestion++;
        console.log('Favorite video game', favoriteVideoGame);

        if(favoriteVideoGame.toUpperCase() === 'Y' || favoriteVideoGame.toUpperCase() === 'YES') {
            correctAnswers++;
            alert("Correct Answer!!!");
        }
    }

    alert("Ok. You have another 3 chances to guess my favorite number. HINT: It's a multiple of 3");
    numberOfQuestion++;

    var attempts = 0;
    while(attempts <= 2) {

        //5th Question
        var favoriteNumber = prompt('What is my favorite number?');
        console.log('Favorite Number Attempt ', attempts, ' is ', favoriteNumber);

        if(parseInt(favoriteNumber) === 9) {
            correctAnswers++;
            alert("Correct Answer!!!");
            break;
        }
        attempts++;
    }
    alert('You answered  ' + correctAnswers + ' out of ' + numberOfQuestion +' questions.');
} else {
    alert("Thanks and appreciate your time searching for this guessing game!!!");
}

