import React, {Component} from 'react';
import styles from './Layout.module.css';
import logo from '../../assets/images/prospa-logo.svg';
import goldBox from '../../assets/images/gold-box.svg';

export default class Layout extends Component {
  render() {
    return (
      <div className={styles.layoutContainer}>
        <div className={styles.navbar}>
          <img src={logo} alt='Logo' className={styles.logo} />
          <div className={styles.lineContainer}>
            {[0, 0, 0, 0, 0].map((item) => (
              <div className={styles.horizontalLine} />
            ))}
          </div>

          <div className={styles.create}>Create multiple sub-account</div>
          <div className={styles.organise}>
            Organise your business finances easily
            <br />
            with multiple accounts. No limits!
          </div>
          <img src={goldBox} alt='Logo' className={styles.goldBox} />
          <div className={styles.footer}>© 2020 Prospa Inc</div>
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.already}>
            Already a member? <span className={styles.sign}>Sign In</span>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
