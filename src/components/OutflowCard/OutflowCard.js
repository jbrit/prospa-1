import React from 'react';
import styles from './OutflowCard.module.css';
import {OutflowData} from '../../mock/dashboard';
import Slide from 'react-reveal/Slide';

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
            <div className={styles.loader}>
              <Slide left delay={500}>
                <div
                  className={styles.loaderValue}
                  style={{width: `${item.percentage}%`}}
                />
              </Slide>
            </div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default OutflowCard;
