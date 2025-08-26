import React, { useState } from "react";

export default function Exercise1() {
  // Step 1: state with images and current image index
  const [images] = useState([
    "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
    "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
  ]);
  const [currentImg, setCurrentImg] = useState(0);

  // Step 2: method to go back (decrement currentImg, not below 0)
  const shiftImageBack = () => {
    setCurrentImg((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // Step 3: method to go forward (increment currentImg, not above images.length - 1)
  const shiftImageForward = () => {
    setCurrentImg((prev) => (prev < images.length - 1 ? prev + 1 : prev));
  };

  return (
    <div>
      <button className="back" onClick={shiftImageBack}>
        Back
      </button>

      <img
        src={images[currentImg]}
        alt={`Image ${currentImg + 1}`}
        style={{ width: 300, height: 300, objectFit: "cover", margin: "0 10px" }}
      />

      <button className="forward" onClick={shiftImageForward}>
        Forward
      </button>
    </div>
  );
}
