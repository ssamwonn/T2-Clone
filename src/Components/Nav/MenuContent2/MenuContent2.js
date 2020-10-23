import React, { Component } from "react";
import "./MenuContent2.scss";

class MenuContent2 extends Component {
  render() {
    return (
      <div className="MenuContent2">
        <div className="MenuContentContainer">
          <div className="MenuContentBox">
            <ul className="upperList">
              <li>SHOP ALL TEAWARES</li>
              <li>TEA SET COLLECTIONS</li>
            </ul>
            <ul className="lowerList">
              <ul>
                <li>New Teawares</li>
                <li>Top Selling Teawares</li>
                <li>Teapots</li>
                <li>Brewing Tools</li>
                <li>Cup and Saucer Sets</li>
                <li>Tea Cups</li>
              </ul>
              <ul>
                <li>Tea For One Sets</li>
                <li>Tea For Two Sets</li>
                <li>Teaglasses & Tumblers</li>
                <li>Tea Mugs</li>
                <li>Milk Jugs & Sugar Bowls</li>
                <li>Iced Tea Jugs</li>
              </ul>
              <ul>
                <li>Storage</li>
                <li>Flasks & Tea Bottles</li>
                <li>Everday Teawares</li>
                <li>Other</li>
                <li>Teamakers</li>
              </ul>
            </ul>
          </div>
          <div className="MenuBanner">
            <div className="bannerImg">
              <div className="bannerTitle">
                New
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

export default MenuContent2;
