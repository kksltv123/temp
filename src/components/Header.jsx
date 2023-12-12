import React from "react";
import MenuIcon from "../assets/MenuIcon";
import { linkList } from "../data/data";
import Logo from "../assets/Logo";

import LangButton from "../assets/LangButton";
import SnsButtons from "../assets/SnsButtons";
import { useTranslation } from "react-i18next";

const Header = ({
  mobileMenuState,
  setMobileMenuState,
  setPopupState,
  clickHandler,
  listTabs,
}) => {

  const { t } = useTranslation();
  
  return (
    <div className="header_wrap">
      <div className="header_top">
        <a href="/" className="logo">
          <img src="img/logo_softnyx.png" alt="로고" />
        </a>
        <div className="link">
          <ul>            
            {linkList.map((list, index) => (                            
              <li key={index}>
                <a href={t(`header.${list.link}`)} target="_blank" rel="noreferrer">
                {t(`header.${list.linkName}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <LangButton setPopupState={setPopupState} />
      </div>
      <div className="header">
        <a href="#sec_01" className="logo">
          <img src="img/logo.png" alt="로고" />
        </a>
        <div className={`menu_wrap ${mobileMenuState ? "on" : ""}`}>
          <div className="inner">
            <div className="menu_head">
              <Logo />
              <MenuIcon
                setMobileMenuState={setMobileMenuState}
                mobileMenuState={mobileMenuState}
              />
            </div>
            <div className="gnb">
              <ul>
                {Array.from(listTabs).map((list, index) => (
                  
                  <li key={index}>
                    <a
                      href={`#sec_0${index + 1}`}
                      onClick={() => {
                        list.onMoveToElement();
                        clickHandler(index);
                      }}
                    >
                      {t(`header.${list.name}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sns_link">
              <SnsButtons />
            </div>
            <div className="header_top">
              <Logo />
              <div className="link">
                <ul>
                  {linkList.map((list, index) => (
                    <li key={index}>
                      <a href={list.link} target="_blank" rel="noreferrer">
                        {list.linkName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <LangButton setPopupState={setPopupState} />
            </div>
          </div>
        </div>
        <div className="sns_link">
          <SnsButtons />
        </div>
        <MenuIcon
          setMobileMenuState={setMobileMenuState}
          mobileMenuState={mobileMenuState}
        />
      </div>
    </div>
  );
};

export default Header;
