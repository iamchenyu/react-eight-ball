import React from "react";
import "./ColorBox.css";

const ColorBox = ({ color, text }) => {
  //   const rand = Math.floor(Math.random() * colors.length);
  return (
    <div style={{ backgroundColor: color }} className="ColorBox">
      {text ? "changed" : ""}
    </div>
  );
};

export default ColorBox;
