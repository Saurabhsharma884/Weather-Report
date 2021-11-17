class Weather {
  constructor(city) {
    this.apiKey = "abc81f76604441d6bf9175305211711";
    this.city = city;
  }
  // fetch weather

  async getWeather() {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}&aqi=yes`
    );

    const responseData = await response.json();

    return responseData.current;
  }

  //   change weather location
  changeLocation(city) {
    this.city = city;
  }
}
