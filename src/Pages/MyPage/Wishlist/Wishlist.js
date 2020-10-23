import React, { Component } from "react";
import { config } from "./../../../../src/config";
import ProductItem from "../../../Components/ProductItem/ProductItem";
import "./wishlist.scss";

class Wishlist extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      review: [],
    };
  }

  componentDidMount() {
    const headers = {
      Authorization: sessionStorage.getItem("login_token"),
    };
    fetch(`${config.api}/user/wishlist`, { headers })
      .then((response) => response.json())
      .then((res) => this.setState({ data: res.product_list }));
  }
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
    const newProduct = this.state.product;
    const result = {};
    for (let info of this.state.review) {
      result[info["product_id"]] = [info["rating_img"], info["review_count"]];
    }
    console.log(result);

    for (let info of newProduct) {
      console.log(info["product_id"]);
      info["review_count"] = result[+info["product_id"]][1];
      info["review_img"] = result[+info["product_id"]][0];
    }

    this.setState({ data: newProduct });
  };

  handleRemove = (removeId) => {
    console.log(removeId);

    fetch(`${config.api}/user/wishlist`, {
      method: "POST",
      headers: {
        Authorization: sessionStorage.getItem("login_token"),
      },
      body: JSON.stringify({
        product_id: removeId,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });

    let newData = this.state.data.filter((el) => el.product_id !== removeId);
    this.setState({ data: newData });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="Wishlist">
        <header className="wishlistHeader">My Wishlist</header>
        <section className="wishlistProduct">
          <ul>
            {data &&
              data.map((el, idx) => (
                <ProductItem
                  data={el}
                  key={el.product_id}
                  onClickRemove={this.handleRemove}
                />
              ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default Wishlist;
