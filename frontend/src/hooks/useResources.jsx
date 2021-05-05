import { useState } from 'react';

const useResources = () => {
  const [trips, setTrips] = useState([]);
  const [trip, setTrip] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [version, setVersion] = useState(0);
  return { trips, setTrips, trip, setTrip, loading, setLoading, version, setVersion };
};

export default useResources;
