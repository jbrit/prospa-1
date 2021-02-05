import React from 'react';
import styles from './Dashboard.module.css';
import arrowDownThin from '../../assets/images/arrow-down-thin.svg';
import {sideBarData} from '../../mock/dashboard';
import prospa from '../../assets/images/gray-logo.svg';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <img src={prospa} alt='logo' />
        <div className={styles.sidebarHeader}>
          <div className={styles.initials}>BN</div>

          <div className={styles.details}>
            <div className={styles.detailsName}>Clayvant Inc</div>
            <div className={styles.detailsSetting}>Manage account</div>
          </div>

          <div className={styles.arrowDown}>
            <img src={arrowDownThin} alt='down-arrow' />
          </div>
        </div>

        {sideBarData.map((item, i) => (
          <div className={styles.list} key={i}>
            <img src={item.icon} alt={item.icon} />
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
