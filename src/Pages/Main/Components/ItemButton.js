import React, { Component } from "react";

class ItemButton extends Component {
  render() {
    const { buttonList } = this.props;
    return (
      <div className="itemButtonBox">
        {buttonList.map((el,index) => (
          <button key={index} className="itemButton">{el}</button>
        ))}
      </div>
    );
  }
}

export default ItemButton;
