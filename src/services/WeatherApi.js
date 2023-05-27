import axios from "axios";

export async function CurrentWeather({ location, lat, long }) {
  const url = `http://api.weatherapi.com/v1/current.json?key=559ca6d5b9a64d2eaf181356232505&q=${
    location === null ? lat + "," + long : location
  }&aqi=no`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// import React, { useEffect } from "react";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { setApiData } from "../state/Actions";

// function CurrentWeather({ location, lat, long }) {
//   const dispatch = useDispatch();
//   const url = `http://api.weatherapi.com/v1/current.json?key=559ca6d5b9a64d2eaf181356232505&q=${
//     location === null ? lat + "," + long : location
//   }&aqi=no`;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(url);
//         dispatch(setApiData(response.data));
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, [dispatch, url]);

//   return null; // or return any JSX you want to render
// }

// export default CurrentWeather;
