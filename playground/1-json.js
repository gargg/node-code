const fs = require('fs')

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }
//
// const bookJson = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJson)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()

const data = JSON.parse(dataJson)

data.name = 'Garima'
data.planet = 'Mars'

const newJson = JSON.stringify(data)
console.log(newJson)

fs.writeFileSync('1-json.json', newJson)