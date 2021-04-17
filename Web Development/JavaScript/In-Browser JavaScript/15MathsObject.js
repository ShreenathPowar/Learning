
// Printing the Math object
let m = Math;
console.log(m);

console.log("The values of E: " + m.E);
console.log("The values of PI: " + m.PI);
console.log("The values of SQRT2: " + m.SQRT2);
console.log("The values of LN10: " + m.LN10);

// Maths Functions
let a = 12.34341;
let b = 45;

// round
console.log("The value of a and b is ", a, b);
console.log("The value of round a and round b is ", Math.round(a), Math.round(b));

// pow (power)
console.log("The value of 12 to the power 4 is " + Math.pow(12, 4));

// sqrt (square root)
console.log("The Sqaure root of 12 is " + Math.sqrt(12));

// floor and ceil
console.log("12.8 is rounded up to nearest integer is " + Math.ceil(12.8));
console.log("12.8 is rounded down to nearest integer is " + Math.floor(12.8));

// abs (aabsolute)
console.log("The Absolute value of 7.44 is " + Math.abs(7.44));
console.log("The Absolute value of -7.44 is " + Math.abs(-7.44));

// trignometric functions
console.log("The value of sin(PI) is " + Math.sin(Math.PI));
console.log("The value of cos(PI) is " + Math.cos(Math.PI));
console.log("The value of tan(PI) is " + Math.tan(Math.PI));

// Min and Max functions
console.log("Minimum value from 4, 5, 6, is " + Math.min(4, 5, 6));
console.log("Maximum value from 4, 5, 6, is " + Math.max(4, 5, 6));

// generating random number
// Random Number from a to b : a + (b -a)*Math.random()
let r = Math.random();
console.log("Random number between 0 and 1 is: " + r);
console.log("Random number between 3 and 34 is: " + (3 + (34-3)*Math.random()));