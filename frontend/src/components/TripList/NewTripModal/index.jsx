import React, { useState, useContext } from "react";
import Searchbar from "./Searchbar";
import DestinationList from "./DestinationList";
import moment from "moment";
import { makeStyles, Modal, Button, TextField } from "@material-ui/core";
import { AuthContext } from "../../../App";
import { createTrip } from "../../../api/crudOperations";

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
  const currentDate = moment().format("YYYY-MM-DD");
  const [user] = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [destinations, setDestinations] = useState([]);

  const onDestinationSelect = (destination, lat, lng) => {
    setDestinations([
      ...destinations,
      {
        startDate: selectedDate,
        locationName: destination,
        timeSpent: 1,
        lat: lat,
        lng: lng,
      },
    ]);
  };

  const handleCloseModal = () => {
    setTitle("");
    setDescription("");
    setSelectedDate(currentDate);
    setDestinations([]);
    onCancel();
  };

  const handleConfirm = () => {
    console.log(title);
    console.log(selectedDate);
    console.log(destinations);

    createTrip(user.id, {
      title: title,
      description: "",
      stops: destinations,
      userID: user.id,
    })

    handleCloseModal();
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
          <label>Description: </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label>Date: </label>
          <TextField
            fullWidth
            variant="outlined"
            type="date"
            defaultValue={currentDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        <div>
          <DestinationList destinations={destinations} />
        </div>

        <div>
          <Searchbar onDestinationSelect={onDestinationSelect} />
        </div>

        <div>
          <Button color="secondary" variant="contained" onClick={handleConfirm}>
            confirm
          </Button>
        </div>

        <div>
          <Button color="default" variant="contained" onClick={handleCloseModal}>
            cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default NewTripModal;
