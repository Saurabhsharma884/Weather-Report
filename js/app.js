//  init weather obj

const weather = new Weather("Delhi");

weather
  .getWeather()
  .then((results) => console.log(results))
  .catch((err) => console.log(err));
