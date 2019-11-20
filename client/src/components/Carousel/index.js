import React, { Component } from "react";
import Slider from "infinite-react-carousel";
import "./style.css";

class Carousal extends Component {
  render() {
    const settings = {
      // autoplay: true,
      className: "carousal",
      dots: true,
    //arrowsScroll: 1,
      // duration: 100,
      // autoplaySpeed: 2000
    };

    return (
      <div>
        <span>
          <p className="carousalTitle">
            {/* Don't just Dream of good life, Plan them with ☞ DreamLifer */}
          </p>
        </span>
        <Slider {...settings}>
          <div>
            <p className="subTitles">Set Your Future Goals</p>
          </div>
          <div>
            <p className="subTitles">Track Your Goals</p>
          </div>
          <div>
            <p className="subTitles">Plan Your Day</p>
          </div>
          <div>
            <p className="subTitles">Review Your Day</p>
          </div>
          <div>
            <p className="subTitles">Personalize Your Memories</p>
          </div>
          <div>
            <p className="subTitles">Save Memories</p>
          </div>
          <div>
            <p className="subTitles">Daily Insightful Quotes</p>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousal;
