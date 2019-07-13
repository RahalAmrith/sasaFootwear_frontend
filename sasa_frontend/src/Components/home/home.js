import React, { Component } from "react";

// image carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// new arrival Item
import NewArrivalItem from "./NewArrivalItem";

// images for banner
import banner01 from "../../images/Banners/001.jpg";
import banner02 from "../../images/Banners/002.jpg";
import banner03 from "../../images/Banners/003.jpg";

// images for promotion
import Pbanner01 from "../../images/promotionBanner/001.jpg";

import "../../assets/home/home.css";

// my Components

class Home extends Component {
  constructor() {
    super();
    this.state = {};

    this.newArrivalList = [
      {
        img: "01",
        name: "Shoe Name 01",
        price: "1024.00",
        stars: 5
      },
      {
        img: "02",
        name: "Shoe Name 01",
        price: "1024.00",
        stars: 5
      },
      {
        img: "03",
        name: "Shoe Name 01",
        price: "1024.00",
        stars: 5
      },
      {
        img: "04",
        name: "Shoe Name 01",
        price: "1024.00",
        stars: 5
      },
      {
        img: "01",
        name: "Shoe Name 01",
        price: "1024.00",
        stars: 5
      },
      {
        img: "02",
        name: "Shoe Name 01",
        price: "1024.00",
        stars: 5
      },
      {
        img: "03",
        name: "Shoe Name 01",
        price: "1024.00",
        stars: 5
      }
    ];
  }
  render() {
    var newArrivals = this.newArrivalList.map((data, i) => {
      return (
        <NewArrivalItem
          key={i}
          img={data.img}
          name={data.name}
          price={data.price}
          stars={data.stars}
        />
      );
    });
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
            style={{ backgroundImage: "url('" + Pbanner01 + "')" }}
            className="pBanner"
          />
        </div>

        <div className="home_newArrivals container">
          <center>
            <h2>New Arrival Items</h2>
            <p>
              Investigationes demonstraverunt lectores legere me lius quod ii
              legunt saepius claritas est etiam processus dynamicus, qui
              sequitur mutationem.
            </p>
            <hr />
          </center>
          {newArrivals}
        </div>
      </div>
    );
  }
}

export default Home;
