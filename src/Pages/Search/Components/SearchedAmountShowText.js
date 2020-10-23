import React, { Component } from "react";

class SearchedAmountShowText extends Component {
  render() {
    return (
      <div className="SearchedAmountShowText">
        <h3>
          Search results for{" "}
          <span className="checked">{this.props.searchedKeyword}.</span>
        </h3>
        <h4>
          <span className="checked">
            products({this.props.amount > 0 ? this.props.amount : "0"}).{" "}
          </span>{" "}
          <span className="noAmount">Features(0). </span>
          <span className="noAmount">Customer care (0). </span>{" "}
          <span className="noAmount">Recipes(0). </span>
        </h4>
      </div>
    );
  }
}

export default SearchedAmountShowText;
