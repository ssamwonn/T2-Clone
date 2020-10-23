import React, { Component } from "react";
import "./quantityBox.scss";

class QuantityBox extends Component {
  constructor() {
    super();

    this.state = {
      isClick: false,
    };
  }

  handleCheck = (e) => {
    this.props.handleClick(e);
    this.setState({ isClick: false });
  };

  render() {
    const { isClick } = this.state;
    const { list, name } = this.props;
    return (
      <div className="QuantityBox">
        <label className="sortBy">
          <input
            type="checkbox"
            onClick={() => {
              this.setState({ isClick: !isClick });
            }}
          />
          {name}
          <div className={`arrow ${isClick && `rotate`}`}></div>
        </label>
        {isClick && (
          <ul>
            {list.map((el) => {
              return (
                <li key={el} onChange={this.handleCheck}>
                  <label>
                    <input className="checkInput" type="radio" value={el} />
                    {el}
                  </label>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default QuantityBox;
