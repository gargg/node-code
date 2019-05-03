const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

// express config
const app = express()
const port = process.env.PORT || 3000  //provided by Heroku
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
    if (!req.query.address) {
        return res.send({
            error: 'Address must be provided'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => { //using destructuring
        if (error) {
            return res.send({error})
        }


        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({error})
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'you must provide search term'
        })
    }
    res.send({
        products:[]
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

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})