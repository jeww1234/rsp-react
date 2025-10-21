import React from "react";
import "./Box.style.css";

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img
        className="box-image"
        src={props.item && props.item.img}
        alt="이미지"
      />
      <h2>win</h2>
    </div>
  );
};

export default Box;
