import { CurrentWeather } from "../services/WeatherApi";
import { setApiData } from "../state/Actions";

async function FetchData(dispatch) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => Success(position, dispatch),
      error
    );
  } else {
    console.log("Geolocation not supported");
  }

  async function Success(position, dispatch) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const response = await CurrentWeather({
      location: null,
      lat: latitude,
      long: longitude,
    });

    console.log("here");
    console.log(response);
    dispatch(setApiData(response));
  }

  function error() {
    console.log("Unable to retrieve your location");
  }
}

export default FetchData;
