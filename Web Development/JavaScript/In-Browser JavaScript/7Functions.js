console.log('this is JavaScript file which will be linked');

function sumAndSub(num1, num2) {
    let sumsub = {
        sum: (num1 + num2),
        sub: (num1 - num2)
    }
    // returning object
    return sumsub;
}

console.log(sumAndSub(34, 24));
console.log(sumAndSub(44, 16));
console.log(sumAndSub(54, 47));
console.log(sumAndSub(64, 38));