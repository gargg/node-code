const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode(process.argv[2], (error, {latitude, longitude, location}) => { //using destructuring
    if (error) {
        return console.log('Error', error)
    }


    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log('Error', error)
        }
        console.log('Location: ', location)
        console.log('Forecast: ', forecastData)
    })
})
