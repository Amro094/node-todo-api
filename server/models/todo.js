var mongoose = require('mongoose');

// setting up mongoose Todo model
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        // trim removes leading white spaces, spaces before and after the text
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};



/***********************************************************/

// creating an instance of Todo
// var newTodo = new Todo({
//     text: '   Go play soccer   '
// });

// saving the model to the mongodb database
//    save() returns a Promise, so we can use then()
// newTodo.save().then((doc) => {
//     console.log('Saved todo', JSON.stringify(doc, undefined, 3));
// }, (err) => {
//     console.log('Unable to save todo', err);
// });


// other example
// var otherTodo = new Todo({
//     text: 'Dimple sucks',
//     completed: true,
//     completedAt: 123
// });

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 3));
// }, (err) => {
//     console.log('Unable to save todo');
// });

/***********************************************************/
