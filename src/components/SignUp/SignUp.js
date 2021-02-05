import React from 'react';
import styles from './SignUp.module.css';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import arrow from '../../assets/images/arrow-down.svg';
import Header from '../Header/Header';

export default class SignUp extends React.Component {
  state = {
    input: {
      firstName: '',
      lastName: '',
      number: '+232',
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
        <Header
          title='Create your account'
          subtitle={'A short description about account types'}
        />

        <TextInput
          name={'First name'}
          onChange={(text) => this.handleText('firstName', text)}
          value={this.state.input.firstName}
        />
        <TextInput
          name={'Last name'}
          onChange={(text) => this.handleText('lastName', text)}
          value={this.state.input.lastName}
        />

        <span className={styles.contactContainer}>
          <div className={styles.pickerContainer}>
            <div className={styles.country}>
              <div className={styles.countryTitle}>country</div>
              <div className={styles.countryNumber}>
                {this.state.input.number}
              </div>
            </div>
            <img src={arrow} alt='arrow' />

            <select
              name='number'
              onChange={(text) => this.handleText('number', text)}
            >
              <option value='+232'>+232</option>
              <option value='+233'>+233</option>
              <option value='+234'>+234</option>
            </select>
          </div>

          <TextInput
            name={'Mobile number'}
            onChange={(text) => this.handleText('mobile', text)}
            value={this.state.input.mobile}
          />
        </span>

        <TextInput
          name={'Email address'}
          onChange={(text) => this.handleText('email', text)}
          value={this.state.input.email}
        />

        <Button title={'next'} to='/next' />
      </div>
    );
  }
}
