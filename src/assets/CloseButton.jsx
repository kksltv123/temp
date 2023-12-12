import React from "react";

export const CloseButton = ({ setPopupState }) => {
  return (
    <button
      type="button"
      className="btn_close"
      onClick={() => setPopupState(false)}
    >
      <img src="img/close_white.svg" alt="close" />
    </button>
  );
};

export const YoutubeCloseButton = ({ setYoutubePopUpState }) => {
  return (
    <button
      type="button"
      className="btn_close"
      onClick={() => setYoutubePopUpState(false)}
    >
      <img src="img/close_white.svg" alt="close" />
    </button>
  );
};