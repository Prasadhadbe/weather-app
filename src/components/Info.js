import React, { useState } from "react";
import FetchData from "../utils/getLocation";
import { handleButtonPress } from "../utils/handleClick";
import { useDispatch } from "react-redux";
import { setApiData } from "../state/Actions";

export default function Info() {
  const [location, setLocation] = useState("");

  const dispatch = useDispatch();

  async function handleButtonDown(event) {
    if (event.key === "Enter") {
      try {
        const data = await handleButtonPress(event, location);
        dispatch(setApiData(data));
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="weatherapp__search">
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyDown={(event) => handleButtonDown(event)}
        placeholder="Enter Location"
        type="text"
      />
      <button onClick={FetchData(dispatch)}>📍</button>

      {/* <h1>{data}</h1> */}
    </div>
  );
}
