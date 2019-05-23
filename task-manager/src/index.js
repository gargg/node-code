const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is under maintenance')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


// // ******* Upload files *********
// const multer = require('multer')
//
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000,
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('File must be Word doc'))
//         }
//
//         cb(undefined, true)
//     }
// })
//
// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error:error.message})
// })

// ******* Populate data by id *********
// const Task = require('./models/task')
// const User = require('./models/user')
//
// const main = async () => {
//     // const task = await Task.findById('5cdd4dc555f0689a42cada77')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     // const user = await User.findById('5cdd4d002e0fc899d62de1ee')
//     // await user.populate('tasks').execPopulate()
//     // console.log(user.tasks)
//
// }
//
// main()


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

