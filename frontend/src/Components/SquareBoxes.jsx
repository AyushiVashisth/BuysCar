import React from "react";

const ColorSquares = ({ numberOfBoxes, colors }) => {
  console.log(colors);
  const renderColorSquares = () => {
    return colors
      .slice(0, numberOfBoxes)
      .map((color, index) => (
        <div
          key={index}
          className={`w-[20px] h-[20px] border-2 ${
            color.toLowerCase() === "black" || color.toLowerCase() === "white"
              ? `bg-${color.toLowerCase()}`
              : `bg-${color.toLowerCase()}-500`
          } rounded-md mx-1`}
        ></div>
      ));
  };

  return (
    <div className=" flex align-middle justify-between">
      {renderColorSquares()}
    </div>
  );
};

export default ColorSquares;
