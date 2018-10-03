const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

// importing server file and models/todo file
const {app} = require('./../server');
const {Todo} = require('./../models/todo');


// making an array of objects of dumy todos
const todos = [{
    _id: new ObjectID(),
    text: 'First test todo'
}, {
    _id: new ObjectID(),
    text: 'Second test todo'
}];

// this will make an assemption to think we have no data 
//   in the Todos collection
beforeEach((done) => {
    // this will remove all the todos from the database
    Todo.remove({}).then(() => {
        // insertMany is a mongodb method that adds collection to the database
        //   in this case we will add todos array
        return Todo.insertMany(todos)
    }).then(() => done());
});


/* POST ROUTE TEST CASES */
describe('POST /todos', () => {

    // test case 1
    it('should create a new todo', (done) => {
        var text = 'Test todo text';

        request(app)
          .post('/todos')
          // sending data using send()
          .send({text: text})
          .expect(200)
          .expect((res) => {
              expect(res.body.text).toBe(text);
          })
          .end((err, res) => {
              if (err) {
                  return done(err);
              }

              // find() will find all the todos from the database
              // this will find in the database with the specific text given
              Todo.find({text}).then((todos) => {
                  expect(todos.length).toBe(1);
                  expect(todos[0].text).toBe(text);
                  done();
              }).catch((err) => done(err));
          });
    });

    // test case 2
    it('should not create todo with invalid body data', (done) => {
        request(app)
            .post('/todos')
            // sending data using send()
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                // find() will find all the todos from the database
                Todo.find().then((todos) => {
                    // the length of the database should be 2 since we added an array of Object above
                    expect(todos.length).toBe(2);
                    done();
                }).catch((err) => done(err));
            });
    });
});

/* GET ROUTE test cases */
describe('GET /todos', () => {
    
    // test case 1
    it('should get all todos', (done)=> {
        request(app)
          .get('/todos')
          .expect(200)
          .expect((res) => {
              // this will check the length of the 
              expect(res.body.todos.length).toBe(2);
          })
          .end(done);
    });
});

/* GET /todos/:id ROUTE test cases */
describe('GET /todos/:id', () => {

    // test case 1
    it('should return todo doc', (done) => {
        request(app)
           .get(`/todos/${todos[0]._id.toHexString()}`)
           .expect(200)
           .expect((res) => {
               expect(res.body.todo.text).toBe(todos[0].text);
           })
           .end(done);
    });

    // test case 2
    it('should return 404 if todo not found', (done) => {
        var hexId = new ObjectID().toHexString();

        request(app)
           .get(`/todos/${hexId}`)
           .expect(404)
           .end(done);
    });

    // test case 3
    it('should return 404 for non-object ids', (done) => {
        request(app)
           .get('/todos/123abc')
           .expect(404)
           .end(done);
    });
});