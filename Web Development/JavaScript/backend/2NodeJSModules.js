const fs = require("fs"); // importing fs module

let text = fs.readFileSync("2FS.txt", "utf-8"); // reading file. returns -> string
console.log(text);
console.log(typeof(text));

text = text.replace("Shreenath", "Shree");
console.log(text);

fs.writeFileSync("2FS.txt", text);  // writing to file.
