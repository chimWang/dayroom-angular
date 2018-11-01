var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define an db object
var menuSchema = new Schema({
    id: String,
    name: String
});

// bind module for accessing outside
module.exports = mongoose.model('menus', menuSchema);