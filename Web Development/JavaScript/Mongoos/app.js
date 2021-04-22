const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shreeCart', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    console.log('Connection exstablished!');
});

//Schema
const kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
    let greeting = `my name is ${this.name}`;
    console.log(greeting);
};

// compiling our schema into a Model.
const kitten = mongoose.model('kitten', kittySchema);

let shreeKitty1 = new kitten({name: "shree's kitty1"});
let shreeKitty2 = new kitten({name: "shree's kitty2"});
console.log(shreeKitty1.name);
console.log(shreeKitty2.name);
// shreeKitty1.speak();
// shreeKitty2.speak();

shreeKitty1.save(function (err, o) {
    if(err) throw console.error(err);
    // o.speak();
});

shreeKitty2.save((err, o) => {
    if(err) throw console.log(err);
    // o.speak();
});

kitten.find({name: "shree's kitty1"}, (err, kittens) => {
    console.log(kittens);
});
