import React, { createContext } from 'react';
import MapVisualizer from '../components/map-visualiser/MapVisualiser';
import TripList from '../components/TripList';
import styles from './Homepage.module.css';
import LogoutButton from '../components/signing-pages/LogoutButton';
import useResources from '../hooks/useResources';

export const ResourceContext = createContext(undefined);

function Homepage() {
  const {
    trips,
    setTrips,
    trip,
    setTrip,
    loading,
    setLoading,
    version,
    setVersion,
  } = useResources();

  return (
    <ResourceContext.Provider
      value={{ trips, setTrips, trip, setTrip, loading, setLoading, version, setVersion }}
    >
      <div className={styles.Homepage}>
        <div className={styles.TripList}>
          <h1 style={{ textAlign: 'center' }}>Trips</h1>
          <TripList />
          <LogoutButton />
        </div>
        <div className={styles.MapVisualizer}>
          <MapVisualizer />
        </div>
      </div>
    </ResourceContext.Provider>
  );
}

export default Homepage;
