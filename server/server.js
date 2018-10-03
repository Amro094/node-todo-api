const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

// local
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();
// setting up the env to the heroku port
// if app does not connect with the heroku, then 
//   will connec to the local port 3000
const port = process.env.PORT || 3000;

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

// creating dynamic url 
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    
    // validating the id
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    // find the id provided by user
    Todo.findById({_id: id}).then((todo) => {
        if (todo) {
            res.send({todo});
        } else {
            return res.status(404).send();
        }
    }).catch ((err) => {
        res.status(400).send();
    });
});

app.listen(3000, () => {
    console.log(`Started up at port ${port}`);
});


module.exports = {app};