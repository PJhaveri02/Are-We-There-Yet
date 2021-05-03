import React, { useState } from 'react';
import { TripView } from './TripView';
import NewTripButton from './NewTripButton';
import NewTripModal from './NewTripModal';

function TripList() {
  const [display, setDisplay] = useState(false);
  
  const handleNewTrip = () => {
    setDisplay(true);
    console.log(display);
  };

  const handleCancel = () => {
    console.log('bruh');
    setDisplay(false);
  }

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

      <div>
        <NewTripButton onClick={handleNewTrip}/>
      </div>
      {/* {display && <NewTripModal onCancel={handleCancel} />} */}
      <NewTripModal open={display} onCancel={handleCancel} />
    </div>
  );
}

export default TripList;
