const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default:false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

// const task1 = new Task({
//     description: '  This is task 1',
//     completed: false
// })
//
// task1.save().then(() => {
//     console.log(task1)
// }).catch((error) => {
//     console.log(error)
// })

module.exports = Task