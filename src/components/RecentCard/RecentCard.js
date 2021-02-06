import React from 'react';
import styles from './RecentCard.module.css';
import {RecentTransaction} from '../../mock/dashboard';

export default function RecentCard() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Recent transactions</div>
        <div className={styles.button}>See all</div>
      </div>

      {RecentTransaction.map((item) => (
        <div className={styles.row}>
          <div className={styles.leftContainer}>
            <img src={item.icon} alt='icon' />
            <div>
              <div className={styles.itemTitle}>{item.title}</div>
              <div className={styles.time}>{item.time}</div>
            </div>
          </div>

          <div className={styles.price}>{item.price}</div>
        </div>
      ))}
    </div>
  );
}
