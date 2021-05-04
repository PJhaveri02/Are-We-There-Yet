import React, { useContext, useEffect, useState } from 'react';
import { retrieveAllTrips } from '../../api/crudOperations';
import { AuthContext } from '../../App';
import { TripView } from './TripView';

function TripList() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user] = useContext(AuthContext);
  const [version, setVersion] = useState(0);

  // Retrieve trips
  useEffect(() => {
    retrieveAllTrips(user.id, setLoading, setTrips);
  }, [user, version]);

  return (
    <div>
      {loading ? (
        <p>loading</p>
      ) : trips.length > 0 ? (
        trips.map((trip) => {
          return <TripView trip={trip} key={trip._id} userID={user.id} setVersion={setVersion} />;
        })
      ) : (
        <div>No Trips, create some trips</div>
      )}
    </div>
  );
}

export default TripList;
