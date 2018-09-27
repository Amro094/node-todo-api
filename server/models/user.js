// exporting mongoose bcz using model()
var mongoose = require('mongoose');

// User model
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

module.exports = {User};


/***********************************************************/

// creating an instance of User
// var newUser1 = new User({
//     email: 'dimple@gmail.com   '
// });

// // saving to the database
// newUser1.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 3));
// }, (err) => {
//     console.log('Unable to save todo', err);
// });

/***********************************************************/