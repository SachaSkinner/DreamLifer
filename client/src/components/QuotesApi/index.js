import React from "react";
import "./style.css";
function QuotesApi({ children }) {
    return (
    <div className="quoteBox">
      <h4 className="quoteTitle">Quote of the day</h4>
    <div className="quote">{children}</div>
    </div>
    )
  }
  export default QuotesApi;