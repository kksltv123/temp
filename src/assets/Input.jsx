import React from "react";

const Input = ({ title, placeholder, change }) => {
  return (
    <div className="item">
      <span className="tit">{title}</span>
      <input type="text" placeholder={placeholder} onChange={change} />
    </div>
  );
};

export default Input;
