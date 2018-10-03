// Mongoose 
var mongoose = require('mongoose');

// mongoose is connected to the database
mongoose.Promise = global.Promise;
// the app will try to connect to heroku at first place, if connection fails, then
//    will connect to the local database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');


module.exports = {mongoose};