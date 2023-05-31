import { CurrentWeather } from "../services/WeatherApi";
// import { setApiData } from "../state/Actions";

export const handleButtonPress = async (event, location) => {
  if (event.key === "Enter" || event.type === "click") {
    const response = await CurrentWeather({
      location: location,
    });
    // setData(response);
    console.log(response);
    // setApiData(response);
    return response;
  }
};
