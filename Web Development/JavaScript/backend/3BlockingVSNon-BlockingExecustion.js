// Synchronous code or Blocking
    // line by line execution.

const fs = require('fs');

// line by line execution
let text = fs.readFileSync("2FS.txt", "utf-8");
console.log(text);
console.log("This line will execute after line 6 and 7");


// Asynchronous or Non-Blocking
    // Line by line execution not gauranteed.
    // callbacks will fire.

// arrow function is a callback and it will be fired once readFile function is complete
// line by line execution but programme go to next line untill readFile is not completed once it completed it will fire callbacks i.e. arrow function.
fs.readFile("2FS.txt", "utf-8", (error, text) => {
    if(error) throw error; // error is a error message (null if no error)
    console.log("This line will execute after 30");
    console.log(text); // and text is a data in 2FS.txt
});
console.log("This line will execute first before line 18");

fs.readFile("2FS.txt", "utf-8", (error, text) => {
    if(error) throw error; // error is a error message (null if no error)
    console.log("This line will execute after 21");
    console.log(text); // and text is a data in 2FS.txt
});
console.log("This line will execute after line 23");
