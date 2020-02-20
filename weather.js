class Weather {
  constructor(city, state){
    this.apiKey = 'e118076e06fe3818d9fc7fd3d9f00b10';
    this.city = city;
    this.state = state;
  }

  //Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=imperial&APPID=e118076e06fe3818d9fc7fd3d9f00b10`);

    const responseData = await response.json();
    console.log(responseData)
    return responseData;
  }

  //Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
