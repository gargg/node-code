//CRUD
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id)
// console.log(id.id.length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL,{ useNewUrlParser:true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)  //automatically creates DB

    // Insert
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Some name',
    //     age: 30
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: "Name 1",
    //         age: 20
    //     },
    //     {
    //         name: "Name 2",
    //         age: 30
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         console.log('Unable to insert docs')
    //     }
    //
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'first description',
    //         completed: true
    //     },
    //     {
    //         description: 'second task',
    //         completed: true
    //     },
    //     {
    //         description: 'third task',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         console.log('Unable to insert')
    //     }
    //
    //     console.log(result.ops)
    // })

    //Get

    // db.collection('users').findOne({name: 'Name 1'}, (error, user) => {
    //     if (error) {
    //         console.log('Unable to get user')
    //     }
    //     console.log(user)
    // })
    //
    // db.collection('users').findOne({_id: new ObjectID("5cd15be80d3b952254d65322")}, (error, user) => {
    //     if (error) {
    //         console.log('Unable to get user')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({age: 30}).toArray((error, users) => {
    //     console.log(users)
    // })
    //
    // db.collection('users').find({age: 30}).count((error, count) => {
    //     console.log(count)
    // })


    // Update

    // const updatePromise = db.collection('users').updateOne({_id: new ObjectID("5ccf1c14b591816b12c6243f")},
    //     {
    //         $set: {
    //             name: 'Mike'
    //         }
    //     })
    //
    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // const updatePromise = db.collection('users').updateOne({_id: new ObjectID("5ccf1caf7be5616b4754bcc8")},
    //     {
    //         $inc: {
    //             age: -1
    //         }
    //     })
    //
    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // const updatePromise = db.collection('tasks').updateMany({completed: false},
    //     {
    //         $set: {
    //             completed: true
    //         }
    //     })
    //
    // updatePromise.then((result) => {
    //     console.log(result.modifiedCount)
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // Delete
    // db.collection('users').deleteMany({age: 30}).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({description: 'second task'}).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})