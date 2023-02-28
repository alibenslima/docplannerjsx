import "./PartThree.css";
import React from "react";

const iconitems = [
  {
    id: Math.random(),
    logo: "https://cdn.discordapp.com/attachments/1034099381353336894/1062399990674243625/image.png",
  },
  {
    id: Math.random(),
    logo: "https://cdn.discordapp.com/attachments/1034099381353336894/1062399990674243625/image.png",
  },
  {
    id: Math.random(),
    logo: "https://cdn.discordapp.com/attachments/1034099381353336894/1062399990674243625/image.png",
  },
  {
    id: Math.random(),
    logo: "https://cdn.discordapp.com/attachments/1034099381353336894/1062399990674243625/image.png",
  },
  {
    id: Math.random(),
    logo: "https://cdn.discordapp.com/attachments/1034099381353336894/1062399990674243625/image.png",
  },
  {
    id: Math.random(),
    logo: "https://cdn.discordapp.com/attachments/1034099381353336894/1062399990674243625/image.png",
  },
  {
    id: Math.random(),
    logo: "https://cdn.discordapp.com/attachments/1034099381353336894/1062399990674243625/image.png",
  },
  {
    id: Math.random(),
    logo: "https://cdn.discordapp.com/attachments/1034099381353336894/1062399990674243625/image.png",
  },
  {
    id: Math.random(),
    logo: "https://cdn.discordapp.com/attachments/1034099381353336894/1062399990674243625/image.png",
  },
  {
    id: Math.random(),
    logo: "https://cdn.discordapp.com/attachments/1034099381353336894/1062399990674243625/image.png",
  },
];
const PartThree = () => {
  return (
    <div id="global">
      <div>
        <h4>We are a global company with local culture</h4>
      </div>
      <div id="image">
        {iconitems.map((el) => (
          <img src={el.logo} alt="logobloc1"></img>
        ))}
      </div>
    </div>
  );
};
export default PartThree;
