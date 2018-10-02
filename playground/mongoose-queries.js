const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// copied from Todos collection
// var id = '5bb2c507b2380f3330242c0c';

// checking if the id is valid
// isValid takes one parameters like id and returns true if it exits in db
// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// our query to print the data about the specific provided id
//   using find()
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// using findOne() --> this returns only the first matches
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo', todo);
// });

// using foneById()
// Todo.findById({
//     _id: id
// }).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

/*******************************************************************/
// Users
var userId = '5ba9cc73a7dade52bca50354';

User.findById({_id: userId}).then((user) => {
    if (!user) {
        return console.log('User not found!');
    }
    console.log('User by id', user);
}, (e) => {
    console.log(e)
});