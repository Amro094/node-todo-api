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
    
    // Todos collection
    /* db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5b9f2a8ea16cf9e1250c2e07')
    },{
       $set: {
           completed: true
       } 
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    }); */

    // Users collection
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b9f20efa16cf9e1250c2cb8')
    }, {
        $set: {
            name: 'Amrit'
        },
        $inc: { 
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    });

    client.close();
});