const prompt = require('prompt-sync')({ sigint: true });


//1. Write a program, `getFirstItemFrom.js` that prompts the 
//user for an array, then logs out the first item in that array


let userArray = JSON.parse(prompt("Enter an Array: "))


console.log("first item in array is:  " + userArray[0])


