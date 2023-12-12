import React, { useState } from "react";
import CouponPopUp from "../assets/CouponPopUp";
import HeaderWrap from "../components/HeaderWrap";
import CouponWrap from "../components/CouponWrap";
import "../styles/coupon.css";

const Coupon = () => {
  const [couponPopUpState, setCouponPopUpState] = useState(false);

  return (
    <>
      <HeaderWrap />
      <CouponWrap setCouponPopUpState={setCouponPopUpState} />
      {couponPopUpState && (
        <CouponPopUp setCouponPopUpState={setCouponPopUpState} />
      )}
    </>
  );
};

export default Coupon;
