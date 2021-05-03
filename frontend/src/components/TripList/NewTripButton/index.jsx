import React from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

function NewTripButton(props) {
  const {onClick} = props;

  return (
    <Button onClick={() => onClick()} color="secondary" variant="contained">
      <AddIcon />
      new journey
    </Button>
  );
}

export default NewTripButton;
