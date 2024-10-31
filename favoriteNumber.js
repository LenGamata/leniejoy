// favoriteNumber.js

// Declare a variable that will hold the favorite number
const favoriteNumber = 7; 

let guess; 


while (true) {
    guess = prompt('Guess your favorite number: '); 
    guess = Number(guess); 

    if (guess > favoriteNumber) {
        console.log('Your guess is too high!');
    } else if (guess < favoriteNumber) {

const prompt = require('prompt-sync')(); 

        console.log('Your guess is too low!');
    } else {
        console.log('Correct! Your favorite number is ' + favoriteNumber);
        break; 
    }
}