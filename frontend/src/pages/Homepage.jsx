import React, { createContext, useState } from "react";
import MapVisualizer from "../components/map-visualiser/MapVisualiser";
import TripList from "../components/TripList";
import styles from "./Homepage.module.css";
import LogoutButton from "../components/signing-pages/LogoutButton";
import useResources from "../hooks/useResources";
import { defaultCenter } from "../components/map-visualiser/DefaultSettings";
import Slider from "../components/map-visualiser/Slider";

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
        <div className={styles.TripList}>
          <h1 style={{ textAlign: "center" }}>Trips</h1>
          <TripList />

          {trip ? (
            <Slider
              step={1}
              stops={trip.stops}
              onChangeSlider={setSliderPosition}
              setCenter={setCenter}
            />
          ) : null}

          <div className={styles.LogoutButton}>
            <LogoutButton />
          </div>
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
