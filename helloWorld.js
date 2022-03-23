console.log('hello world');



const readline = require(‘readline’);

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.question("Howdy, what's your name?", function(answer){
    console.log("Hi, " + answer)
    reader.close()
});
