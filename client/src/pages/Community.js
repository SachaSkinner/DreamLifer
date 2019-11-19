import React from "react";
import { Col, Row } from "../components/Grid";
import pomodoro from "../assets/images/Pomodoro.png";
import books from "../assets/images/books.jpg";
import stories from "../assets/images/story.png";
import steps from "../assets/images/steps1.jpg";
import habits from "../assets/images/habits1.jpg";
import wishes from "../assets/images/magic.jpg";
import podcasts from "../assets/images/podcasts.jpg";
import books2 from "../assets/images/books2.jpg";
import "../App.css";

function Community() {
  return (
    <div className="container">
      
      <div className="gallery">
        <a
          className="resourcesImage"
          href=" https://www.cleverism.com/the-pomodoro-technique-time-management/"
        >
          {" "}
          <img src={pomodoro} alt="" />
        </a>
      </div>


      <div className="gallery">
        <a
          className="resourcesImage"
          href=" https://double-barrelledtravel.com/top-5-most-inspiring-books/"
        >
          {" "}
          <img src={books} alt="" />
        </a>
      </div>


      <div className="gallery">
        <a
          className="resourcesImage"
          href=" https://wealthygorilla.com/10-most-inspirational-short-stories/"
        >
          {" "}
          <img src={stories} alt="" />
        </a>
      </div>


      <div className="gallery">
        <a
          className="resourcesImage"
          href="https://www.success.com/7-steps-to-achieve-your-dream/"
        >
          {" "}
          <img src={steps} alt="" />
        </a>
      </div>


      <div className="gallery">
        <a
          className="resourcesImage"
          href="https://medium.com/thrive-global/7-habits-you-must-stop-doing-if-you-want-to-achieve-your-dream-goal-44d38592e575"
        >
          {" "}
          <img src={habits} alt="" />
        </a>
      </div>


      <div className="gallery">
        <a
          className="resourcesImage"
          href="https://natashaatlas.com/2018/05/17/6-magical-movies-where-wishes-do-come-true/"
        >
          {" "}
          <img src={wishes} alt="" />
        </a>
      </div>


      <div className="gallery">
        <a
          className="resourcesImage"
          href="https://greatperformersacademy.com/habits/listen-15-podcasts-that-will-get-you-success-and-happiness"
        >
          {" "}
          <img src={podcasts} alt="" />
        </a>
      </div>


      <div className="gallery">
        <a
          className="resourcesImage"
          href="https://livingthecanadiandream.com/5-books-that-will-help-you-live-your-dreams/"
        >
          {" "}
          <img src={books2} alt="" />
        </a>
      </div>

    </div>
  );
}

export default Community;
