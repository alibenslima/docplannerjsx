import React from "react";

import "./PartSeven.css";
const partsevitems = {
  parag: "Sounds interesting? Join us now!",
  boutton: "SEE ALL CURRENT OPENINGS",
};

const PartSeven = () => {
  return (
    <div class="joinus">
      <div>
        <h1>{partsevitems.parag}</h1>
      </div>
      <div>
        <button class="seeall">{partsevitems.boutton}</button>
      </div>
    </div>
  );
};

export default PartSeven;
