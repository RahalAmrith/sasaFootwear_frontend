import React, { Component } from "react";

// image carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// images for banner
import banner01 from "../../images/Banners/001.jpg";
import banner02 from "../../images/Banners/002.jpg";
import banner03 from "../../images/Banners/003.jpg";

// images for promotion
import Pbanner01 from "../../images/promotionBanner/001.jpg";

import "../../assets/home/home.css";

// my Components

class Home extends Component {
  render() {
    return (
      <div className="home_main">
        <div className="home_imgSlides">
          <Carousel
            width="100%"
            autoPlay
            showThumbs={false}
            showStatus={false}
            infiniteLoop
          >
            <div
              style={{
                backgroundImage: "url('" + banner01 + "')"
              }}
            />
            <div
              style={{
                backgroundImage: "url('" + banner02 + "')"
              }}
            />
            <div
              style={{
                backgroundImage: "url('" + banner03 + "')"
              }}
            />
          </Carousel>
        </div>

        <div className="home_features container">
          <div className="col-sm-6 col-lg-3">
            <center>
              <div className="home_feature_box">
                <center>
                  <div className="iconImage">
                    <i className="fas fa-crown" />
                  </div>
                  <h3>S Elite</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </center>
              </div>
            </center>
          </div>
          <div className="col-sm-6 col-lg-3">
            <center>
              <div className="home_feature_box">
                <center>
                  <div className="iconImage">
                    <i className="fas fa-briefcase" />
                  </div>
                  <h3>S Office</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </center>
              </div>
            </center>
          </div>
          <div className="col-sm-6 col-lg-3">
            <center>
              <div className="home_feature_box">
                <center>
                  <div className="iconImage">
                    <i className="fas fa-home" />
                  </div>
                  <h3>S Another</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </center>
              </div>
            </center>
          </div>
          <div className="col-sm-6 col-lg-3">
            <center>
              <div className="home_feature_box">
                <center>
                  <div className="iconImage">
                    <i className="fas fa-umbrella-beach" />
                  </div>
                  <h3>S Other</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </center>
              </div>
            </center>
          </div>
        </div>
      
        <div className="home_promotion container">
          <div
            style={{ backgroundImage : "url('" + Pbanner01 + "')"}}
            className="pBanner"
          >

          </div>


        </div>
      </div>
    );
  }
}

export default Home;
