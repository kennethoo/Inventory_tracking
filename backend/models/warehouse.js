const mongoose = require('mongoose')
const Schema = mongoose.Schema
const warehouse=new Schema({
    warehouseName:String,
    InventorySize:Number,
    date:String,
    inventoryList:[{type:String}]
})

const Warehouse= mongoose.model('warehouse',warehouse)
module.exports= Warehouse