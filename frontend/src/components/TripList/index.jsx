import React from 'react';
import { TripView } from './TripView';

function TripList() {
  const dummyTrip = [{ title: 'T1' }];
  return (
    <div>
      {dummyTrip.length > 0 ? (
        dummyTrip.map((trip, index) => {
          return <TripView trip={trip} key={index} />;
        })
      ) : (
        <div>No Trips, create some trips</div>
      )}
    </div>
  );
}

export default TripList;
