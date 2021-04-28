// STRING METHODS

const name  = "Shreenath";
const surname = "Powar";

console.log(name + surname);

let html = "<h1> This is heading</h1>" + 
            "<p>This is paragraph</p>";

console.log(html.concat("<p>this is seconds para</p>"));

console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());

console.log(html[5]);

console.log(html.indexOf('This'));
console.log(html.lastIndexOf('This'));

console.log(html.charAt(5));

console.log(html.endsWith('</p>'));
console.log(html.includes('</p>'));
console.log(html.substring(0, 8));
console.log(html.substr(-7, 3));
console.log(html.slice(-10));

console.log(html.split(' '));

console.log(html.replace('This', 'it'));

//  HTML LITERALS