import React, { useState } from "react";
import Input from "../assets/Input";
import TypeButtonComp from "../assets/TypeButtonComp";
import { useTranslation } from "react-i18next";

const CouponWrap = ({ setCouponPopUpState }) => {
  const [userid, setUserId] = useState('');
  const [couponNo, setCounponNo] = useState('');
  
  const onChange1 = (event) => {
    setUserId(event.target.value);
  }

  const onChange2 = (event) => {
    setCounponNo(event.target.value);
  }

  const clickButton = () => {
    if (userid.length <= 4) {
      alert(t('message.idError'));      
      return;
    }

    if (couponNo.length <= 4) {
      alert(t('message.couponError'));
      return;
    }

    // 디비 저장 처리
    console.log(userid, "/", couponNo);
  }

  const { t } = useTranslation();

  return (
    <div className="coupon_wrap">
      <div className="illust_img">
        <img src="img/illust_02.png" alt="illust" />
      </div>
      <div className="box">
        <h1>Usar cupones</h1>
        <div className="form">
          <Input title={t(`coupon.loginid`)} value={userid} change={onChange1} placeholder="ID" />          
          <Input title={t(`coupon.couponno`)} value={couponNo} change={onChange2} placeholder={t(`coupon.couponno`)} />
          <TypeButtonComp          
            classBolean={true}
            text={t('coupon.register')}
            spanBolean={true}
            src="img/btn_bg.png"
            alt="img"
            clickEvent={clickButton}
          />
        </div>
        <div className="guide">
          <span className="tit">ID Guide</span>
          <p dangerouslySetInnerHTML={{ __html:t('coupon.IDGuide')}} />
          <TypeButtonComp
            classBolean={false}
            text="AVISO"
            spanBolean={false}
            src="img/alert.svg"
            alt="alert icon"
            clickEvent={() => setCouponPopUpState(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default CouponWrap;
