import React, { useContext, useEffect, useState } from 'react';
import { retrieveAllTrips } from '../../api/crudOperations';
import { AuthContext } from '../../App';
import { TripView } from './TripView';
import NewTripButton from './NewTripButton';
import NewTripModal from './NewTripModal';

function TripList() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user] = useContext(AuthContext);
  const [version, setVersion] = useState(0);
  const [display, setDisplay] = useState(false);

  // Retrieve trips
  useEffect(() => {
    retrieveAllTrips(user.id, setLoading, setTrips);
  }, [user, version]);

  const handleNewTrip = () => {
    setDisplay(true);
  };

  const handleCancel = () => {
    setDisplay(false);
  };

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

      <div>
        <NewTripButton onClick={handleNewTrip} />
      </div>
      {/* {display && <NewTripModal onCancel={handleCancel} />} */}
      <NewTripModal open={display} onCancel={handleCancel} />
    </div>
  );
}

export default TripList;
