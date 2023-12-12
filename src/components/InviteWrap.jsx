import React from "react";
import BigLogo from "../assets/BigLogo";
import ButtonComp from "../assets/ButtonComp";
import SnsButtons from "../assets/SnsButtons";
import { useTranslation } from "react-i18next";

const InviteWrap = ({ teamShareBolean, snsShareBolean }) => {
  const { t } = useTranslation();

  return (
    <div className="invite_wrap">
      <BigLogo />

      {/* 팀공유 멘트 */}
      {teamShareBolean && <p>{t('coupon.share_title')}</p>}
      {/* 친구공유 멘트 */}
      { snsShareBolean && <p>{t('coupon.share_friend')}</p>}

      <div className="btn_wrap">
        <ButtonComp
          link="https://play.google.com/store/apps/details?id=com.softnyx.gbr"
          imgSrc={t('coupon.img1')}
          imgAlt={t('coupon.alt1')}
        />
        <ButtonComp
          link="https://play.google.com/store/apps/details?id=com.softnyx.gbr"
          imgSrc={t('coupon.img2')}
          imgAlt={t('coupon.img2')}
        />
      </div>
      {snsShareBolean && (
        <div className="sns_link">
          <SnsButtons />
        </div>
      )}
    </div>
  );
};

export default InviteWrap;
