require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

// User.findByIdAndUpdate('5cd2cb6f01f1937d9053614b', {age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => console.log(e))

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5cd2cb6f01f1937d9053614b', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false})
    return count
}

deleteTaskAndCount('5cd40b2d89f20c25f5b650df')
    .then((count) => console.log(count))
    .catch((e) => console.log(e))