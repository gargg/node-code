const https = require('https')

const url = 'https://api.darksky.net/forecast/72e694f853470476ef4c613ad8afb8eb/' + '40,-75' + '?units=si'

const request = https.request(url, (response) => {

    let data = '' //since data is going to change
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end',() =>{
        const body = JSON.parse(data)
        console.log(body)

    })
})

request.on('error', (error) => {
    console.log('An error: ' + error)
})

request.end()