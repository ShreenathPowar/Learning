let jsonObj = {
    name: "Shreenath",
    surname: "Powar",
    friends: {
        friend1: "Nishant",
        friend2: "Sankalp",
        friend3: "Pratik"
    }
};

console.log(jsonObj);

let myJsonStr = JSON.stringify(jsonObj); //converting object in string
console.log(myJsonStr);

myJsonStr = myJsonStr.replace("Sankalp", "Champya");
console.log(myJsonStr);
console.log(typeof(myJsonStr));


let newJsonObj = JSON.parse(myJsonStr); // conveting string into Json object format
console.log(newJsonObj);
console.log(typeof(newJsonObj));