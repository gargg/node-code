const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be positive')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password includes password')
            }
        }
    }
})

// const me = new User({
//     name: '  Garima',
//     age: 40,
//     email: 'GG@gmail.com  ',
//     password: 'qwerty1'
// })
//
// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error: ', error)
// })

module.exports = User