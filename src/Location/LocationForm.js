import React, { useState } from "react";
import { newLocation } from "./LocationManager";
import { useHistory } from "react-router";

export const NewLocation = () => {
  const [location, setLocation] = useState({
    name: "",
    address: "",
  });

  const history = useHistory();

  const handleControlledInputChange = (event) => {
      event.preventDefault()
    const copy = {...location}
    let val = event.target.value
    if(event.target.id.includes("Id"))
    {
        val=parseInt(val)
    }
    copy[event.target.id]= val
    setLocation(copy)
  };

  const handleSaveLocation = (evt) => {
evt.preventDefault()
    newLocation(location).then(() => history.push("/locations"));
  };

  return (
    <form className="location-form">
      <input
        type="text"
        value={location.name}
        id="name"
        placeholder="Type your new location"
        onChange={handleControlledInputChange}></input>

      <input
        type="text"
        value={location.address}
        id="address"
        placeholder="Type your new address"
        onChange={handleControlledInputChange}></input>

      <button className="btn" onClick={handleSaveLocation}>
        Save Location
      </button>
    </form>
  );
};
