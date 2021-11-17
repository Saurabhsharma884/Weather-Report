//  init weather obj

const weather = new Weather("Delhi");


document.addEventListener('DOMContentLoaded',getWeather)


function getWeather() {
    weather
    .getWeather()
    .then((results) => console.log(results))
    .catch((err) => console.log(err));
  
}
