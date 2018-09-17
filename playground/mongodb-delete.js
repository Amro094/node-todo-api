const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB sever successfully');

    const db = client.db('TodoApp');

    // deleteMany
    /* db.collection('Todos').deleteMany({text: 'lunch'}).then((result) => {
        console.log(result);
    }); */

    // deleteOne --> works same as deleteMany except it deletes the first one
    /* db.collection('Todos').deleteOne({text: 'lunch'}).then((res) => {
        console.log(res);
    }); */

    // findOneAndDelete
    /* db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
        console.log(res);
    }); */

    // Users colleciton
    // db.collection('Users').deleteMany({name: 'Amrit'});

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b9f3b52a16cf9e1250c2f5f')
    }).then((res) => {
        console.log(JSON.stringify(res, undefined, 3));
    });

    client.close();
});
            