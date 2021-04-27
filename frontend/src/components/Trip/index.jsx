import React, {useState} from "react";
import { useLoadScript } from "@react-google-maps/api";
import Searchbar from "./Searchbar";
import DestinationList from "./DestinationList";

function Trip () {

    const libraries = ["places"];

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    })

    const [destinations, setDestinations] = useState([]);

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading...";

    const onDestinationSelect = (destination) => {
        setDestinations([...destinations, {name: destination}]);
    }

    return <div>
        <Searchbar onDestinationSelect={onDestinationSelect} />
        <DestinationList destinations={destinations} />
    </div>
}

export default Trip;