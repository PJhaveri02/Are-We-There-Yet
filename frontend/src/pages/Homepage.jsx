import React from "react";
import MapVisualizer from "../components/map-visualiser/MapVisualiser";
import TripList from "../components/TripList";
import styles from "./Homepage.module.css";

function Homepage() {
    return (
        <div className={styles.Homepage}>
            <div className={styles.TripList}>
                <TripList />
            </div>
            <div className={styles.MapVisualizer}>
                <MapVisualizer />
            </div>
        </div>
    )
}

export default Homepage;