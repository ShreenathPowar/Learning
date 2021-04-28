// TYPE CONVERSION

// number to string
let myNumber = 34;
console.log(myNumber, typeof(mynumber));

let myString = String(myNumber);
console.log(myString, typeof(myString));

        // OR

let i = 10;
i = i.toString();
console.log(i, typeof(i));

// date to string
let date = String(new Date());
console.log(date, typeof(date));

let str = '243';
let strNumber = Number(str);
console.log(strNumber, typeof(strNumber));

let number = '23.75';
console.log(parseInt(number), Number(number));
number = Number(number);
console.log(number.toFixed(5)); // decimal places upto 5

//TYPE COERSION

let numString = '234';
let num = 34;
console.log(numString + num); // 23434