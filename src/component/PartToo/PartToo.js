import React from "react";

const blocitems = [
  {
    id: Math.random(),
    logo: "https://www.docplanner.com/icons/icon-patients.svg",
    title: "For patients",
    text: "Find a doctor, book a visit and solve any health-related doubt",
    couleur: "red",
  },
  {
    id: Math.random(),
    logo: "https://www.docplanner.com/icons/icon-doctors.svg",
    title: "For doctors",
    text: " Save time managing visits and cut no-shows by half",
    couleur: "blue",
  },
  {
    id: Math.random(),
    logo: "https://www.docplanner.com/icons/icon-clinics.svg",
    title: "For clinics",
    text: " Deliver an exceptional patient experience in your clinic",
    couleur: "green",
  },
];

const PartToo = () => {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        margin: "40px 40px",
        justifyContent: "space-between",
      }}
    >
      {blocitems.map((el) => (
        <div
          key={el.id}
          style={{
            backgroundColor: el.couleur,
          }}
        >
          <img src={el.logo} alt="logobloc1"></img>
          <h4>{el.title}</h4>
          <p> {el.text}</p>
        </div>
      ))}
    </div>
  );
};

export default PartToo;
