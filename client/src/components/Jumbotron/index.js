import React from "react";
import bgImage from '../../../src/assets/images/home2.jpg'

function Jumbotron({ children }) {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        
        backgroundSize: "100% 100%",
        height: "480px",
        width: "auto",
        paddingTop: 120,
        paddingBottom: 120,
        textAlign: "center",
        boxShadow: `0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`
      }}
      
    >
      {children}
    </div>
  );
}

export default Jumbotron;
