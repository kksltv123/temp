import React, { useState } from "react";
import CloseButton from "../assets/CloseButton";

const PopUp = ({ setPopupState }) => {
  const [ lang, setLang] = useState("en");

  function SetLanguage(val) {
    setLang(val);
    console.log("SetLanguage", lang);
  }
  return (
    <div className="popup_wrap sel_link">
      <div className="inner">
        <CloseButton setPopupState={setPopupState} />
        <ul>
          <li>
            <a href="#">SPANISH</a>
          </li>
          <li>
            <a href="#">PORTUGUESE</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PopUp;
