// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // this code is identical to the code above
                                          //   we only distuctured the mongodb's MongoClient variable

// creating a new instance of ObjectID                                      
// var obj = new ObjectID();
// console.log(obj);

// object distructure
// eg. in ES6
/* var user = {name: 'Amro', age: 24}
var {name} = user;
console.log(name); */


// connect takes 2 args
// url and callback function
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    } 
    console.log('Connected to MongoDB sever successfully');
    const db = client.db('TodoApp');

    // insert new data into TodoApp database
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err)
    //     } 

    // ops will print the data inserted to the database
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // insert Users collection into TodoApp database
    // db.collection('Users').insertOne({
    //     _id: '123abc',
    //     name: 'Amrit',
    //     age: 24,
    //     location: 'Nanaimo'
    // }, (err, res) => {
    //     if (err) {
    //         console.log('Unable to insert user', err);
    //     }

    //     console.log(JSON.stringify(res.ops, undefined, 3));
    // });

    // close the connection with the mongodb server
    client.close();
});