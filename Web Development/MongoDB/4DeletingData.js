// MongoDB commands

// Deleting Data

db.items.deleteOne({price: 22000}) //delete first documents macthed.ss
 
db.items.deleteMany({price: 100000}) // delete all documents matched.