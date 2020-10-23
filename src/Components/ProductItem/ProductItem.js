import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import QuantityBox from "./QuantityBox/QuantityBox";
import "./ProductItem.scss";
import { config } from "./../../config";
//TODO :  기존에 있던 wishlist 정보를 바탕으로 하트 활성화. 이미지 및 리뷰 갯수,장바구니..

class ProductItem extends Component {
  constructor() {
    super();

    this.state = {
      selectItem: 0,
      isWishList: false,
      quantity: 1,
      isQuantityClick: false,
      aaaa: [],
    };
  }

  handleHeartClick = () => {
    const { isWishList } = this.state;
    const { data } = this.props;
    // data.product_id

    //console.log(data.product_id);
    fetch(`${config.api}/user/wishlist`, {
      method: "POST",
      body: JSON.stringify({ product_id: data.product_id }),
      headers: {
        Authorization: sessionStorage.getItem("login_token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
    // .catch((err) => err);

    this.setState({ isWishList: !isWishList });
  };

  handleOptionClick = (idx) => {
    this.setState({ selectItem: idx });
  };

  handleQuantityChange = (e) => {
    this.setState({ quantity: e.target.value });
  };

  handleSubmit = () => {
    const { selectItem, quantity } = this.state;
    const { data } = this.props;
    const size_unit = data.size_unit[selectItem];
    let result = {};

    result["product_id"] = data.product_id;
    result["count"] = quantity;

    if (size_unit) {
      result["size_unit"] = data.size_unit[selectItem];
    } else {
      result["size_unit"] = -1;
    }
    console.log("Add to Bag", data.product_id);
    console.log(result);

    fetch(`${config.api}/user/shoppingbag`, {
      method: "post",
      headers: {
        Authorization: sessionStorage.getItem("login_token"),
      },
      body: JSON.stringify(result),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  handleClick = () => {
    this.props.history.push(`/products/${this.props.data.product_id}`);
  };

  render() {
    const { data } = this.props;
    const { isWishList, quantity, selectItem } = this.state;
    const {
      handleHeartClick,
      handleOptionClick,
      handleQuantityChange,
      handleSubmit,
    } = this;

    return (
      <li className="ProductItem">
        <div className="heartBox">
          <button onClick={handleHeartClick}>
            <div className={isWishList ? "heartImgCheck" : "heartImg"} />
          </button>
        </div>
        <div className="imageBox" onClick={this.handleClick}>
          <Link to="/shop">
            <img src={data.product_image} alt={data.product_name} />
          </Link>
        </div>
        <div className="productInfo">
          <Link to="/shop" className="productName">
            {data.product_name}
          </Link>
          <div className="ratingBox">
            <img alt="starRatings" src={data.review_img} />
            `( ${data.review_count})`
          </div>
          <>
            <Link to="/shop" className="viewDetail">
              View details
            </Link>
          </>
          <ul className="productVariation">
            {data.product_price && (
              <li>
                <button className="variationImgButton borderBlack">
                  <img alt="" src={data.product_image} />
                </button>
                <div className="variationName"></div>
                <div className="price">A${data.product_price}</div>
              </li>
            )}
            {!data.product_price &&
              data.size_unit.map((el, idx) => {
                return (
                  <li key={el}>
                    <button
                      className={`variationImgButton ${
                        selectItem === idx ? `borderBlack` : `borderNone`
                      }`}
                      onClick={() => {
                        handleOptionClick(idx);
                      }}
                    >
                      <img alt={data.size_unit} src={data.size_image[idx]} />
                    </button>
                    <div className="variationName">{el}</div>
                    <div className="price">A${data.size_price[idx]}</div>
                  </li>
                );
              })}
          </ul>
          <div className="addTobagBox">
            <QuantityBox
              id="quantity"
              name={quantity}
              list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              handleClick={handleQuantityChange}
            />
            <button onClick={handleSubmit}>Add to Bag</button>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(ProductItem);
