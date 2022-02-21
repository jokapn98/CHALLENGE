import React, { useState } from "react";
import Cocktail from "./Cocktail";

export const Random = ({ data }) => {
  const [randomCoctail, setRandomCoctail] = useState([]);
  const handleRandomCoctail = () => {
    var random = data[Math.floor(Math.random() * data.length)];
    setRandomCoctail(random);
  };

  return (
    <div className="random mt-5 ">
      <h1 className="h1 fw-700">CHOOSE A RANDOM COCKTAIL</h1>
      <button onClick={handleRandomCoctail}>Random cocktail</button>
      <Cocktail data={randomCoctail} />
    </div>
  );
};
