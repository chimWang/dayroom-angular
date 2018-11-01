var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define an db object
var goodSchema = new Schema({
    id: String,
    name: String,
    count: Number,
    price: String,
    type: String,
    img: String
});

// bind module for accessing outside
module.exports = mongoose.model('goods', goodSchema);