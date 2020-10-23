import React, { Component } from "react";
import NoSearch from "./Components/NoSearch";
import NormalSearch from "./Components/NormalSearch";
import CategorySearch from "./Components/CategorySearch";
import "./search.scss";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchedKeyword: "Hello",
      sortBy: "",
      searchedList: [],
      productsAmount: 0,
      featuresAmount: 0,
      customerCareAmount: 0,
      recipesAmount: 0,
      searchedValue: "",
    };
  }

  sort_by = (field, reverse, primer) => {
    const key = primer
      ? function (x) {
          return primer(x[field]);
        }
      : function (x) {
          return x[field];
        };
    reverse = !reverse ? 1 : -1;
    return function (a, b) {
      return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a));
    };
  };

  calcCategoryAmount = () => {
    this.setState({ productsAmount: this.state.searchedList.lenght });
  };

  componentDidMount() {
    this.getSearchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.getSearchData();
    }
  }

  getSearchData = () => {
    this.setState({
      searchedKeyword: this.props.history.location.state.keyword,
    });
    let temp = this.props.history.location.state.keyword
      .split(" ")
      .map((el) => el + "+")
      .join("")
      .slice(0, -1);
    fetch(`http://18.224.25.165:8000/products?search=${temp}`)
      .then((res) => res.json())
      .then((res) => this.setState({ searchedList: res.product_list }));
  };

  inputHandle = (e) => {
    this.setState({ searchedValue: e.target.value });
  };

  render() {
    const { searchedList, searchedKeyword } = this.state;

    return (
      <div className="Search">
        <div
          className={
            searchedList.length > 0
              ? "backgroundcolor white"
              : "backgroundcolor black"
          }
        >
          {searchedList.length > 0 ? (
            <NormalSearch
              searchedList={searchedList}
              searchedKeyword={searchedKeyword}
            />
          ) : (
            <NoSearch
              searchedKeyword={searchedKeyword}
              inputHandle={this.inputHandle}
              searchedValue={this.state.SearchedValue}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Search;
