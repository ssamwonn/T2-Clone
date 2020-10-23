import React, { Component } from "react";
import FilterSelectBox from "./Components/FilterSelectBox/FilterSelectBox";
import ProductItem from "./../../Components/ProductItem/ProductItem";
import { config } from "../../config";
import "./ProductList.scss";
import { Link } from "react-router-dom";

class ProductList extends Component {
  constructor() {
    super();

    this.state = {
      product: [],
      review: [],
      isClick: false,
      styleList: [
        "loose leaf tea",
        "loose leaf tisane",
        "powdered tisane",
        "sugar",
        "teabag",
      ],
      typeOfTea: [
        "black breakfast tea",
        "black tea",
        "chinese black tea",
        "Chinese green tea",
        "flavored black tea",
        "flavored green tea",
        "flavored oolong tea",
        "flavored white tea",
        "fruit tisane",
        "herbal tisane",
        "japanese green tea",
        "japanese matcha",
        "oolong tea",
        "premium green tea",
        "smoked black tea",
        "sugar tisane",
        "Tea",
        "white Tea",
      ],
      price: ["Under $10", "Under $20", "Under $30", "Under $40", "Under $50"],
      sortBy: [
        "Sort by:",
        "Sort A-Z",
        "Price Descending",
        "Price Ascending",
        "Top Rated",
        "Best Sellers",
      ],
      style: [],
      type: [],
      Price: [],
    };
  }

  componentDidMount = () => {
    // "http://10.58.4.238:8000/products"
    fetch(`${config.api}/products`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({ product: res.product_list }, () => {
          this.fetchReview();
        })
      );
  };

  fetchReview = () => {
    fetch(`${config.api}/reviews`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({ review: res.review_list }, () => {
          this.matchId();
        })
      );
  };

  matchId = () => {
    console.log(this.state.review);
    let newProduct = this.state.product;
    let result = {};
    for (let info of this.state.review) {
      result[info["product_id"]] = [info["rating_img"], info["review_count"]];
    }
    console.log(result);

    for (let info of newProduct) {
      console.log(info["product_id"]);
      info["review_count"] = result[+info["product_id"]][1];
      info["review_img"] = result[+info["product_id"]][0];
    }

    this.setState({ product: newProduct });
    console.log(newProduct);
  };

  handleSort = (e) => {
    //sortby 정렬 기능
    console.log("sortby: " + e.target.id);
  };

  handlefilterClick = (a) => {
    console.log(Object.values(a));
    let data = Object.values(a);
    this.setState({ [Object.keys(a)]: data }, this.changetoQuery);
  };

  changetoQuery = () => {
    const { style, type, Price } = this.state;
    console.log("changetoQuery");
    let result = "";
    if (style.length && style[0].length)
      result += "&" + this.arrayToString("style", style);
    if (type.length && type[0].length)
      result += "&" + this.arrayToString("type", type);
    if (Price.length && Price[0].length)
      result += "&" + this.arrayToString("price", Price);

    if (result[0] === "&") result = result.slice(1);
    console.log(result);

    // fetch(`http://10.58.7.91:8000/products/refine?${result}`)
    //   .then((res) => res.json())
    //   .then((res) => this.setState({ product: res.product_list }));

    fetch(`${config.api}/products?${result}`)
      .then((res) => res.json())
      .then((res) => this.setState({ product: res.product_list }));
  };

  arrayToString = (key, value) => {
    return value
      .map((el, idx) => {
        console.log(el.toString());
        let change = this.replaceAll(el.toString(), " ", "+").toLowerCase();
        return `${key}=${change}`;
      })
      .join("&");
  };

  replaceAll = (str, searchStr, replaceStr) => {
    return str.split(searchStr).join(replaceStr);
  };

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

  render() {
    const { styleList, typeOfTea, price, sortBy, product } = this.state;

    return (
      <div className="ProductList">
        <div className="productContainer">
          <header>
            <ul>
              <li>HOME</li>
              <li>TEA</li>
              <li>SHOP ALL TEA</li>
            </ul>
            <div className="mainHeading">Shop all Tea</div>
          </header>
          <div className="refineByContainer">
            <div className="text">Refine by:</div>
            <FilterSelectBox
              id="style"
              name="style"
              list={styleList}
              handleClick={this.handlefilterClick}
            />
            <FilterSelectBox
              id="typeOfTea"
              name="type"
              list={typeOfTea}
              handleClick={this.handlefilterClick}
            />
            <FilterSelectBox
              id="price"
              name="Price"
              list={price}
              handleClick={this.handlefilterClick}
            />
            <FilterSelectBox
              id="sortby"
              name="Sort by:"
              list={sortBy}
              handleClick={this.handleSort}
            />
          </div>
          <section>
            <ul className="productitemList">
              {product
                .filter((el, idx) => {
                  return idx < 20;
                })
                .map((el) => {
                  return <ProductItem key={el.product_id} data={el} />;
                })}
            </ul>
          </section>
          <div className="bottom">
            <span>Showing results</span>
            {/* btn 활성화 조건 넣기  */}
            {/* <button>Load next</button> */}
            <Link onClick={() => window.scrollTo(0, 0)}>Back to Top</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
