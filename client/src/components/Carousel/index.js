import React, { Component } from "react";
import Slider from "infinite-react-carousel";
import "./style.css";

class Carousal extends Component {
  render() {
    const settings = {
      autoplay: false,
      className: "carousal",
      dots: true,
    //   arrowsScroll: 1,
      duration: 100,
      autoplaySpeed: 1000
    };

    return (
      <div>
        <span>
          <p className="carousalTitle">
            Don't just Dream of good life, Plan them with ☞ DreamLifer
          </p>
        </span>
        <Slider {...settings}>
          <div>
            <p className="subTitles">Plan your future</p>
          </div>
          <div>
            <p className="subTitles">Track your goals</p>
          </div>
          <div>
            <p className="subTitles">Plan Your day</p>
          </div>
          <div>
            <p className="subTitles">Review your day</p>
          </div>
          <div>
            <p className="subTitles">Create Memories</p>
          </div>
          <div>
            <p className="subTitles">Go back to past memories</p>
          </div>
          <div>
            <p className="subTitles">Stay motiveted with the daily quotes</p>
          </div>
          <div>
            <p className="subTitles">Accomplish more...</p>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousal;
