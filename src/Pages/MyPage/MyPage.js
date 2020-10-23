import React, { Component } from "react";
import { Link } from "react-router-dom";
import Wishlist from "./Wishlist/Wishlist";
import "./mypage.scss";

export default class MyPage extends Component {
  constructor() {
    super();

    this.state = {
      name: "t2gether",
      isClick: 3,
    };
  }

  handleClick = (idx) => {
    this.setState({ isClick: idx });
  };

  render() {
    const { name } = this.state;

    return (
      <div className="MyPage">
        <div className="accountContainer">
          <header className="accountHeader">
            <ul className="accountUl">
              <li>HOME</li>
              <li>MY ACCOUNT</li>
              <li>MY WISHLIST</li>
            </ul>
            <div className="greeting">Good evening, {name}</div>
          </header>
          <main className="mainContainer">
            <nav className="accountNav">
              {list.map((el, idx) => (
                <div
                  className="navItem"
                  key={el.name}
                  onClick={() => this.handleClick(idx)}
                >
                  <Link
                    to="/mypage"
                    className={idx === this.state.isClick ? `checked` : ``}
                  >
                    <div className={el.class} />
                    <span>{el.name}</span>
                  </Link>
                </div>
              ))}
            </nav>
            <section className="info">
              <Wishlist />
            </section>
          </main>
        </div>
      </div>
    );
  }
}

const list = [
  {
    name: "My account",
    class: "account",
    isActive: false,
  },
  {
    name: "My details",
    class: "detail",
    isActive: false,
  },
  {
    name: "My T2 emails",
    class: "email",
    isActive: false,
  },
  {
    name: "My wishlist",
    class: "wishlist",
    isActive: false,
  },
  {
    name: "My payment details",
    class: "payment",
    isActive: false,
  },
  {
    name: "My subscriptions",
    class: "subscription",
    isActive: false,
  },
];
