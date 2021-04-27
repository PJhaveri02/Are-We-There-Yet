import React from "react";

function DestinationList(props) {
  const { destinations } = props;
  return (
    <div>
      {destinations && destinations.length > 0 ? (
        destinations.map((destination, index) => (
          <li key={index}>{destination.locationName}</li>
        ))
      ) : (
        <p>Add a destination using the search bar!</p>
      )}
    </div>
  );
}

export default DestinationList;
