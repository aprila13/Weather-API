//Init Storage
const storage = new Storage();

//get stored location data
const weatherLocation = storage.getLocationData();

//Init weather class
const weather = new Weather(weatherLocation.city, weatherLocation.state);

//Init UI
const ui = new UI();


//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

// weather.changeLocation('Miami', "FL");
weather.changeLocation(city, state);

//Set location in local storage
storage.setLocationData(city, state);

//Get and display weather
getWeather();

$('#locModal').modal('hide');
});

function getWeather(){
    weather.getWeather()// method from weather class
    .then(results =>{
      ui.paint(results);
    })
    .catch(err => console.log(err));
  }