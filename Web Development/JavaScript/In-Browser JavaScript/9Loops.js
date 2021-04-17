// for loop
for (let i = 0; i < 3; i++) {
    console.log(i);
}

// forEach Loop
let friends = ["Nishant", "Sankalp", "Pratik", "Yogesh"];
for (let index = 0; index < friends.length; index++) {
    console.log(friends[index]);
}

friends.forEach(function f(element) {
    console.log("Hello" + " " + element);
})

// for of loop
for (element of friends) {
    console.log("Hello" + " " + element + " again");
}

// for in Loop -> use this loop to iterate object
let employee = {
    name: "Shreenath",
    surname: "Powar",
    salary: 475000
}

for (key in employee) {
    console.log(`The ${key} of emplyee is ${employee[key]}`)
}

// while Loop
let i = 0;
while (i < 4) {
    console.log(i);
    i++; 
}

//do-while Loop
let j = 0;
do {
    console.log('Hii');
    j++;
} while (j < 10);