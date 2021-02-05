import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styles from './Button.module.css';

export default class Button extends Component {
  render() {
    return (
      <Link to={this.props.to} className={styles.container}>
        <div>{this.props.title}</div>
      </Link>
    );
  }
}
