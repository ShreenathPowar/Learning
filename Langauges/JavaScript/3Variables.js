console.log('Hii');

var marks; //undefined
var name = "Shreenath";  //global scope
var name = "Shree"; // allowed (no error)
{
    let name = "Shreenath"; // block scope
    // let name = "Shree"; // not allowed (error)
}

const fname = "shree";
// fname = "shreenath"; // not allowed (error)

const arr1 = [2, 5 ,3];
arr1.push(6); //allowed
// arr1 = [3, 2, 1]; // not allowed
console.log(arr1);

// programming cases
// 1. camelCase
// 2. kabab-case
// 3. snake_case
// 4. PascalCase