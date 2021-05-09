import React from "react";
import TripList from "../TripList";
import Slider from "../map-visualiser/Slider";
import LogoutButton from "../signing-pages/LogoutButton";
import styles from "./Navbar.module.css";

function Navbar(props) {
  const { trip, setSliderPosition, setCenter } = props;

  return (
    <div>
      <h1 className={styles.Title}>Trips</h1>

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
  );
}

export default Navbar;
