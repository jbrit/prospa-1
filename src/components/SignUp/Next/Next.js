import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../Header/Header';
import styles from './Next.module.css';

export default class Next extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header
          title={'Open a new business account'}
          subtitle={'A short description comes here'}
        />
        {this.signIn()}
      </div>
    );
  }
  signIn() {
    return (
      <div className={styles.already}>
        Already a member?{' '}
        <Link to='/sign-in' className={styles.sign}>
          Sign In
        </Link>
      </div>
    );
  }
}
