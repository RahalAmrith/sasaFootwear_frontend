import React, { Component } from "react";

// images
import img01 from "../../images/New Arrivals/01.jpg";
import img02 from "../../images/New Arrivals/02.jpg";
import img03 from "../../images/New Arrivals/03.jpg";
import img04 from "../../images/New Arrivals/04.jpg";

import "../../assets/home/NewArrivalItem.css";

class NewArrivalItem extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    var img = null;
    switch (this.props.img) {
      case "01":
        img = img01;
        break;
      case "02":
        img = img02;
        break;
      case "03":
        img = img03;
        break;
      case "04":
        img = img04;
        break;

      default:
        break;
    }
    return (
      <div className="col-sm-6 col-lg-3">
        <div className="nai_main ">
          <div
            className="nai_img"
            style={{ backgroundImage: "url('" + img + "')" }}
          />
          <h1 className="nai_name">{this.props.name}</h1>
          <h1 className="nai_price"> Rs. {this.props.price}</h1>
        </div>
      </div>
    );
  }
}

export default NewArrivalItem;
