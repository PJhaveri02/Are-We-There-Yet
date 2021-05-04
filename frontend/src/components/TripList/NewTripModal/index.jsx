import React, { useState } from "react";
import Searchbar from "./Searchbar";
import DestinationList from "./DestinationList";
import { makeStyles, Modal, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    width: 450,
    height: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function NewTripModal(props) {
  const { open, onCancel } = props;
  const classes = useStyles();

  const [destinations, setDestinations] = useState([]);
  const [title, setTitle] = useState("");

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

  const handleCloseModal = () => {
    setTitle("");
    setDestinations([]);
    onCancel();
  };

  return (
    <Modal className={classes.modal} open={open} onClose={handleCloseModal}>
      <div className={classes.paper}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <DestinationList destinations={destinations} />
        </div>

        <div>
          <Searchbar onDestinationSelect={onDestinationSelect} />
        </div>

        <div>
          <Button color="secondary" variant="contained">
            confirm
          </Button>
        </div>

        <div>
          <Button color="grey" variant="contained" onClick={handleCloseModal}>
            cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default NewTripModal;
