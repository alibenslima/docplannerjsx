import React from "react";
import "./SixPart.css";
const gallery = [
  {
    id: Math.random(),
    photo: "https://www.docplanner.com/images/warsaw.png",
    title: "Warsaw",
    bouton: "See Openning",
  },
  {
    id: Math.random(),
    photo: "https://www.docplanner.com/images/barcelona.png",
    title: "barcelona",
    bouton: "See Openning",
  },
  {
    id: Math.random(),
    photo: "https://www.docplanner.com/images/munich.png",
    title: "munich",
    bouton: "See Openning",
  },
  {
    id: Math.random(),
    photo: "https://www.docplanner.com/images/istanbul.png",
    title: "istanbul",
    bouton: "See Openning",
  },
  {
    id: Math.random(),
    photo: "https://www.docplanner.com/images/rome.png",
    title: "rome",
    bouton: "See Openning",
  },
  {
    id: Math.random(),
    photo: "https://www.docplanner.com/images/bologna.png",
    title: "bologna",
    bouton: "See Openning",
  },
  {
    id: Math.random(),
    photo: "https://www.docplanner.com/images/curitiba.png",
    title: "curitiba",
    bouton: "See Openning",
  },
  {
    id: Math.random(),
    photo: "https://www.docplanner.com/images/mexico-city.png",
    title: "mexico-city",
    bouton: "See Openning",
  },
  {
    id: Math.random(),
    photo: "https://www.docplanner.com/images/rio-janeiro.png",
    title: "rio-janeiro",
    bouton: "See Openning",
  },
];
const SixPart = () => {
  return (
    <div class="diaporama">
      {gallery.map((el) => (
        <div class="case1">
          <div class="pic">
            <img class="effectpic" src={el.photo} alt="photopays" />
            <div class="soupic">
              <h2 class="titlepic">{el.title}</h2>
              <button class="bouttonpic">{el.bouton}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SixPart;
