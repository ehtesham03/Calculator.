// // // console.log("Hello world!");
// let id = 'f6ff2dc49c51b6b97271d341d39dcd53';
//  let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=lahore' ;



//         function checkweather(){
//             const weather = fetch(url + '&appid=${id}')
//             weather.then(response => response.json());
//             console.log(weather);


//         }
//         checkweather();
// let id = 'f6ff2dc49c51b6b97271d341d39dcd53';
// let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=lahore';

// function checkWeather() {
//     const weatherPromise = fetch(`${url}&appid=${id}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         });

//     weatherPromise
//         .then(data => {
//             console.log('Weather Data:', data);
//         })
//         .catch(error => {
//             console.error('Error fetching weather data:', error);
//         });

//     return weatherPromise;
// }



// const weatherPromise = checkWeather();
// checkTemperature(weatherPromise);

let id = 'f6ff2dc49c51b6b97271d341d39dcd53';
let url = `https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=${id}`;

function checkWeather() {
    // Fetch weather data from the API
    fetch(url)
        .then(response => {
           
            return response.json();
        })
        .then(data => {
            
            console.log('  Weather Data : ', data.name, data.coord, (data.main.temp-273), data.main.humidity, data.main.checkWeather, data.main  );
        })

}

checkWeather();