import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import './style.css';


class Carousal extends Component {
  render() {
    const settings =  {
      autoplay: true,
      className: 'carousal',
      dots: true

    };

    const title ={
        backgroundColor: 'rgba(53, 75, 66, 0.51)',
        color: 'white',
        position: "relative",
        top:'-120px',
        // opacity: "0.6"

    }
    return (
      <div className="carousalDiv">
        <span><h5 style={title}>Don't just Dream of good life, fulfill them with DreamLifer</h5></span>
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