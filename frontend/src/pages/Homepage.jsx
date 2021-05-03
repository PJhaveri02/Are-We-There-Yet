import React from 'react';
import MapVisualizer from '../components/map-visualiser/MapVisualiser';
import TripList from '../components/TripList';
import styles from './Homepage.module.css';
import LogoutButton from '../components/signing-pages/LogoutButton';

function Homepage() {
  return (
    <div className={styles.Homepage} onClick={() => console.log('trip clicked')}>
      <div className={styles.TripList}>
        <h1 style={{ textAlign: 'center' }}>Trips</h1>
        <TripList />
        <LogoutButton />
      </div>
      <div className={styles.MapVisualizer}>
        <MapVisualizer />
      </div>
    </div>
  );
}

export default Homepage;
