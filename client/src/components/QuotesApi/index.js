import React from "react";
import "./style.css";
function QuotesApi({ children }) {
    return <div className="quoteBox">
    <div className="quote">{children}</div>
    </div>;
  };
  export default QuotesApi;