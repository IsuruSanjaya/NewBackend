const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lastOrderNumberSchema = new Schema({
    lastOrderNumber: { type: Number, default: 0 },
});


module.exports = mongoose.model('LastOrderNumber', lastOrderNumberSchema);
