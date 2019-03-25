import "@scss/styles.scss";

class Forecast {
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.render();
  }

  render() {
    const ApiUrl = `https://api.darksky.net/forecast/4c6058309d7af063459dd16dc8b101b8/52.520008,13.404954`;

    fetch(ApiUrl)
      .then(response => response.json())
      .then(data => {
        this.data = data;
        console.log(this.data);
        this.print(data);
      })
      .catch(err => console.log(`oh no!! ${err}`));
  }
  print() {
    //cards
    let container = document.querySelector("#budapest");
    let description = document.querySelector(".lead");

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
    <p>${currentlyIcon}</p>
    <p>${((5 / 9) * (temperature - 32)).toFixed(0)} °C</p>
    `;
    const cards = `<p></p>`;
    description.innerHTML = content;
  }
}

const BerlinWeather = new Forecast("52.520008,13.404954");
const LondonWeather = new Fore();
