import React from "react";
import pomodoro from "../assets/images/Pomodoro.png";
import books from "../assets/images/books.jpg";
import stories from "../assets/images/story.png";
import steps from "../assets/images/steps1.jpg";
import habits from "../assets/images/habits1.jpg";
import wishes from "../assets/images/magic.jpg";
import podcasts from "../assets/images/podcasts.jpg";
import books2 from "../assets/images/books2.jpg";
import movies from "../assets/images/movies2.jpg";
import "../App.css";

function Community() {

      const headerStyle = {
        background: '#315a78',
        color: '#fff',
        textAlign: 'center',
        padding: '10px',
        boxShadow: `0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
        borderRadius: "10px"
    }

  return (
    <div className="container">

    <h4 style={headerStyle}>Do you know about the Pomodoro technique that will help you be more productive? Check it out and even more wonderful resources to find some insights and inspiration!</h4>
      
      <div className="gallery">
        <a
          className="resourcesImage"
          href=" https://www.cleverism.com/the-pomodoro-technique-time-management/" target="_blank" rel="noopener noreferrer"
          title='Pomodoro technique, time management!'
        >
          {" "}
          <img src={pomodoro} alt="" />
        </a>
      </div>


      <div className="gallery">
        <a
          className="resourcesImage"
          href=" https://double-barrelledtravel.com/top-5-most-inspiring-books/" target="_blank" rel="noopener noreferrer"
          title='Inspirational book list!'
        >
          {" "}
          <img src={books} alt="" />
        </a>
      </div>


      <div className="gallery">
        <a
          className="resourcesImage"
          href=" https://wealthygorilla.com/10-most-inspirational-short-stories/" target="_blank" rel="noopener noreferrer"
          title='10 Inspirational short stories!'
        >
          {" "}
          <img src={stories} alt="" />
        </a>
      </div>


      <div className="gallery">
        <a
          className="resourcesImage"
          href="https://www.success.com/7-steps-to-achieve-your-dream/" target="_blank" rel="noopener noreferrer"
          title='Guide to achieving your dream!'
        >
          {" "}
          <img src={steps} alt="" />
        </a>
      </div>


      <div className="gallery">
        <a
          className="resourcesImage"
          href="https://medium.com/thrive-global/7-habits-you-must-stop-doing-if-you-want-to-achieve-your-dream-goal-44d38592e575" target="_blank" rel="noopener noreferrer"
          title='Tips to kicking bad habits!'
        >
          {" "}
          <img src={habits} alt="" />
        </a>
      </div>


      <div className="gallery">
        <a
          className="resourcesImage"
          href="https://natashaatlas.com/2018/05/17/6-magical-movies-where-wishes-do-come-true/" target="_blank" rel="noopener noreferrer"
          title='List of magical movies!'
        >
          {" "}
          <img src={wishes} alt="" />
        </a>
      </div>


      <div className="gallery">
        <a
          className="resourcesImage"
          href="https://greatperformersacademy.com/habits/listen-15-podcasts-that-will-get-you-success-and-happiness" target="_blank" rel="noopener noreferrer"
          title='Podcasts to motivate you!'
        >
          {" "}
          <img src={podcasts} alt="" />
        </a>
      </div>


      <div className="gallery">
        <a
          className="resourcesImage"
          href="https://livingthecanadiandream.com/5-books-that-will-help-you-live-your-dreams/" target="_blank" rel="noopener noreferrer"
          title='5 Creative and motivating books!'
        >
          {" "}
          <img src={books2} alt="" />
        </a>
      </div>
      <div className="gallery">
        <a
          className="resourcesImage"
          href="https://brightside.me/wonder-films/15-inspiring-movies-that-are-perfect-for-the-whole-family-151705/" target="_blank" rel="noopener noreferrer"
          title='Thought stimulating movies!'
        >
          {" "}
          <img src={movies} alt="" />
        </a>
      </div>
    </div> 
  );
}

export default Community;
