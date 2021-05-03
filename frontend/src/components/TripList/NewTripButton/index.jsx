import React from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

function NewTripButton() {
    const NewTripHandler = () => {
        console.log("bruh")
    };

  return (
    <Button onClick={() => NewTripHandler()} color="secondary" variant="contained">
      <AddIcon />
      new journey
    </Button>
  );
}

export default NewTripButton;
