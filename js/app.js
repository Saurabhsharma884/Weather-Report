//init ui
const ui = new UI();

const storage = new Storage();
const weatherLocation = storage.getLocationData();

//  init weather obj
const weather = new Weather(weatherLocation);

document.addEventListener("DOMContentLoaded", getWeather);

// change location addEventListener
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;

  weather.changeLocation(city);
  storage.setLocationData(city);

  getWeather();

  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => {
      console.log(err);
    });
}