import React from 'react';
import {SummaryData} from '../../mock/dashboard';
import styles from './SummaryCard.module.css';
import graph from '../../assets/images/test.svg';

const SummaryCard = () => {
  return (
    <div className={styles.container}>
      <div>June summary</div>

      <div className={styles.headers}>
        {SummaryData[0].headers.map((item, i) => (
          <div className={styles.itemContainer} key={i}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.price}>{item.price}</div>
          </div>
        ))}
      </div>
      {SummaryData[0].xData.map((item, i) => (
        <div className={styles.row} key={i}>
          <div className={styles.x}>{item}</div> <div className={styles.line} />
        </div>
      ))}
      <img src={graph} alt='graph' className={styles.graph} />

      <div className={styles.yContainer}>
        {SummaryData[0].yData.map((item, i) => (
          <div className={styles.y} key={i}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryCard;
