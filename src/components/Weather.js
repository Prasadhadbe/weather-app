import React from "react";
import { useSelector } from "react-redux";

const Weather = () => {
  const data = useSelector((state) => state.apiData);

  return (
    <div className="weatherapp__content">
      <h1>{data && data.current ? data.current.temp_c + "°" : ""}</h1>
      <div className="weatherapp__content-location-time">
        <h2>{data && data.location ? data.location.name : ""}</h2>
        <p>{data && data.location ? data.location.localtime : ""}</p>
      </div>
      <div className="weatherapp__content-icon">
        {data && data.current && data.current.condition ? (
          <img src={data.current.condition.icon} alt="" />
        ) : null}
        <p>
          {data && data.current && data.current.condition
            ? data.current.condition.text
            : ""}
        </p>
      </div>
    </div>
  );
};

export default Weather;
