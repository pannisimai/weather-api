import "@scss/styles.scss";

class Forecast {
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.render();
  }

  render() {
    const ApiUrl = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4c6058309d7af063459dd16dc8b101b8/${
      this.latitude
    },${this.longitude}?units=si`;

    //berlin
    //https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4c6058309d7af063459dd16dc8b101b8/52.520008,13.404954?units=si
    fetch(ApiUrl)
      .then(response => response.json())
      .then(data => {
        this.data = data;
        console.log(this.data);
        this.print(data);
      })
      .catch(err => console.log(`oh no!! ${err}`));
  }

  icons(currentlyIcon) {
    switch (currentlyIcon) {
      case "snow":
        return `<i class="icon fas fa-snowman"></i>`;
        break;
      case "clear-day":
        return `<i class="icon fas fa-sun"></i>`;
        break;
      case "clear-night":
        return `<i class="icon fas fa-moon"></i>`;
        break;
      case "rain":
        return `<i class="icon fas fa-cloud-showers-heavy"></i>`;
        break;
      case "sleet":
        return `<i class="icon fas fa-snowflake"></i>`;
        break;
      case "wind":
        return `<i class="icon fas fa-wind"></i> `;
        break;
      case "fog":
        return `<i class="icon fas fa-smog"></i>`;
        break;
      case "cloudy":
        return `<i class="icon fas fa-cloud"></i>`;
        break;
      case "partly-cloudy-day":
        return `<i class="icon fas fa-cloud-sun"></i>`;
        break;
      case "partly-cloudy-night":
        return `<i class="icon fas fa-wind"></i>`;
        break;
    }
  }

  print() {
    //cards

    let description = document.querySelector(".lead");
    let dailyForecast = document.querySelector(".daily");

    const { currently, daily } = this.data;
    const {
      summary: currentlySummary,
      icon: currentlyIcon,
      temperature,
      windSpeed
    } = currently;
    const { summary: dailySummary, icon: dailyIcon, data } = daily;

    //get the weekdays
    const dailyContent = data
      .slice(1)
      .map(day => {
        const {
          summary,
          icon,
          sunriseTime,
          sunsetTime,
          moonPhase,
          time,
          temperatureHigh
        } = day;
        const date = new Date(time * 1000);
        const weekday = date.getDay();
        const weekdays = new Array(
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        );
        return `
      <div class="day tomorrow"><h4>${weekdays[weekday]}</h4>
      <div class="iconDaily">${this.icons(icon)}</div>
      <p>${summary}</p>
      <p class="temp">${temperatureHigh.toFixed(0)} °C</p>
      </div>
      `;
      })
      .join("");

    const content = `
    <div class="icon">${this.icons(currentlyIcon)}</div>
    <p>${currentlySummary}</p>
    <p class="temp">${temperature.toFixed(0)} °C</p>
    <h6>${dailySummary}</h6>
    `;

    description.innerHTML = content;
    dailyForecast.innerHTML = dailyContent;
  }
}

const HerzeliyaWeather = new Forecast("32.1624", "34.8447");

class Forecast2 {
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.render();
  }

  render() {
    const ApiUrl = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4c6058309d7af063459dd16dc8b101b8/${
      this.latitude
    },${this.longitude}`;

    fetch(ApiUrl)
      .then(response => response.json())
      .then(data => {
        this.data = data;
        console.log(this.data);
        this.print(data);
      })
      .catch(err => console.log(`oh no!! ${err}`));
  }

  icons(currentlyIcon) {
    switch (currentlyIcon) {
      case "snow":
        return `<i class="fas fa-snowman"></i>`;
        break;
      case "clear-day":
        return `<i class="fas fa-sun"></i>`;
        break;
      case "clear-night":
        return `<i class="fas fa-moon"></i>`;
        break;
      case "rain":
        return `<i class="fas fa-cloud-showers-heavy"></i>`;
        break;
      case "sleet":
        return `<i class="fas fa-snowflake"></i>`;
        break;
      case "wind":
        return `<i class="fas fa-wind"></i> `;
        break;
      case "fog":
        return `<i class="fas fa-smog"></i>`;
        break;
      case "cloudy":
        return `<i class="fas fa-cloud"></i>`;
        break;
      case "partly-cloudy-day":
        return `<i class="fas fa-cloud-sun"></i>`;
        break;
      case "partly-cloudy-night":
        return `<i class="fas fa-wind"></i>`;
        break;
    }
  }

  print() {
    //cards

    let description = document.querySelector("#londoncard");

    const { currently, daily } = this.data;
    const {
      summary: currentlySummary,
      icon: currentlyIcon,
      temperature,
      windSpeed
    } = currently;
    const { summary: dailySummary, icon: dailyIcon, data } = daily;
    const { summary, icon, sunriseTime, sunsetTime, moonPhase } = data;

    const content = `<p>${currentlySummary}</p>
    <p>${this.icons(currentlyIcon)}</p>
    <p>${((5 / 9) * (temperature - 32)).toFixed(0)} °C</p>
    `;

    description.innerHTML = content;
  }
}

const LondonWeather = new Forecast2("51.509865", "-0.118092");

class Forecast3 {
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.render();
  }

  render() {
    const ApiUrl = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4c6058309d7af063459dd16dc8b101b8/${
      this.latitude
    },${this.longitude}`;

    fetch(ApiUrl)
      .then(response => response.json())
      .then(data => {
        this.data = data;
        console.log(this.data);
        this.print(data);
      })
      .catch(err => console.log(`oh no!! ${err}`));
  }
  icons(currentlyIcon) {
    switch (currentlyIcon) {
      case "snow":
        return `<i class="fas fa-snowman"></i>`;
        break;
      case "clear-day":
        return `<i class="fas fa-sun"></i>`;
        break;
      case "clear-night":
        return `<i class="fas fa-moon"></i>`;
        break;
      case "rain":
        return `<i class="fas fa-cloud-showers-heavy"></i>`;
        break;
      case "sleet":
        return `<i class="fas fa-snowflake"></i>`;
        break;
      case "wind":
        return `<i class="fas fa-wind"></i> `;
        break;
      case "fog":
        return `<i class="fas fa-smog"></i>`;
        break;
      case "cloudy":
        return `<i class="fas fa-cloud"></i>`;
        break;
      case "partly-cloudy-day":
        return `<i class="fas fa-cloud-sun"></i>`;
        break;
      case "partly-cloudy-night":
        return `<i class="fas fa-wind"></i>`;
        break;
    }
  }
  print() {
    //cards

    let description = document.querySelector("#budapestcard");

    const { currently, daily } = this.data;
    const {
      summary: currentlySummary,
      icon: currentlyIcon,
      temperature,
      windSpeed
    } = currently;
    const { summary: dailySummary, icon: dailyIcon, data } = daily;
    const { summary, icon, sunriseTime, sunsetTime, moonPhase } = data;

    const content = `<p>${currentlySummary}</p>
    <p>${this.icons(currentlyIcon)}</p>
    <p>${((5 / 9) * (temperature - 32)).toFixed(0)} °C</p>
    `;

    description.innerHTML = content;
  }
}

const BudapestWeather = new Forecast3("47.4979", "19.0402");

class Forecast4 {
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.render();
  }

  render() {
    const ApiUrl = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4c6058309d7af063459dd16dc8b101b8/${
      this.latitude
    },${this.longitude}?units=si`;

    fetch(ApiUrl)
      .then(response => response.json())
      .then(data => {
        this.data = data;
        console.log(this.data);
        this.print(data);
      })
      .catch(err => console.log(`oh no!! ${err}`));
  }
  icons(currentlyIcon) {
    switch (currentlyIcon) {
      case "snow":
        return `<i class="fas fa-snowman"></i>`;
        break;
      case "clear-day":
        return `<i class="fas fa-sun"></i>`;
        break;
      case "clear-night":
        return `<i class="fas fa-moon"></i>`;
        break;
      case "rain":
        return `<i class="fas fa-cloud-showers-heavy"></i>`;
        break;
      case "sleet":
        return `<i class="fas fa-snowflake"></i>`;
        break;
      case "wind":
        return `<i class="fas fa-wind"></i> `;
        break;
      case "fog":
        return `<i class="fas fa-smog"></i>`;
        break;
      case "cloudy":
        return `<i class="fas fa-cloud"></i>`;
        break;
      case "partly-cloudy-day":
        return `<i class="fas fa-cloud-sun"></i>`;
        break;
      case "partly-cloudy-night":
        return `<i class="fas fa-wind"></i>`;
        break;
    }
  }
  print() {
    //cards

    let description = document.querySelector("#lacard");

    const { currently, daily } = this.data;
    const {
      summary: currentlySummary,
      icon: currentlyIcon,
      temperature,
      windSpeed
    } = currently;
    const { summary: dailySummary, icon: dailyIcon, data } = daily;
    const { summary, icon, sunriseTime, sunsetTime, moonPhase } = data;

    const content = `<p>${currentlySummary}</p>
    <p>${this.icons(currentlyIcon)}</p>
    <p>${temperature.toFixed(0)} °C</p>
    `;

    description.innerHTML = content;
  }
}

const LAWeather = new Forecast4("34.0522", "118.2437");
