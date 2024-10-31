// colorPreferences.js

// Create an array to store three colors
let colors = [];


for (let i = 0; i < 3; i++) {
    let color = prompt(`Enter your favorite color #${i + 1}:`); 
    colors.push(color); 
}


console.log("Your favorite colors are: " + colors.join(", "));


let newColor = prompt("Enter a new color to add to your favorites:");
colors.push(newColor);


console.log("Updated favorite colors: " + colors.join(", "));