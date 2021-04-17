// setTimeout -> allows to run function once after the interval of time.
// setInterval -> allows to run function repeatedly after the interval of time.

function greet(name, surname) {
    console.log("Hello and Good Morning!" + " " + name + " " + surname);
}

let timeOut = setTimeout(greet, 5000, "Shree", "Powar"); // timeout(functionname, timeout, arguments)
console.log(timeOut);
// setTimeout(greet(), 5000, "Shree", "Powar"); // wron cause of brackets won't works

clearTimeout(timeOut); // clear setTimeout -> won't run

let intervalId = setInterval(greet, 5000, "Shree", "Powar");
clearInterval(intervalId); // clear setInterval -> won't run

function displayTime() {
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}

setInterval(displayTime, 1000);