const path = require('path')
const express = require('express')
const hbs = require('hbs')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

// express config
const app = express()
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


//setup handlebars
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// static directory to use
app.use(express.static(path.join(__dirname, '../public')))
//app.com
//app.com/help
//app.com/about


// app.get('', (req, res) => {
//     res.send('<h1>Weather</h1>')
// })

// app.get('/help', (req, res) => {
//     res.send({
//         name: 'Garima',
//         age: '40'
//     })
// })

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'Garima'
    })  //important to delete static index.html
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Garima'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        name: 'Garima',
        helpText: 'This is Help Page'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Its hot',
        location: 'London'
    })
})

app.get('/help/*', (req, res) => {
    res.render('error', {
        title: '404',
        name: 'Garima',
        errorText: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('error', {
        title: '404',
        name: 'Garima',
        errorText: 'My 404 page'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})