// MongoDB commands

// Updating Data

db.items.updateOne({price: 40000}, {$set: {sold: 150}}) // update the first document matched with set values
db.items.updateMany({price: 40000}, {$set: {sold: 150}}) // update all the documents matched with set values.s