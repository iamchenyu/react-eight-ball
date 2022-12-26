import React, { useState } from "react";
import ColorBox from "./ColorBox";
import "./ColorBoxes.css";

// const ColorBoxes = ({ colors, number }) => {
//   const buttonClickHandler = () => {
//     const boxes = document.getElementsByClassName("ColorBoxes")[0].children;
//     for (let box of boxes) {
//       box.innerText = "";
//     }

//     const rand = Math.floor(Math.random() * 16);
//     const box = boxes[rand];

//     const randColor = Math.floor(Math.random() * colors.length);
//     box.style.backgroundColor = colors[randColor];
//     box.innerText = "changed!";
//   };

//   return (
//     <>
//       <div className="ColorBoxes">
//         {Array.from({ length: number }).map((el, idx) => (
//           <ColorBox key={idx} colors={colors} />
//         ))}
//       </div>
//       <button className="ColorBoxes-button" onClick={buttonClickHandler}>
//         Change
//       </button>
//     </>
//   );
// };

const choice = (arr) => {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

const ColorBoxes = ({ colors, number }) => {
  const [boxes, setBoxes] = useState(
    Array.from({ length: number }, () => {
      return { color: choice(colors), text: false };
    })
  );

  const buttonClickHandler = () => {
    boxes.map((box) => (box.text = false));
    setBoxes(() => {
      let copyBoxes = [...boxes];
      const rand = Math.floor(Math.random() * number);
      copyBoxes[rand].color = choice(colors);
      copyBoxes[rand].text = true;
      return copyBoxes;
    });
  };
  return (
    <>
      <div className="ColorBoxes">
        {boxes.map(({ color, text }, idx) => (
          <ColorBox key={idx} color={color} text={text} />
        ))}
      </div>
      <button onClick={buttonClickHandler}>Change</button>
    </>
  );
};
export default ColorBoxes;
