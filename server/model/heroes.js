var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define an db object
var heroSchema = new Schema({
    name: String
});

// bind module for accessing outside
module.exports = mongoose.model('herolist', heroSchema);