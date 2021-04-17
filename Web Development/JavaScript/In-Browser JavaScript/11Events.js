function toggleHideShow() {
    let btn = document.getElementById('btn');
    let para = document.getElementById('para');
    
    if(para.style.display != "none") {
        para.style.display = "none";
    }

    else {
        para.style.display = "block";
    }
}

let para = document.getElementById('para');
para.addEventListener('mouseover', function run() {
    // alert('Mouse over para');
    console.log("Mouse Over");
})

para.addEventListener('mouseout', function run() {
    // alert("Mouse Out");
    console.log("Mouse Out");
})

