import React from 'react';
import styles from './Header.module.css';
import Fade from 'react-reveal/Fade';

const Header = ({title, subtitle}) => {
  return (
    <Fade bottom cascade>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
    </Fade>
  );
};

export default Header;
