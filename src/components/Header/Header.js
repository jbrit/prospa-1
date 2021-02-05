import React from 'react';
import styles from './Header.module.css';

const Header = ({title, subtitle}) => {
  return (
    <>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </>
  );
};

export default Header;
