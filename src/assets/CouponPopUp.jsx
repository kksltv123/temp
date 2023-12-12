import React from "react";
import { useTranslation } from "react-i18next";

const CouponPopUp = ({ setCouponPopUpState }) => {
  const { t } = useTranslation();

  return (
    <div className="popup_wrap guide_pop">
      <div className="inner">
        <div className="head">
          <h2>AVISO</h2>
          <button type="button" className="btn_close">
            <img
              src="img/close.svg"
              alt="close"
              onClick={() => setCouponPopUpState(false)}
            />
          </button>
        </div>
        <div className="cont">
          <span>Usar Cupones</span>
          <ul>
            <li>
              <p>{t('coupon.desc1')}</p>
            </li>
            <li>
              <p>{t('coupon.desc2')}</p>
            </li>
            <li>
              <p>{t('coupon.desc3')}</p>
            </li>
            <li>
              <p>{t('coupon.desc4')}</p>
            </li>
            <li>
              <p>{t('coupon.desc5')}</p>
            </li>
            <li>
              <p>{t('coupon.desc6')}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CouponPopUp;
