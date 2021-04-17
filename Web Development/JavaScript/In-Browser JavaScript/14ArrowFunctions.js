// function greet() {
//     console.log("Good Morning!");
// }
// greet();

let greet1 = () => {
    console.log("Good Morning!");
}
greet1();

let sum = (a, b) => {
    return a + b;
}
// one liner for above
let sum1 = (a, b) => a + b;

let half = a => a/2; // can also write like this for single argument. 

// application
setTimeout(() => {
    console.log("Good Morning!");
}, 3000);

let obj1 = {
    greeting: "Good Morning! ",
    names: ["Shreenath", "Shree"],
    speak() {
        this.names.forEach((name) => {
            console.log(this.greeting + name);  // lexical this -> if we use arrow function in object, this is looked up in lexical scope(parent scope). if we don't use arrow function, this will of that function only. 
        });
    }
}
