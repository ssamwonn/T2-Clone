import React, { Component } from "react";
import SelectBox from "../../ProductList/Components/FilterSelectBox/FilterSelectBox";
import SearchedItem from "../../../Components/ProductItem/ProductItem";

class SearchedList extends Component {
  render() {
    const { searchedList, handleSort, sortBy } = this.props;
    return (
      <div className="SearchedList">
        <div className="searchedListHead">
          <div className="headText">Refine by:</div>
          <SelectBox id="style" name="Style" />
          <div className="sortBox">
            <SelectBox id="sortby" name="Sort by:" />
          </div>
        </div>
        <div className="listBox">
          {searchedList.map((el) => {
            return <SearchedItem key={el.product_id} data={el} />;
          })}
        </div>
      </div>
    );
  }
}

export default SearchedList;
