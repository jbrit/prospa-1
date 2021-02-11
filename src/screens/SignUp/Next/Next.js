import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Data } from "../../../mock/cardData";
import BussinessCard from "../../../components/BussinessCard/BussinessCard";
import Header from "../../../components/Header/Header";
import Button from "../../../components/Button/Button";
import styles from "./Next.module.css";
import leftArrow from "../../../assets/images/arrow-left.svg";

export default class Next extends Component {
  state = { pressed: "" };
  render() {
    return (
      <div className={styles.container}>
        {this.signIn()}
        <Link to="/" className={styles.backButton}>
          <img src={leftArrow} alt="arrow-left" />
        </Link>
        <Header
          title={"Open a new business account"}
          subtitle={"A short description comes here"}
        />

        {Data.map((item, i) => (
          <BussinessCard
            data={item}
            pressed={this.state.pressed === i}
            onClick={() => this.setState({ pressed: i })}
            key={i}
          />
        ))}

        <Button title={"next"} to="/sign-in" />
      </div>
    );
  }
  signIn() {
    return (
      <div className={styles.already}>
        Already a member?{" "}
        <Link to="/sign-in" className={styles.sign}>
          Sign In
        </Link>
      </div>
    );
  }
}
