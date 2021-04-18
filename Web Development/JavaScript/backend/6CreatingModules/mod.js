console.log(`This is Node.js Module`);

let average = (arr) => {
    sum = 0;
    arr.forEach((element) => {
        sum += element;
    });
    return sum/(arr.length);
};

module.exports = {
    avg: average,
    name: "Shreenath",
    surname: "Powar"
};
module.exports.repo = "Learning";

console.log(`This is Node.js Module`);