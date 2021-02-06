import React from 'react';
import styles from './AccountCard.module.css';

const AccountCard = ({data}) => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div>
          <div className={styles.type}>{data.type}</div>
          <div className={styles.details}>{data.details}</div>
        </div>
        <img src={data.icon} alt='icon' />
      </div>
      <div className={styles.amount}>
        {data.amount}
        <span>{data.kobo}</span>
      </div>
    </div>
  );
};

export default AccountCard;
