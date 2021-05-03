import React from "react";
import MapVisualizer from "../components/map-visualiser/MapVisualiser";
import TripList from "../components/TripList";

function Homepage() {
    return (
        <div>
            <div>
                <TripList />
            </div>
            <div>
                <MapVisualizer />
            </div>
        </div>
    )
}

export default Homepage;