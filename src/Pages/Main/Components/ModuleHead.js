import React, { Component } from "react";
import HeadScrollArrow from "./HeadScrollArrow";

class ModuleHead extends Component {
  
  render() {
    const { moduleName } = this.props;
    return (
      <div className="moduleHead">
        <div>{moduleName}</div>
        <HeadScrollArrow click={this.props.click} moduleStyle={this.props.moduleStyle}/>
      </div>
    );
  }
}

export default ModuleHead;
