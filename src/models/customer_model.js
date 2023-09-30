const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    orderNumber: { type: Number, required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    details: { type: String, required: true },

}, {

    timestamps:true
})

module.exports = mongoose.model('Customers', customerSchema);