import React from "react";
import "./PartOne.css";
const partonelem = {
  logopartone: "https://www.docplanner.com/img/sygnet.png",
  titlepart1: "Making the healthcare experience more human",
  parag1:
    " We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.",
  parag2:
    "We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.",
};

const PartOne = () => {
  return (
    <div>
      <div id="part1">
        <img
          style={{ height: "50px" }}
          src={partonelem.logopartone}
          alt="chanlogo"
        />
        <h4>{partonelem.titlepart1}</h4>
      </div>
      <div id="part2">
        <p>{partonelem.parag1}</p>
        <p>{partonelem.parag2}</p>
      </div>
    </div>
  );
};

export default PartOne;
