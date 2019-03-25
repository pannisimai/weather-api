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
    let container = document.querySelector(".card-deck");
    const {summary} = currently;
    const { currently[summary], } = this.data;
  }
}

const BerlinWeather = new Forecast("52.520008,13.404954");
