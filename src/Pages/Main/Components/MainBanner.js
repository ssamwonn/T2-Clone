import React, { Component } from "react";

class MainBanner extends Component {
  render() {
    return (
      <div className="mainBannerBox">
        <video src="Images/Main/mainbanner2.mp4" autoPlay muted loop />
        <div className="whiteBox">
          <p className="boldText">
            <span className="orangefont">Top up your cup:</span>
              our stores have re-opened and contactless Click & Collect is
              available!
          </p>
          <br/>
          <p className="subText">
            Father's day is just around the corner.
            <span className="underbarText">Check delivery cut off dates</span>
          </p>
        </div>
      </div>
    );
  }
}

export default MainBanner;
