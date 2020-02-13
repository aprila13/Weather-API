class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.descOther = document.getElementById('w-desc-other');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.high = document.getElementById('w-high');
    this.low = document.getElementById('w-low');
    this.visibilty = document.getElementById('w-visibilty');
  }

  paint(weather) {
    let weatherIcon = weather.weather[0].icon;
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].main;
    this.descOther.textContent = weather.weather[0].description;
    this.string.textContent = weather.main.temp.toFixed(0);
    this.icon.setAttribute('src', "http://openweathermap.org/img/w/" + weatherIcon + ".png")
    this.humidity.textContent = 'Relative Humidity: ' + weather.main.humidity.toFixed(0);
    this.visibilty.textContent = `Visibility: ${weather.visibility}`;
    this.feelsLike.textContent = 'Feels Like: ' + weather.main.feels_like.toFixed(0);
    this.high.textContent = 'High: ' + weather.main.temp_max.toFixed(0);
    this.low.textContent = 'Low: ' + weather.main.temp_min.toFixed(0);
  }
}