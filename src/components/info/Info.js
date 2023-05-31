import React, { useState, useEffect } from "react";
import FetchData from "../../utils/getLocation";
import { handleButtonPress } from "../../utils/handleClick";
import { useDispatch } from "react-redux";
import { setApiData } from "../../state/Actions";
import "./Info.css";
import { useSelector } from "react-redux";

export default function Info() {
  const data = useSelector((state) => state.apiData);
  const [location, setLocation] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    FetchData(dispatch);
  }, [dispatch]);

  async function handleButtonDown(event, newLocation) {
    if (event.key === "Enter" || event.type === "click") {
      try {
        const data = await handleButtonPress(event, newLocation ?? location);
        dispatch(setApiData(data));
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="info">
      <div className="weatherapp__search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={(event) => handleButtonDown(event)}
          placeholder="Enter Location"
          type="text"
        />
        <button onClick={(event) => handleButtonDown(event)}>🔍</button>
      </div>
      <div className="weatherapp__search-city_names">
        <button
          onClick={(event) => {
            handleButtonDown(event, "pune");
          }}
        >
          Pune
        </button>
        <button
          onClick={(event) => {
            handleButtonDown(event, "Mumbai");
          }}
        >
          Mumbai
        </button>
        <button
          onClick={(event) => {
            handleButtonDown(event, "New Delhi");
          }}
        >
          New Delhi
        </button>
        <button
          onClick={(event) => {
            handleButtonDown(event, "Kolkata");
          }}
        >
          Kolkata
        </button>
      </div>
      <hr />
      <div className="weatherapp__search-weather_details">
        <h3>Weather Details</h3>
        <div className="weatherapp__search-weather_details-details">
          <div className="weatherapp__search-weather_details-title">
            <h3>Cloudy</h3>
            <h3>Humidity</h3>
            <h3>Wind</h3>
          </div>
          <div className="weatherapp__search-weather_details-data">
            <h3>{data && data.current ? data.current.cloud + "%" : ""}</h3>
            <h3>{data && data.current ? data.current.humidity + "%" : ""}</h3>
            <h3>
              {data && data.current ? data.current.wind_kph + "km/h" : ""}
            </h3>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
