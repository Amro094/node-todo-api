const express = require('express');
const bodyParser = require('body-parser');

// local
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

// ROUTES
app.post('/todos', (req, res) => {
    // console.log(req.body);

    // creating our todo
    var todo = new Todo({
        text: req.body.text
    });

    // save model to the database
    todo.save().then((doc) => {
        // sending back the todo
        // user will get info about the id, etc...
        res.send(doc);
    }, (err) => {
        // if somethig went wrong
        //    we gonna send back the err to the user
        res.status(400).send(err);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});


module.exports = {app};