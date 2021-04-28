// mongo commands

show collections //list all collections of current db

db.items.find({price:45000}) // list all the document which have price 45000.

db.items.find({sold: 5}) //list all the documents which have sold value 5
//{sold: 5} => filter object

db.items.find({sold: {$gte: 5}}) //list all the documents which have sold value greater than or equal to 5

db.items.find({sold: {$gt: 5}}) //list all the documents which have sold value greater than 5

// AND Query
db.items.find({sold: {$gt: 98}, rating: {$gt: 4}})
db.items.find({sold: {$lt: 100}, rating: {$gt: 4}})

// OR Query
db.items.find({$or: [{rating:4.5}, {sold: {$gt: 50}}]})

// Projection Parameter
db.items.find({sold: {$gt: 100}}, {rating: 1, sold: 1})
////list all the documents which have sold value greater than 100 and only shows rating and sold values.


