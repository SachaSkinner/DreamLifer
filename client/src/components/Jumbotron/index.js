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
        boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`
      }}
      className="jumbotron container"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
