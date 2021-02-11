import React from "react";
import styles from "./MoneyAllocation.module.css";
import {
  listSubAccount,
  setToDefault,
  updateWalletAllocation,
} from "../../env";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Header from "../Header/Header";

class MoneyAllocation extends React.Component {
  constructor() {
    super();
    this.state = {
      currentBalance: 100,
      subAccount: "",
      input: {},
      sum: "",
      currentID: "",
    };
  }

  componentDidMount() {
    this.getSubAccount();
  }

  getSubAccount = async () => {
    await fetch(listSubAccount, {
      headers: {
        Authorization:
          "Token ff3f1b10793fc11baf98082c0a12b48ca50b39d5df494a54c2bb05d06da8b5bb",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ subAccount: data });
      });
    this.state?.subAccount?.data?.map((item) =>
      this.handleChange(item.biz_wallet_id, item.incoming_allocation)
    );
    this.handleTotal();
  };

  handleTotal = () => {
    const sum = this.state.subAccount.data
      .map((item) =>
        item.biz_wallet_type !== "current" ? item.incoming_allocation : "0"
      )
      .reduce((a, b) => parseInt(a) + parseInt(b), 0);

    this.setState({ currentBalance: 100 - sum });
    return sum;
  };

  handleChange = async (key, value) => {
    const current = this.state.subAccount.data.find(
      (item) => item.biz_wallet_type === "current"
    )?.biz_wallet_id;

    const getCurrentValue = this.state.input[current];

    const input = {
      ...this.state.input,
    };

    input[current] = "0";
    input[key] = value || "";

    let sumTotal = this.getTotal(input) || 0;

    let final = 100 - sumTotal;

    if (final <= 100 && final >= 0) {
      this.setState({
        input,
        currentBalance: final,
      });
    } else {
      alert("Total cant be higher that 100% or less than 0%");
    }
  };

  getTotal = (obj) => {
    console.log("SUM", obj);

    const total = Object.values(obj)
      .filter((item) => item !== "")
      .reduce((tot, curr) => tot + parseFloat(curr), 0);
    return total;
  };

  handleSubmit = async () => {
    const input = this.state.input;
    const current = this.state.subAccount.data.find(
      (item) => item.biz_wallet_type === "current"
    ).biz_wallet_id;
    await this.setState({
      input: {
        ...this.state.input,
        ...(this.state.input[current] = this.state.currentBalance),
      },
    });
    const data = [];
    Object.keys(input)?.map((item) => {
      return data.push({
        walletID: parseInt(item),
        walletShare: parseInt(input[item]) || 0,
      });
    });
    let formData = new FormData();
    formData.append("wallet_allocation", JSON.stringify(data));
    formData.append("biz_account_id", 23);
    await fetch(updateWalletAllocation, {
      method: "POST",
      headers: {
        Authorization:
          "Token ff3f1b10793fc11baf98082c0a12b48ca50b39d5df494a54c2bb05d06da8b5bb",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  handleReset = async () => {
    let formData = new FormData();
    await formData.append("biz_account_id", "23");
    await fetch(setToDefault, {
      method: "POST",
      headers: {
        Authorization:
          "Token ff3f1b10793fc11baf98082c0a12b48ca50b39d5df494a54c2bb05d06da8b5bb",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  render() {
    return (
      <div className={styles.container}>
        <Header
          title="Allocate your money by percentage"
          subtitle={"A short description about account types"}
        />
        {this.state.subAccount?.data?.map(
          ({ biz_wallet_id, biz_wallet_type, incoming_allocation }) => {
            const isCurrent = biz_wallet_type === "current";
            if (isCurrent) {
              return (
                <TextInput
                  disabled={isCurrent}
                  value={this.state.currentBalance}
                  name={biz_wallet_type}
                />
              );
            } else {
              return (
                <TextInput
                  disabled={isCurrent}
                  onChange={(e) => {
                    this.handleChange(biz_wallet_id, e.target.value);
                  }}
                  value={this.state.input[biz_wallet_id]}
                  name={biz_wallet_type}
                />
              );
            }
          }
        )}

        <Button onClick={this.handleSubmit} title="Submit" />
        <Button onClick={this.handleReset} title="Reset" />
      </div>
    );
  }
}
export default MoneyAllocation;
