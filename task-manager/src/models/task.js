const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default:false
    }
})

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