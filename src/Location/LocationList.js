import React, { useState, useEffect } from "react";
import { addLocation } from "./LocationManager";
import { Location } from "./LocationCard";
import { useHistory } from "react-router";

export const GetLocalation = () => {
  const [location, setLocation] = useState([]);

  const history = useHistory()
  const locations = () => {
    //When the data comes I set the state and the location in the useState will have the same information.
    addLocation().then((allLocation) => {
      setLocation(allLocation);
    });
  };

  useEffect(() => {
    locations();
  }, []);

  return (
    <div>
        <button onClick={() =>{history.push("/locations/create")}}>Add New Location</button>
      {location.map((local) => (
        <Location key={local.id} data={local} />
      ))}
    </div>
  );
};
