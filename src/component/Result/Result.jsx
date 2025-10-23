import React from "react";
import "./Result.style.css";

const Result = (props) => {
    
  return (
    <div className="box-result">
      <h2>{props.result}</h2>
    </div>
  );
};

export default Result;
