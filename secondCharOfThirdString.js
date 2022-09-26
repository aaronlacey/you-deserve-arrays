const prompt = require('prompt-sync')({ sigint: true });


let userArray = JSON.parse(prompt("Enter an array: "));

let secondChar = userArray[2][1];

if(typeof userArray[2] === "string") {
    console.log(`Console logs out: ${userArray[2][1]}`);
} else {
    console.log(`Error, 3rd item does not evaluate to string, it is a: ${typeof userArray[2]} type`);
}
