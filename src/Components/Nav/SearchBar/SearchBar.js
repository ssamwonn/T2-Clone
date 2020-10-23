import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.scss";

class SearchBar extends Component {
  render() {
    const key = this.props.searchedValue.split(" ").map(el=> el+"%20").join("").slice(0, -3);
    return (
      <div className="SearchBar">
        <div className="searchBarArea">
          <div className="searchBarContainer">
            <form action="">
              <input type="text" placeholder="I'm looking for..." value={this.props.searchedValue} name="searchValue" onChange={this.props.inputHandle}/>
              <Link to={{ pathname: `/show-search?q=${key}`, state: { keyword: this.props.searchedValue} }}><button type="submit" onClick={this.props.onClickSearch}></button></Link> {/* //onclick기능 추가 김규영 */}
            </form>
            <div className="closeButton" onClick={this.props.hideSearchBar}>
              <svg viewBox="0 0 10 10" id="icon-close">
                <title>close</title>
                <polygon points="9.6 1.1 8.9 0.4 5 4.29 1.1 0.4 0.4 1.1 4.29 5 0.4 8.9 1.1 9.6 5 5.71 8.9 9.6 9.6 8.9 5.71 5 9.6 1.1"></polygon>
              </svg>
              <span>CLOSE</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
