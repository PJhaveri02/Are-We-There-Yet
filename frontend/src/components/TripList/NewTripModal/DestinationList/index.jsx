import React from "react";
import { List, ListItem } from "@material-ui/core";

function DestinationList(props) {
  const { destinations } = props;
  return (
    <List>
      {destinations && destinations.length > 0 ? (
        destinations.map((destination, index) => (
          <ListItem key={index}>{index + 1}: {destination.locationName}</ListItem>
        ))
      ) : null}
    </List>
  );
}

export default DestinationList;
