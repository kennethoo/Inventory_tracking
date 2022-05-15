const mongoose = require('mongoose')
const Schema = mongoose.Schema
const inventory=new Schema({
    productName:String,
    ventor:String,
    warehouseId:String,
    category:String,
    price:Number,
    date:String
})

const Inventory= mongoose.model('inventory',inventory)
module.exports= Inventory