import React, { Component } from "react";

class ItemName extends Component {
  render() {
    const { itemName } = this.props;
    return <div className="itemName">{itemName}</div>;
  }
}

export default ItemName;
