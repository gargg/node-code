const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/72e694f853470476ef4c613ad8afb8eb/' + latitude + ',' + longitude + '?units=si'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const data = body.currently.summary + '. It is currently ' + body.currently.temperature + ' outside. There is '+ body.currently.precipProbability + '% chance of rain'
            callback(undefined, data)
        }
    } )
}

module.exports = forecast
