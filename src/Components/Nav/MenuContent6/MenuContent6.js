import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MenuContent6.scss";

class MenuContent6 extends Component {
  render() {
    return (
      <div className="MenuContent6">
        <div className="MenuContentContainer">
          <div className="MenuContentBox">
            <ul className="upperList">
              <li>ABOUT T2 SOCIETY</li>
              <Link to="/account/join">JOIN T2 SOCIETY</Link>
            </ul>
          </div>
          <div className="MenuBanner">
            <div className="bannerImg">
              <div className="bannerTitle">Tea Society</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuContent6;
