import React, { useEffect, useState } from 'react';
import { retrieveAllTrips } from '../../api/crudOperations';
import { TripView } from './TripView';

function TripList() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    retrieveAllTrips('ABC123', setLoading, setTrips);
  }, []);

  return (
    <div>
      {loading ? (
        <p>loading</p>
      ) : trips.length > 0 ? (
        trips.map((trip, index) => {
          return <TripView trip={trip} key={index} />;
        })
      ) : (
        <div>No Trips, create some trips</div>
      )}
    </div>
  );
}

export default TripList;
