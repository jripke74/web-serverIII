const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/aada64998500b94d2f2e094441e903ea/${latitude},${longitude}?/lang=en`

  request({url: url, json: true}, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service', undefined)
    } else if (body.error) {
      callback('Unable to find location.', undefined)
    } else {
      callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of snow.`)
    }
  })
}

module.exports = forecast