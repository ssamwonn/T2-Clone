import React, { Component } from "react";
import Slider from "react-slick";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", background: "red" }}
      // style={{
      //   backgroundImage:
      //     "https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/en_AU/v1598427800341/images/pdp-right.png",
      // }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class MainImgSlider extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    const { product_detail } = this.props;

    return (
      <div className="MainImgSlider">
        <Slider {...settings}>
          {product_detail.big_image &&
            product_detail.big_image.map((el, idx) => {
              return (
                <div key={idx}>
                  <img alt="product" src={el} />
                </div>
              );
            })}
        </Slider>
      </div>
    );
  }
}
