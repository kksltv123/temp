import React from "react";

const ButtonComp = ({ link, imgSrc, imgArt }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img src={imgSrc} alt={imgArt} />
    </a>
  );
};

export default ButtonComp;
