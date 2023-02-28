import React from "react";
import "./PartFive.css";
const partfivelem = {
  title: "Improve the lives of millions. Change yours forever.",
  parag:
    "More than 2600 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Munich, Istanbul, Rome, Rio, Bologna, Mexico City and Curitiba, our search for great talent never stops.",
};

const PartFive = () => {
  return (
    <div id="part">
      <div >
        <h4>{partfivelem.title}</h4>
      </div>
      <div >
        <p>{partfivelem.parag}</p>
      </div>
    </div>
  );
};

export default PartFive;
