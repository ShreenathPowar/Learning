console.time('time taken by code');
console.log('this is string'); // --> string
console.log(34);  // --> number
console.log(3.5);  // --> float
console.log(true);  // --> boolean
console.log([2, 4, 5]);  // --> array
console.log({name:"shreenath", surname:"powar"});  // --> object
console.table({name:"shreenath", surname:"powar"});  // --> print object in table format
console.warn("This is warning");  // --> warning(yellow!)
// console.clear();  // --> clear console
console.assert(23<18, 'Age should not be grater than 18');  // --> if condition fails, assertion failed (error)
console.error('This is error');  // --> error(red)
console.timeEnd('time taken by code');  // --> will print time taken from .time to .timeEnd
