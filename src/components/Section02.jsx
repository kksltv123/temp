import React from "react";
import { useTranslation } from "react-i18next";

const Section02 = ({ setScrollState, element }) => {
  const { t } = useTranslation();

  return (
    <div
      ref={element && element}
      className="section section_02"
      style={{ height: "100vh" }}
    >
      <div className="inner">
        <div className="illust_img">
          <img src="img/illust_01.png" alt="illust" />
        </div>
        <div className="story">
          <h2>story</h2>
          <img src="img/asset_bg_01.png" className="only_pc" alt="bg" />
          <img src="img/asset_bg_02.png" className="only_mb" alt="bg" />
          <img
            src="img/asset_bg_03.png"
            className="only_mb under500"
            alt="bg"
          />
          <div
            className="txt_box scrollable-content"
            onMouseOver={() => setScrollState(true)}
            onMouseOut={() => setScrollState(false)}
          >
            <p>{t(`section.Story`)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section02;
