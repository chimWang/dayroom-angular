var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define an db object
var goodSchema = new Schema({
    name: String,
    count: Number,
    price: String,
    type: String,
    img: String,
    orders: Number,
    totalPrice: Number
});

// bind module for accessing outside
module.exports = mongoose.model('shoppingBags', goodSchema);