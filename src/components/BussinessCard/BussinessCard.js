import React, {Component} from 'react';
import styles from './BussinessCard.module.css';
import mark from '../../assets/images/mark.svg';

export default class BussinessCard extends Component {
  render() {
    const {pressed, data, onClick} = this.props;
    return (
      <div
        className={styles.container}
        style={{border: pressed && `1px solid var(--pink)`}}
        onClick={onClick}
      >
        <div className={styles.topContainer}>
          <div className={styles.button}>
            {pressed && <div className={styles.switch} />}
          </div>
          <div className={styles.header}>{data.title}</div>
        </div>
        {pressed && (
          <div className={styles.bottomContainer}>
            <div className={styles.listHeader}>{data.head}</div>
            <div>
              {data.body.map((item) => (
                <span className={styles.list}>
                  <img src={mark} alt='mark' start />
                  <div>{item}</div>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
