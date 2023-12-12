import React, { useState } from "react";
import { PlayButton, AppButton } from "../assets/CustomButton";
import BigLogo from "../assets/BigLogo";
import { useTranslation } from "react-i18next";
import YoutubeComponent from "../assets/YoutubeComponent";

const Section01 = ({ element }) => {
  const [youtubePopUpState, setYoutubePopUpState] = useState(false);
  const { t } = useTranslation();

  return (
    <>
    <div
      ref={element && element}
      className="section section_01"
      style={{ height: "100vh" }}
    >
      <div className="inner">
        <BigLogo />
        <PlayButton link={t(`section.YoutubeLink`)} setYoutubePopUpState={setYoutubePopUpState} />

        <div className="btn_wrap">
          <AppButton index={0} link={t(`section.AppStoreLink`)} img="img/app_apple.png" name={t(`section.AppStore`)} />
          <AppButton index={1} link={t(`section.GooglePlayLink`)} img="img/app_google.png" name={t(`section.GooglePlay`)} />
        </div>
      </div>
    </div>
    {          
      youtubePopUpState && (        
        <YoutubeComponent setYoutubePopUpState={setYoutubePopUpState} />
      )
    }
   </>
  );
};

export default Section01;