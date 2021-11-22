class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.uv = document.getElementById("w-uv");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = `${weather.location.name},${weather.location.region}`;
    this.desc.textContent = weather.current.condition.text;
    this.string.textContent = `${weather.current.temp_c} \u00B0C`;
    this.icon.setAttribute("src", weather.current.condition.icon);
    this.humidity.textContent = `Relative Humidity : ${weather.current.humidity}%`;
    this.feelsLike.textContent = `Feels Like : ${weather.current.feelslike_c} \u00B0C`;
    this.uv.textContent = `UV : ${weather.current.uv}`;
    this.wind.textContent = `Wind Speed : ${weather.current.wind_kph} mph`;
    const aqi = weather.current.air_quality["us-epa-index"];
    console.log(aqi)
    this.setAQI(aqi);
  }

  setAQI(aqi) {
    var aqiBox = document.getElementById("aqi-box");
    switch (aqi) {
      case 1:
        aqiBox.style.backgroundColor = "rgb(0,176,80)";
        aqiBox.innerText="GOOD"
        break;
      case 2:
        aqiBox.style.backgroundColor = "rgb(102,153,0)";
        aqiBox.innerText="SATISFACTORY"
        break;
      case 3:
        aqiBox.style.backgroundColor = "rgb(229,184,183)";
        aqiBox.innerText="MODERATE"
        break;
      case 4:
        aqiBox.style.backgroundColor = "rgb(255,192,0)";
        aqiBox.innerText="POOR"
        break;
      case 5:
        aqiBox.style.backgroundColor = "rgb(255,0,0)";
        aqiBox.innerText="VERY POOR"
        break;

      default:
        aqiBox.style.backgroundColor = "rgb(192,0,0)";
        aqiBox.innerText="SEVERE"
        break;
    }
  }
}
