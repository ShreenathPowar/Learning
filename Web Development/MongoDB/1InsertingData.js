// mongo commands

// Inserting Data in MongoDB

use shreeCarts

// items is a collection(tables=>RDBMS)
//inserting one document(row=>RDBMS)
db.items.insertOne({name:"Samsung S12", price:45000, rating:4.5, sold:98})

//insserting many rows
db.items.insertMany([
    {name:"Samsung s11", price:40000, rating:4.6, sold:100},
    {name:"Samsung d12", price:22000, rating:4.0, sold:4000},
    {name:"Samsung r12", price:100000, rating:5, sold:5},
])