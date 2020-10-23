import React, { Component } from "react";

class HeadScrollArrow extends Component {
  render() {
    return (
      <div className="arrowBox">
        <button className="leftArrow" onClick={()=> this.props.click(1, this.props.moduleStyle)} ></button>
        <button className="rightArrow" onClick={()=> this.props.click(2, this.props.moduleStyle)}></button>
      </div>
    );
  }
}

export default HeadScrollArrow;