import React from "react";
import "./PartFour.css";

const paragdiv = {
  title: "The world's biggest healthcare platform",
  parag:
    "We work from 9 offices all over the world, bringing Docplanner Group to life in 13 countries.",
};
const divitems1 = [
  {
    id: Math.random(),
    logo: "https://www.docplanner.com/img/flag.png",
    title: "Leader in 13 countries",
    parag:
      "Poland, Brazil, Mexico, Spain, Italy, Germany, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile",
  },
  {
    id: Math.random(),
    logo: "https://www.docplanner.com/img/patients.png",
    title: "85,000,000 patients",
    parag: "visit our websites each month",
  },
];
const divitems2 = [
  {
    id: Math.random(),
    logo: "https://www.docplanner.com/img/visits.png",
    title: "13,000,000 appointments",
    parag: "booked last month",
  },
  {
    id: Math.random(),
    logo: "https://www.docplanner.com/img/doctors.png",
    title: "190,000 active doctors",
    parag: "trust our solutions",
  },
];

const PartFour = () => {
  return (
    <div id="bloc4">
      <div id="bloc4sec1">
        <h4>{paragdiv.title}</h4>
        <p>{paragdiv.parag}</p>
      </div>
      <div
        id="blocsec2"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {divitems1.map((el) => (
          <div id={el.logo}>
            <img src={el.logo} alt="logobloc1"></img>
            <h3>{el.title}</h3>
            <p>{el.parag}</p>
          </div>
        ))}
      </div>
      <div id="blocsec3">
        {divitems2.map((el) => (
          <div id={el.logo}>
            <img src={el.logo} alt="logobloc1"></img>
            <h3>{el.title}</h3>
            <p>{el.parag}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartFour;
