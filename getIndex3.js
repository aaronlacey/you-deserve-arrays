const prompt = require('prompt-sync')({ sigint: true });


// Write a program `getIndex3.js` that prompts the user for an array then logs out the item at the 3rd index. If 
//there are not four items (i.e., if there is no index 3), it logs out the value at the last index


let userArray = JSON.parse(prompt("Enter an array"));

let returnLastItem = userArray[userArray.length -1];


if (userArray.length >= 4) {

    console.log(`If at least 4 items in array, per requirments return the 4th item (3rd index): ${userArray[3]}`);
    
} else {
    console.log(`If less than 4 items in array, per requirement, return the last item in the array: ${returnLastItem}`);
}