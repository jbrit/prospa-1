import React from 'react';
import styles from './AccountCard.module.css';
import Fade from 'react-reveal/Fade';

const AccountCard = ({data}) => {
  return (
    <Fade bottom>
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
    </Fade>
  );
};

export default AccountCard;
