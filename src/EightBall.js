import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
  const [text, setText] = useState("Think of a Question");
  const [color, setColor] = useState("black");
  const [click, setClick] = useState(0);
  //   const [greenCount, setGreenCount] = useState(0);
  //   const [goldenCount, setGoldenCount] = useState(0);
  //   const [redCount, setRedCount] = useState(0);

  const ballClickHandler = () => {
    const rand = Math.floor(Math.random() * answers.length);
    setText(answers[rand].msg);
    setColor(answers[rand].color);
    setClick(click + 1);
  };

  const ballResetHandler = () => {
    setText("Think of a Question");
    setColor("black");
    setClick(0);
    // setGreenCount(0);
    // setGoldenCount(0);
    // setRedCount(0);
  };
  return (
    <>
      <h1>Eight Ball</h1>
      <div
        className="EightBall"
        style={{ backgroundColor: color }}
        onClick={ballClickHandler}
      >
        <strong>{text}</strong>
      </div>
      <div>
        <p>Total Clicks #{click}</p>
        {/* <p>Green Color #{greenCount}</p>
        <p>Goldenrod Color #{goldenCount}</p>
        <p>Red Color #{redCount}</p> */}
      </div>
      <button onClick={ballResetHandler}>Reset the ball</button>
    </>
  );
};

EightBall.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ],
};

export default EightBall;
