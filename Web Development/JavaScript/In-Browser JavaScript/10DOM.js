let main = document.getElementById('main');
console.log(main);
console.log(typeof(main));

let nav = document.getElementById('nav'); // returns object
console.log(nav);
console.log(typeof(nav));

let navS = document.getElementById('nav').innerHTML; //returns string
console.log(navS);
console.log(typeof(navS));

let containers = document.getElementsByClassName('container');
console.log(containers);
console.log(typeof(containers));

let sel = document.querySelector('#nav>li');
console.log(sel);
console.log(typeof(sel));

let selAll = document.querySelectorAll('#nav>li');
console.log(selAll);
console.log(typeof(selAll));
selAll[0].innerHTML = "Home Changed";