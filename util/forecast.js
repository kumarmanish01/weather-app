const request = require('request')

const forcast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=417189b65cab73facc7aea012018b6c8&query=' + latitude + ',' + longitude

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to Weather services', undefined)
        } else if (body.error) {
            callback('Unable to find Location', undefined)
        } else {
            callback(undefined, 'It is currently ' + body.current.temperature + ' degree out. It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forcast