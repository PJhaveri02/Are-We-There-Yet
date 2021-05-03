import React, { useState } from "react";
import Searchbar from "./Searchbar";
import DestinationList from "./DestinationList";
import { Modal } from "@material-ui/core";

function NewTripModal(props) {
  // const { onCancel } = props;
  const { open, onCancel } = props;
  const [destinations, setDestinations] = useState([]);

  const onDestinationSelect = (destination, lat, lng) => {
    setDestinations([
      ...destinations,
      {
        startDate: "2021-04-27",
        locationName: destination,
        timeSpent: 1,
        lat: lat,
        lng: lng,
      },
    ]);
  };

  return (
    <Modal open={open} onClose={onCancel}>
      <div>
        <div>
          {/* TODO name, start date */}
          <DestinationList destinations={destinations} />
          <Searchbar onDestinationSelect={onDestinationSelect} />
        </div>
      </div>
    </Modal>
  );
}

export default NewTripModal;
