import React, { Component } from "react";
import SearchedResultSummary from "./SearchedResultSummary";
import SearchedAmountShowText from "./SearchedAmountShowText";
import SearchedList from "./SearchedList";
import ShowingListSummary from "./ShowingListSummary";

class NormalSearch extends Component {
  render() {
    const { searchedList, sortBy, searchedKeyword } = this.props;
    return (
      <div className="NormalSearch">
        <SearchedResultSummary searchedKeyword={searchedKeyword} />
        <SearchedAmountShowText
          searchedKeyword={searchedKeyword}
          amount={searchedList.length}
        />
        <SearchedList searchedList={searchedList} sortBy={sortBy} />
        <ShowingListSummary />
      </div>
    );
  }
}

export default NormalSearch;
