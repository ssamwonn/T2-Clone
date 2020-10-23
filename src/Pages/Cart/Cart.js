import React, { Component } from "react";
import CardItem from "./CardItem";
import { config } from "../../config";
import "./Cart.scss";

class Cart extends Component {
  state = {
    message: [],
    priceResult: "",
    open: false,
  };

  componentDidMount() {
    fetch(`${config.api}/user/shoppingbag`, {
      method: "GET",
      headers: {
        Authorization: sessionStorage.getItem("login_token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        this.setState({ message: res.message });
      });
  }

  handleButton = (id) => {
    let newData = this.state.message.filter((el) => el.ordering_number !== id);
    this.setState({ message: newData }, () => {});
  };

  handleRemove = (idx) => {
    let united = "";
    const { name, unit } = this.state.message[idx];
    if (!unit) {
      united = -1;
    } else {
      united = unit;
    }

    console.log(`user/shoppingbag?product_name=${name}&product_size=${unit}`);

    fetch(
      `${config.api}/user/shoppingbag?product_name=${name}&product_size=${united}`,
      {
        method: "GET",
        headers: {
          Authorization: sessionStorage.getItem("login_token"),
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({ message: res.message });
      });
  };

  handleResult = () => {
    let result = 0;
    for (let i = 0; i < this.state.message.length; i++) {
      result += +this.state.message[i].price;
    }
    return result;
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClickOff = () => {
    this.setState({ open: false });
  };

  render() {
    const totalPrice = this.handleResult();

    return (
      <div className="Cart">
        <div
          className={`background ${
            this.state.open ? "background" : "displayGray"
          }`}
        />
        <div
          className={`miniCartBox ${
            this.state.open ? "miniCartBox" : "displayNone"
          }`}
        >
          <div className="headTitle">
            <h5 className="headText">Shopping bag</h5>
            <span className="headSubText"> propducts</span>
            <button onClick={this.handleClickOff} className="clear">
              <img
                className="Xbox"
                src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/en_AU/v1598372268490/images/close-black.svg"
                alt=""
              />
            </button>
          </div>
          <div className="cartTable">
            {this.state.message.map((el, idx) => (
              <CardItem
                key={el.ordering_number}
                name={el.name}
                img={el.image}
                ordering_number={el.ordering_number}
                unit={el.unit}
                count={el.count}
                price={el.price}
                idx={idx}
                handleButton={this.handleButton}
                handleRemove={this.handleRemove}
              />
            ))}
          </div>
          <div className="totalBox">
            <div className="subtoTalBox">
              <div className="subTotal">subTotal</div>
              <div className="subtotalResult">A${totalPrice}</div>
            </div>
            <div className="subTotalPrice">{this.state.priceResult}</div>

            <div className="deliveryBox">
              <div className="delivery">ESTImated delivery</div>
              <div className="deliveryFree">Free</div>
            </div>
            <div className="totalResult">
              <div className="total">
                Total
                <span className="totalText">(Tax included)</span>
              </div>
              <div className="totalPrice">A${totalPrice}</div>
            </div>
            <div className="buttonBox">
              <button className="proceed">
                <span></span>
                Proceed
                <img
                  className="arrowImg"
                  src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/en_AU/v1598372268490/images/arrow_3.png"
                  alt="arrow"
                />
              </button>
            </div>
          </div>
        </div>
        <button onClick={this.handleClickOpen} className="onButton">
          onbutton
        </button>
      </div>
    );
  }
}

export default Cart;
