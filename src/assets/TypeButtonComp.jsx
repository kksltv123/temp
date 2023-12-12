import React from "react";

const TypeButtonComp = ({
  classBolean,
  text,
  spanBolean,
  src,
  alt,
  clickEvent,
}) => {
  return (
    <button
      type="button"
      className={classBolean ? "btn_primary" : ""}
      onClick={clickEvent && clickEvent}
    >
      {spanBolean && <span>{text}</span>}
      <img src={src} alt={alt} />
      {!spanBolean && text}
    </button>
  );
};

export default TypeButtonComp;
