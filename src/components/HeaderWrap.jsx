import React from "react";
import Logo from "../assets/Logo";
import i18n from "../locales/i18n";
import { useTranslation } from "react-i18next";

const HeaderWrap = () => {
  const { t } = useTranslation();

  // 언어 변경하기
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="header_wrap">
      <div className="header type_02">
        <Logo />
        <div className="select_box">
          <select onChange={changeLanguage}>
            <option value="es">SPANISH</option>
            <option value="pt">PORTUGUESE</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HeaderWrap;
