import React from "react";

export const PlayButton = ({ setYoutubePopUpState }) => {

  return (
    <button type="button" className="btn_play">
      <img src="img/btn_play.png" alt="play" onClick={() => setYoutubePopUpState(true)} />
    </button>
  );
};

export const AppButton = ({index, link, img, name}) => {
  return (
    <a key={index} href={link} target="_blank" rel="noreferrer">
      <img src={img} alt={name} />
      <span>{name}</span>
    </a>
  );
};