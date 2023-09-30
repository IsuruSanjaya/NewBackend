const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    
    item: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    qty: { type: String, required: true },
    date: { type: String, required: true },

}, {

    timestamps:true
})

module.exports = mongoose.model('Items', itemSchema);