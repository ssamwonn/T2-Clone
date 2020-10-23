import React, { Component } from "react";

class SearchedResultSummary extends Component {
  render() {
    return (
      <div className="SearchedResultSummary">
        SEARCH RESULTS FOR '{this.props.searchedKeyword}'
      </div>
    );
  }
}

export default SearchedResultSummary;
