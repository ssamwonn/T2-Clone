import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchedResultSummary from "./SearchedResultSummary";
import SearchedAmountShowText from "./SearchedAmountShowText";

class NoSearch extends Component {
  render() {
    const { searchedKeyword } = this.props;
    return (
      <div className="NoSearch">
        <SearchedResultSummary searchedKeyword={searchedKeyword} />
        <SearchedAmountShowText searchedKeyword={searchedKeyword} />
      </div>
    );
  }
}

export default NoSearch;
