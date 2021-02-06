import React from 'react';
import styles from './Dashboard.module.css';
import arrowDownThin from '../../assets/images/arrow-down-thin.svg';
import avatar from '../../assets/images/avatar.svg';
import bell from '../../assets/images/bell.svg';
import {AccountDetails, sideBarData} from '../../mock/dashboard';
import prospa from '../../assets/images/gray-logo.svg';
import Button from '../Button/Button';
import AccountCard from '../AccountCard/AccountCard';
import SummaryCard from '../SummaryCard/SummaryCard';

class Dashboard extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        {this.renderSidebar()}

        <div className={styles.mainContainer}>
          <div className={styles.header}>
            <div className={styles.headerText}>Dashboard</div>
            <div className={styles.wrapper}>
              <div className={styles.bell}>
                <img src={bell} alt='bell' />
              </div>
              <img src={avatar} alt='avatar' />
            </div>
          </div>

          <div className={styles.welcome}>
            <div>
              <div className={styles.title}>Welcome back, Kathy</div>
              <div className={styles.subtitle}>
                Here’s what has been happening in the last <span>7 days</span>
              </div>
            </div>
            <Button title='Add a sub account' width />
          </div>

          {this.renderCards()}
        </div>
      </div>
    );
  }

  renderCards() {
    return (
      <div className={styles.cardSection}>
        {AccountDetails.map((item, i) => (
          <AccountCard data={item} key={i} />
        ))}
        <SummaryCard />
      </div>
    );
  }

  renderSidebar() {
    return (
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
    );
  }
}

export default Dashboard;
