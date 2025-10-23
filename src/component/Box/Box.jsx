import React from "react";
import "./Box.style.css";
import Result from "../Result/Result";

const Box = (props) => {
  console.log(props.result)
  return (
    <div className={`box ${props.result === "Draw" ? "draw" : props.result === "Win" ? "win" : "lose"}`}>
      <h1 className="box-title">{props.title}</h1>
      {props.item && (
        <img className="box-image" src={props.item.img} alt="이미지" />
      )}
      <Result item={props.item && props.item.name} result={props.result}/>
    </div>
  );
};

export default Box;
