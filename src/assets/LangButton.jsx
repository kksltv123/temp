import React from "react";

const LangButton = ({ setPopupState }) => {
  return (
    <button
      type="button"
      className="btn_lang"
      onClick={() => setPopupState(true)}
    >
      <img src="img/earth.png" alt="언어선택" />
    </button>
  );
};

export default LangButton;
