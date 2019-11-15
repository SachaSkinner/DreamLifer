import React from "react";
import bgImage from '../../../src/assets/images/road.jpeg'

function Jumbotron({ children }) {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        height: 300,
        clear: "both",
        paddingTop: 120,
        textAlign: "center",
      }}
      className="jumbotron container"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
