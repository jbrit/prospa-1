import React from 'react';
import styles from './SignIn.module.css';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

export default class SignIn extends React.Component {
  state = {
    input: {
      email: '',
      password: '',
    },
  };

  handleText = (key, e) => {
    var input = {...this.state.input};

    input[key] = e.target.value;
    console.log('INPUT', input);
    this.setState({input});
  };
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>Welcome back to Prospa</div>
        <div className={styles.description}>
          An account, with powerful, personalised tools
          <br /> all in one place
        </div>

        <TextInput
          name={'Enter email'}
          onChange={(text) => this.handleText('email', text)}
          value={this.state.input.email}
        />
        <TextInput
          name={'Enter password'}
          onChange={(text) => this.handleText('password', text)}
          value={this.state.input.password}
        />

        <Button title={'next'} to='/' />
      </div>
    );
  }
}
