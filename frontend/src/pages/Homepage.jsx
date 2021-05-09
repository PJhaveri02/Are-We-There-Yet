import React, { createContext, useState } from "react";
import { defaultCenter } from "../components/map-visualiser/DefaultSettings";
import MapVisualizer from "../components/map-visualiser/MapVisualiser";
import Navbar from "../components/Navbar";
import useResources from "../hooks/useResources";
import styles from "./Homepage.module.css";

export const ResourceContext = createContext(1);

function Homepage() {
  const {
    trips,
    setTrips,
    trip,
    setTrip,
    loading,
    setLoading,
    version,
    setVersion,
    sliderPosition,
    setSliderPosition,
  } = useResources();

  const [center, setCenter] = useState(defaultCenter);

  return (
    <ResourceContext.Provider
      value={{
        trips,
        setTrips,
        trip,
        setTrip,
        loading,
        setLoading,
        version,
        setVersion,
        sliderPosition,
        setSliderPosition,
      }}
    >
      <div className={styles.Homepage}>
        <div className={styles.Navbar} >
          <Navbar
            trip={trip}
            setSliderPosition={setSliderPosition}
            setCenter={setCenter}
          />
        </div>

        <div className={styles.MapVisualizer}>
          <MapVisualizer
            center={center}
            setCenter={setCenter}
            sliderPosition={sliderPosition}
            setSliderPosition={setSliderPosition}
          />
        </div>
      </div>
    </ResourceContext.Provider>
  );
}

export default Homepage;
