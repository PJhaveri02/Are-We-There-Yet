import { useState } from 'react';

const useResources = () => {
  const [trips, setTrips] = useState([]);
  const [trip, setTrip] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [version, setVersion] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(1);
  return { trips, setTrips, trip, setTrip, loading, setLoading, version, setVersion, sliderPosition, setSliderPosition };
};

export default useResources;
