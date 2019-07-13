import React, { Component } from "react";

import "../../assets/common/Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Head_main">
        <div className="head_topRow">
          <div className="Head_smLinks">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-twitter" />
            <i className="fab fa-linkedin-in" />
            <i className="fab fa-instagram" />
          </div>
        </div>
        <div className="Head_nav">
          <div className="Head_logo" />
          <ul className="Head_navList">
              <li>
                Products
                <div className="head_dropdown">
                  <ul>
                    <li>S Elite</li>
                    <li>S Office</li>
                    <li>S Other</li>
                    <li>S Another</li>
                  </ul>
                </div>
              </li>
              <li>Shops</li>
              <li>Contact Us</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
