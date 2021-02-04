import React from 'react';
import styles from './TextInput.module.css';

export default class TextInput extends React.Component {
  render() {
    return (
      <div className={styles.inputField}>
        <input
          type='text'
          id={this.props.name}
          onChange={this.props.onChange}
          value={this.props.value}
          required
        />
        <label for={this.props.name}>{this.props.name}</label>
      </div>
    );
  }
}
