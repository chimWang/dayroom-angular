var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define an db object
var movieSchema = new Schema({
    title: String,
});

// bind module for accessing outside
module.exports = mongoose.model('items', movieSchema);