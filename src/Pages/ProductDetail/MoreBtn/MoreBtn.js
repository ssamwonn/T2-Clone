import React, { Component } from "react";
import "./MoreBtn.scss";

class MoreBtn extends Component {
  constructor() {
    super();
    this.state = {
      // product_detail: [],
      //isFold: "",
      //btnRotated: false,
      isClick: false,
    };
  }

  // rotateBtn = () => {
  //   const { btnRotated } = this.state;
  //   // console.log("hello");
  //   this.setState({ btnRotated: !btnRotated });
  // };

  changeClicked = () => {
    //console.log("hello");
    this.setState({ isClick: !this.state.isClick });
  };

  render() {
    const { isClick } = this.state;

    return (
      <span className="MoreBtn">
        <img
          className={`MoreBtn ${isClick && `rotate`}`}
          alt="moreBtn"
          src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/en_AU/v1598285640573/images/down22.png"
          onClick={(e) => {
            this.props.clickMoreBtn();
            this.changeClicked();
          }}
        />
      </span>
    );
  }
}

export default MoreBtn;
