import React, { Component } from "react";
import "./Card.scss";
class Card extends Component {
  render() {
    return (
      <div className="contentCard">
        {this.props.cardType === "video" ? (
          <video
            className="cardImg"
            autoPlay
            muted
            loop
            src={this.props.cardImg}
          />
        ) : (
          <img className="cardImg" src={this.props.cardImg} />
        )}

        <p className="cardTitle">{this.props.cardTitle}</p>
        <p className="cardText"> {this.props.cardText}</p>
        <p className="cardSubText">{this.props.cardSubText}</p>
      </div>
    );
  }
}

export default Card;
