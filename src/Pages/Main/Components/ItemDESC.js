import React, { Component } from "react";

class ItemDESC extends Component {
  render() {
    const { itemDESC } = this.props;
    return <div className="itemDESC">{itemDESC}</div>;
  }
}

export default ItemDESC;
