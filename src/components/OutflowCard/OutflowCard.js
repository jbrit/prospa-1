import React from 'react';
import styles from './OutflowCard.module.css';
import {OutflowData} from '../../mock/dashboard';

const OutflowCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Cash outflow</div>

      {OutflowData.map((item, i) => (
        <div className={styles.row} key={i}>
          <div className={styles.leftContainer}>
            <img src={item.icon} alt='icon' />
            <span>{item.title}</span>
          </div>
          <span className={styles.rightContainer}>
            <div className={styles.price}>{item.price}</div>
            <div className={styles.loader}></div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default OutflowCard;
