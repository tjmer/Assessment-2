//got some code from the calculator assignment
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`Welcome to the validator tool`)
console.log(`(password should be at least 10 characters long)`)
reader.question("Enter password to validate:", function(input){
    token = input.split('')
    if (token.length === 10){
        console.log(`Your password passes validation`)
    } else{
        console.log(`Your password will not work`)
    }

    

    reader.close()

});