import React, { useContext, useEffect, useState } from 'react';
import { retrieveAllTrips } from '../../api/crudOperations';
import { AuthContext } from '../../App';
import { TripView } from './TripView';
import NewTripButton from './NewTripButton';
import NewTripModal from './NewTripModal';
import { ResourceContext } from '../../pages/Homepage';

function TripList() {
  const [user] = useContext(AuthContext);
  const [display, setDisplay] = useState(false);

  const { trips, setTrips, version, setVersion, loading, setLoading } = useContext(ResourceContext);

  // Retrieve trips
  useEffect(() => {
    retrieveAllTrips(user.id, setLoading, setTrips);
  }, [user, version, setLoading, setTrips]);

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
