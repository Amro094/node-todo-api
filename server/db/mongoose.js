// Mongoose 
var mongoose = require('mongoose');

// mongoose is connected to the database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');


module.exports = {mongoose};