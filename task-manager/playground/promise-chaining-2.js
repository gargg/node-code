require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5cd2d4931023e482e8971128').then((task) => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((count) => console.log(count)).catch((e) => console.log(e))