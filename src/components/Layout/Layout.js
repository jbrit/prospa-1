import React, {Component} from 'react';
import styles from './Layout.module.css';
import logo from '../../assets/images/prospa-logo.svg';
import goldBox from '../../assets/images/gold-box.svg';
import {Link, Route} from 'react-router-dom';

export default class Layout extends Component {
  state = {
    page: 'sign-up',
  };
  render() {
    return (
      <div className={styles.layoutContainer}>
        <div className={styles.navbar}>
          <img src={logo} alt='Logo' className={styles.logo} />
          <div className={styles.lineContainer}>
            {[0, 0, 0, 0, 0].map((item, i) => (
              <div
                className={styles.horizontalLine}
                style={{opacity: i !== 0 && `0.5`}}
                key={i}
              />
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
            <Route exact path={'/'}>
              Already a member?{' '}
              <Link to='/sign-in' className={styles.sign}>
                Sign In
              </Link>
            </Route>
            <Route path='/sign-in'>
              Already a member?{' '}
              <Link to='/' className={styles.sign}>
                Sign Up
              </Link>
            </Route>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}