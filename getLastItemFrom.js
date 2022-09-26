const prompt = require('prompt-sync')({ sigint: true });


//Write a program, `getLastItemFrom.js` that prompts the user for an array, then logs out the last item from that array

let userArray = JSON.parse(prompt("Enter an array"))

console.log("Last item in array is:  " + userArray[userArray.length-1]);
