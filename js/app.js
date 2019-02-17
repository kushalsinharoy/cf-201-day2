/***********  Kushal Sinha Roy  **********************
This is a guessing game about me (Kushal Sinha Roy). 
User is given some simple questions to answer, and at
the end user is given how many they scored correct.
*******************************************************/
"use-strict";

//Get User first and last name
var firstName = prompt("What is your First name?");
var lastName = prompt("What is your Last Name?");

//get the counter going for correct answers.
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
    console.log('Home Country:', homeCountry);

    if(homeCountry.toUpperCase() === 'Y' || homeCountry.toUpperCase() === 'YES') {
        //Increment correct answer counter 
        correctAnswers++;

        //2nd Question
        var homeCountryCity = prompt("Guess my home city - Kolkata, Delhi, Mumbai, Goa ?");
        console.log('Home City:', homeCountryCity);

        if (homeCountryCity.toUpperCase() === "KOLKATA") {
            correctAnswers++;
        }
    }

    //3rd Question
    var favoritePastTime = prompt('Is playing video games my favorite past time?');
    console.log('Favorite Past Time', favoritePastTime);

    if(favoritePastTime.toUpperCase() === 'YES' || favoritePastTime.toUpperCase() === 'Y') {
        correctAnswers++;

        //4th Question
        var favoriteVideoGame = prompt('Is FIFA my favorite video game?');
        console.log('Favorite video game', favoriteVideoGame);

        if(favoriteVideoGame.toUpperCase() === 'Y' || favoriteVideoGame.toUpperCase() === 'YES') {
            correctAnswers++;
        }
    }

    alert("Ok. You have another 3 chances to guess my favorite number. HINT: It's a multiple of 3")

    var attempts = 0;
    while(attempts <= 2) {
        
        //5th Question
        var favoriteNumber = prompt('What is my favorite number?');
        if(parseInt(favoriteNumber) === 9) {
            correctAnswers++;
            break;
        }
        attempts++;
    }
    alert('You answered  ' + correctAnswers + ' out of 5 questions.');
} else {
    alert("Thanks and appreciate your time searching for this guessing game!!!");
}

