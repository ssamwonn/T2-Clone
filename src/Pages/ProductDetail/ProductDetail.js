import React, { Component } from "react";
import { Link } from "react-router-dom";
import { config } from "./../../config.js";
import QuantityBox from "../../Components/ProductItem/QuantityBox/QuantityBox";
import "./ProductDetail.scss";
import MoreBtn from "./MoreBtn/MoreBtn";
import MainImgSlider from "./MainImgSlider/MainImgSlider";

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product_detail: [],
      isFold: "",
      imgNum: 0,
      quantity: 1,
      btnRotated: false,
      clickedImgIdx: 0,
    };
  }
  componentDidMount() {
    // fetch("http://localhost:3000/Data/ProductDetail/ProductDetail.json")
    // fetch("http://10.58.7.91:8000/products/464")
    fetch(`${config.api}/products/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => this.setState({ product_detail: res.product_detail }));
  }

  clickMoreBtn = (name) => {
    this.state.isFold === name
      ? this.setState({ isFold: "" })
      : this.setState({ isFold: name });
  };

  handleQuantityChange = (e) => {
    this.setState({ quantity: e.target.value });
  };

  clickHandler = (idx) => {
    this.setState({ clickedImgIdx: idx });
  };

  render() {
    const { product_detail, isFold, quantity } = this.state;
    const { clickMoreBtn, clickHandler, handleQuantityChange } = this;

    return (
      <div className="ProductDetail">
        <header>
          <ul>
            <li>HOME</li>
            <li>TEA</li>
            <li>{product_detail.product_type}</li>
            <li>{product_detail.product_name}</li>
          </ul>
        </header>
        <div className="sectionArea">
          <div className="sectionContainer">
            <section className="left">
              <div className="mainImg">
                <MainImgSlider product_detail={product_detail} />
              </div>
              <div className="subImg">
                {product_detail.small_image &&
                  product_detail.small_image.map((el, idx) => {
                    return (
                      <img onClick={() => clickHandler(idx)} src={el}></img>
                    );
                  })}
              </div>
              <div className="sns">
                <span>Share</span>
                <img
                  alt="mail icon"
                  src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/en_AU/v1598285640573/images/icons/pdpsocial/PDP_Social_Icon_EML.png"
                />
              </div>
            </section>
            <section className="right">
              <div className="mainInfo">
                <div className="productName">{product_detail.product_name}</div>
                <div className="price">
                  A$
                  {product_detail.product_price === null
                    ? product_detail.size_price[0]
                    : product_detail.product_price}
                </div>
                <div className="review">
                  <span className="rating">
                    <span>★★★★★</span>
                    <span>4.8</span>
                    <span>(9)</span>
                  </span>
                  <span className="write">Write a review</span>
                </div>
              </div>
              <div className="subInfo">
                <QuantityBox
                  id="quantity"
                  name={quantity}
                  list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  handleClick={handleQuantityChange}
                />
                <div className="productBtn">
                  <button className="addToBag">Add to bag</button>
                  <button className="findInStore">Find in store</button>
                </div>
                <div className="addToWishList">
                  <button>
                    <div className="heartImg"></div>
                    <span>Add to wishlist</span>
                  </button>
                </div>
              </div>
              <div className="tabInfo">
                <div className="tab">
                  <span>Description</span>
                  <MoreBtn clickMoreBtn={() => clickMoreBtn("Description")} />
                </div>
                <div className="subTab">
                  <div
                    className={isFold === "Description" ? "showTab" : "hideTab"}
                  >
                    <div>{product_detail.description}</div>
                  </div>
                </div>
                <div className="tab">
                  <span>Ingredients</span>
                  <MoreBtn clickMoreBtn={() => clickMoreBtn("Ingredients")} />
                </div>
                <div className="subTab">
                  <div
                    className={isFold === "Ingredients" ? "showTab" : "hideTab"}
                  >
                    <div>{product_detail.ingredients}</div>
                  </div>
                </div>
                <div className="tab">
                  <span>Brewing guide</span>
                  <MoreBtn clickMoreBtn={() => clickMoreBtn("Brewing guide")} />
                </div>
                <div className="subTab">
                  <div
                    className={
                      isFold === "Brewing guide" ? "showTab" : "hideTab"
                    }
                  >
                    <div className="brewingTab">
                      {product_detail.brewing_quantity ? (
                        <div className="brewingTabEl">
                          <img
                            alt="quantity info"
                            src={product_detail.quantity_img}
                          ></img>
                          <span>{product_detail.brewing_quantity}</span>
                        </div>
                      ) : null}
                      {product_detail.brewing_time ? (
                        <div className="brewingTabEl">
                          <img
                            alt="time info"
                            src={product_detail.time_img}
                          ></img>
                          <span>{product_detail.brewing_time}</span>
                        </div>
                      ) : null}
                      {product_detail.brewing_temp ? (
                        <div className="brewingTabEl">
                          <img
                            alt="temp info"
                            src={product_detail.temp_img}
                          ></img>
                          <span>{product_detail.brewing_temp}</span>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="tab">
                  <span>Shippings & returns</span>
                  <MoreBtn
                    clickMoreBtn={() => clickMoreBtn("Shippings & returns")}
                  />
                </div>
                <div className="subTab">
                  <div
                    className={
                      isFold === "Shippings & returns" ? "showTab" : "hideTab"
                    }
                  >
                    <div>
                      We ship anywhere in the world! Check out our delivery and
                      returns policy here.
                    </div>
                  </div>
                </div>
                <div className="tab">
                  <span>Customer Reviews</span>
                  <MoreBtn
                    clickMoreBtn={() => clickMoreBtn("Customer Reviews")}
                  />
                </div>
                <div
                  className={
                    isFold === "Customer Reviews" ? "showTab" : "hideTab"
                  }
                >
                  <div></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
