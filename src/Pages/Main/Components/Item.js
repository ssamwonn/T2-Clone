import React, { Component } from "react";
import ItemImage from "./ItemImage";
import ItemName from "./ItemName";
import ItemDESC from "./ItemDESC";
import ItemButton from "./ItemButton";

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      BoxStyle,
      imgType,
      itemName,
      itemImage,
      itemDESC,
      buttonList,
    } = this.props;
    return (
      <div
        className={"itemBox " + BoxStyle}
        ref={this.props.ref}
        style={{ transform: "translateX(" + this.props.transform + "px)" }}
      >
        <ItemImage
          imgType={imgType}
          itemName={itemName}
          itemImage={itemImage}
        />
        <div className="itemNoteBox">
          <div className="itemTextBox">
            <ItemName itemName={itemName} />
            <ItemDESC itemDESC={itemDESC} />
          </div>
          <ItemButton buttonList={buttonList} />
        </div>
      </div>
    );
  }
}

export default React.forwardRef((props, ref) => {
  return <Item ref={ref} {...props} />;
});
