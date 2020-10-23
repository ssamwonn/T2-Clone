import React, { Component } from "react";
import ModuleHead from "./ModuleHead";
import ModuleAside from "./ModuleAside";
import Item from "./Item";

class Module extends Component {
  render() {
    const {
      transform,
      moduleStyle,
      moduleName,
      moduleAside,
      asideDESC,
      moduleItemList,
    } = this.props;
    return (
      <div className={"module " + moduleStyle} ref={this.props.ref}>
        <ModuleHead
          moduleName={moduleName}
          click={this.props.click}
          moduleStyle={this.props.moduleID}
        />
        <div className="moduleMain">
          <ModuleAside moduleAside={moduleAside} asideDESC={asideDESC} />
          <div className="moduleItemList">
            {moduleItemList.map((el, index) => (
              <Item
                key={index}
                transform={transform}
                BoxStyle={el.itemBoxStyle}
                itemName={el.itemName}
                imgType={el.imageType}
                itemImage={el.itemImage}
                itemDESC={el.itemDESC}
                buttonList={el.buttonList}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Module;
