const prompt = require('prompt-sync')({ sigint: true });


//prompts the user for an array then logs out a boolean indicating whether the array's length is at least 10

let userArray = JSON.parse(prompt("Enter an array: "))

if (userArray.length >= 10) {
    console.log("The array's length is at least 10! Way to go!!")
} else {
    console.log("The array's length is less than 10! Step up your game bruh!!")
}

//console.log(userArray);
