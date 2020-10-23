import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MenuContent1.scss";

class MenuContent1 extends Component {
  render() {
    return (
      <div className="MenuContent1">
        <div className="MenuContentContainer">
          <div className="MenuContentBox">
            <ul className="upperList">
              <li>
                <Link to="/shop">SHOP ALL TEA</Link>
              </li>
              <li>WELLNESS</li>
            </ul>
            <ul className="lowerList">
              <ul>
                <li>New Tea</li>
                <li>Top Selling Tea</li>
                <li>Tea Bags</li>
                <li>BlackTea & Breakfast Tea</li>
                <li>Green Tea</li>
                <li>Herbal Tea & Floral Tisane</li>
              </ul>
              <ul>
                <li>Fruit Tea (Tisane)</li>
                <li>African Rooibos & Honeybush Tea</li>
                <li>Organic Tea</li>
                <li>White Tea</li>
                <li>Oolong Tea</li>
                <li>Matcha</li>
              </ul>
              <ul>
                <li>Chai</li>
                <li>Perfect For Iced Tea</li>
                <li>Chocolate, Indulgent & Sweet Tea</li>
                <li>Limited Edition Tea</li>
                <li>Shop By Ingredient & Flavour</li>
                <li>Goanna Hut</li>
              </ul>
            </ul>
          </div>
          <div className="MenuBanner">
            <div className="bannerImg">
              <div className="bannerTitle">
                Tea
                <br />
                Finder
              </div>
              <div className="goToPageIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 49.9 50"
                >
                  <title>13-link-right</title>
                  <path d="M49.9,25c0-12.9-9.8-23.7-22.6-24.9v28l7.7-7.7l3.8,3.8L24.6,38.4L10.4,24.3l3.8-3.8l7.7,7.6v-28C8.2,1.8-1.6,14.2,0.1,27.9  s14.1,23.5,27.8,21.9C40.4,48.2,49.9,37.6,49.9,25z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuContent1;
