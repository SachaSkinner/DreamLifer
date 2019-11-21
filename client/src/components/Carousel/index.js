import "./style.css";
import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  "https://images.pexels.com/photos/3192801/pexels-photo-3192801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/2776479/pexels-photo-2776479.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
  // console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const Carousal = () => {
    return (
      <div className="container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Plan your day and Track Your goals </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Review Your Day and Save Memories</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Daily Insightful Quotes</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}


export default Carousal;
