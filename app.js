const geocode = require('./util/geocode')
const forecast = require('./util/forecast')

let location = ''
for(i = 2; i<process.argv.length; i++){
    location = location + process.argv[i] + ' ';
}
location = location.trim();

if(!location){
    console.log("Please enter a location...")
} else{
    geocode(location, (error, {latitude, longitude, location}) => {
        if(error){  return console.log(error)}
    
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){  return console.log(error)}
            
            console.log(location)
            console.log(forecastData)
        })
    })
}






















// geocode('Patna', (error, data) => {
    

//     if(error){
//         console.log('Error : ', error)
//     } else {
//         latitude = data.latitude
//         longitude = data.longitude
//         location = data.location
//         console.log('Location : ', location)

//         forcast(latitude, longitude, (error, data) => {

//             if(error) {
//                 console.log('Error : ', error)
//             } else {
//                 console.log('Weather : ', data)
//             }
//         })
//     }
// })
