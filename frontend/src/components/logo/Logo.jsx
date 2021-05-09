import React from 'react';
import styles from './Logo.module.css';
import logo from './logo.png';

const Logo = () => {
  return (
    <div className={styles.Div}>
      <img src={logo} alt='Logo' className={styles.Logo} />
    </div>
  );
};

export default Logo;
