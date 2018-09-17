const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    } 
    console.log('Connected to MongoDB sever successfully');

    const db = client.db('TodoApp');

    // fetching all data from Todos collection
    //   find() will return all the data from the database
    //   toArray() will return an array of documents or Promise

    // In this example the mongodb query will return the docs which the completed
    //   value is set to false
    //   eg. find({completed: false})
    //   eg. using id --> 
    /* db.collection('Todos').find({
        // query with specific id
        _id: new ObjectID('5b9da9074297f224e0eaf0b3')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 3));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    }); */

    // using count() method will tell us how many documents we have in 'Todos' collection
    /* db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    }); */


    // Some pratice
    /* db.collection('Users').find({name: 'Dimple'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 3));
    }, (err) => {
        console.log('Unable to tech users', err);
    }); */

    client.close();
});