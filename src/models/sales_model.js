const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saleSchema = new Schema({
    
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    product_s: { type: String, required: false },
    price: { type: String, required: true },
    qty: { type: String, required: true },


}, {

    timestamps:true
})

module.exports = mongoose.model('sales', saleSchema);