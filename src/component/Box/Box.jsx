import React from "react";
import "./Box.style.css";
import Result from "../Result/Result";

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      {props.item && (
        <img className="box-image" src={props.item.img} alt="이미지" />
      )}
      <Result item={props.item && props.item.name} result={props.result}/>
    </div>
  );
};

export default Box;
