import React, { Component } from "react";
import "./filterSelectBox.scss";

class FilterSelectBox extends Component {
  constructor() {
    super();

    this.state = {
      isClick: false,
      checkedItems: [],
    };
  }

  handleClick = (e) => {
    const item = e.target.value;
    const name = e.target.name;
    let newArr;

    if (this.state.checkedItems.includes(item)) {
      newArr = this.state.checkedItems.filter((el) => el !== item);
    } else {
      newArr = [...this.state.checkedItems, item];
    }

    this.setState(
      {
        checkedItems: newArr,
      },
      () => {
        this.props.handleClick({ [name]: this.state.checkedItems });
      }
    );
  };

  render() {
    const { isClick } = this.state;
    const { list, name } = this.props;
    return (
      <div className="FilterSelectBox">
        <label className="refineByName">
          <input
            type="checkbox"
            onClick={() => {
              this.setState({ isClick: !isClick });
            }}
          />
          {name}
          <div className="arrow"></div>
        </label>
        {isClick && (
          <ul>
            {list.map((el) => {
              return (
                <li key={el}>
                  <label>
                    <input
                      className="checkInput"
                      type="checkbox"
                      value={el}
                      name={name}
                      onChange={this.handleClick}
                    />
                    <span className="customCheckBox"></span>
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

export default FilterSelectBox;
