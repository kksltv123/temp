import React from "react";
import { snsLink } from "../data/data";

const SnsButtons = () => {
  return (
    <ul>
      {snsLink.map((list, index) => (
        <li key={index}>
          <a href={list.link} target="_blank" rel="noreferrer">
            <img src={list.img} alt="discord" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SnsButtons;
