import React, { Component } from "react";
import Slider from "react-slick";
import adver4 from "../assets/adver4.jpg";
import adver2 from "../assets/adver2.jpg";
import adver3 from "../assets/adver3.jpg";
export default class Banner extends Component {
  render() {
    const settings = {
      dots: true,

      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img
              src={adver3}
              style={{ width: " 100%", height: "355px", marginTop: "45px" }}
            />
          </div>
          <div>
            <img
              src={adver2}
              style={{ width: " 100%", height: "355px", marginTop: "45px" }}
            />
          </div>
          <div>
            <img
              src={adver4}
              style={{ width: " 100%", height: "355px", marginTop: "45px" }}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
