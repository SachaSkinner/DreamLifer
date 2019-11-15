import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';

class Carousal extends Component {
  render() {
    const settings =  {
      autoplay: true,
      dots: true
    };
    return (
      <div className="carousalDiv">
        <span>Don't just Dream of good life...fulfill them with DreamLifer</span>
        <Slider { ...settings }>
          <div>
            <h1>1</h1>
          </div>
          <div>
            <h1>2</h1>
          </div>
          <div>
            <h1>3</h1>
          </div>
          <div>
            <h1>4</h1>
          </div>
          <div>
            <h1>5</h1>
          </div>
          <div>
            <h1>6</h1>
          </div>
          <div>
            <h1>7</h1>
          </div>
          <div>
            <h1>8</h1>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousal;