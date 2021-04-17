let dt  = new Date();
console.log(dt);

let dt1  = new Date(1000);
console.log(dt1);

let newDate = new Date("2029-09-30");
console.log(newDate);

// let date = new Date(year, month, date, hour, minute, second, millisecond);
let newDate1 = new Date(3020, 4, 6, 12, 43, 56, 67);
console.log(newDate1);

let yr = dt.getFullYear();
console.log(yr);

let mon = dt.getMonth();
console.log(mon);

let dat = dt.getDate();
console.log(dat);

let hr = dt.getHours();
console.log(hr);

newDate.setDate(7);
newDate.setHours(23);
newDate.setMinutes(45);
console.log(newDate);

console.log(Date.now());

function updateTime() {
    let time = new Date();
    let yr = time.getFullYear();
    let month = time.getMonth();
    let day = time.getDate();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let seconds = time.getSeconds();

    date = yr + ":" + month + ":" + day + ":" + hour + ":" + minute + ":" + seconds;
    document.getElementById('time').innerHTML = date;
}

setInterval(updateTime, 1000);
