import React, { Component } from "react";
import "./MenuContent3.scss";

class MenuContent3 extends Component {
  render() {
    return (
      <div className="MenuContent3">
        <div className="MenuContentContainer">
          <div className="MenuContentBox">
            <ul className="upperList">
              <li>FATHER'S DAY GIFTS</li>
              <li>TOP SELLING GIFT PACKS</li>
            </ul>
            <ul className="lowerList">
              <ul>
                <li>All Packs</li>
                <li>New Gift Packs</li>
                <li>Tea Packs</li>
                <li>Tea and Teaware Packs</li>
                <li>Gift Cards</li>
                <li>Personalised Gifts</li>
              </ul>
              <ul>
                <li>Gifts $25 and Under</li>
                <li>Gifts $40 and Under</li>
                <li>Gifts $65 and Under</li>
                <li>Gifts $100 and Under</li>
                <li>Gifts for Her</li>
                <li>Gifts for Teachers</li>
              </ul>
              <ul>
                <li>Subscription</li>
                <li>Bundle up and Save!</li>
              </ul>
            </ul>
          </div>
          <div className="MenuBanner">
            <div className="bannerImg">
              <div className="bannerTitle"></div>
              <div className="goToPageIcon"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuContent3;
