import React, { Component } from "react";
import "./MenuContent5.scss";

class MenuContent5 extends Component {
  render() {
    return (
      <div className="MenuContent5">
        <div className="MenuContentContainer">
          <div className="MenuContentBox">
            <ul className="upperList">
              <li>ARTICLES</li>
              <li>HOW TO BREW</li>
            </ul>
            <ul className="lowerList">
              <ul>
                <li>Recipes</li>
              </ul>
            </ul>
          </div>
          <div className="MenuBanner">
            <div className="bannerImg">
              <div className="bannerTitle">
                Explore
                <br />
                Recipes
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

export default MenuContent5;
